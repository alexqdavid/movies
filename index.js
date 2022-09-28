console.log("hello world");
let message = document.querySelector('#message')
function addMovie(event) {

event.preventDefault();

let inputField = document.querySelector('input');

let movie = document.createElement('li');

let movieTitle = document.createElement('span');

movieTitle.addEventListener('click', crossOffMovie)

movieTitle.textContent = inputField.value;

movie.appendChild(movieTitle);

let deleteBtn = document.createElement('button')

deleteBtn.textContent = 'X';

deleteBtn.addEventListener('click', deleteMovie)

movie.appendChild(deleteBtn);

document.querySelector('ul').appendChild(movie);

inputField.value = ''

}
document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent =  'deleted'
}
function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true){
             message.textContent = 'watched'
    } else {
        message.textContent = 'movie added back'
    }
}
