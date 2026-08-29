// Params
const params = new URLSearchParams(window.location.search);
const collec = params.has('collection') ? params.get('collection') : null;
const newCollec = params.has('new') && params.get('new');

// References DOM
const nameForm = document.querySelector('#name-form');
//const nameFormSubmit = nameForm.querySelector('button[type="submit"]');
const addCardForm = document.querySelector('#add-card-form');
//const addCardFormSubmit = addCardForm.querySelector('button[type="submit"]')

// EventListener
nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Rename de la collec');
})

addCardForm.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('ajout de la carte');
});