// Params
const params = new URLSearchParams(window.location.search);
const collec = params.has('collection') ? params.get('collection') : null;
const newCollec = params.has('new') && params.get('new');

alert('collec: ' + collec + '\n\mnew? :' + newCollec);
// References DOM
const nameForm = document.querySelector('#name-form');
const addCardForm = document.querySelector('#add-card-form');

// EventListener
nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Rename de la collec');
})

addCardForm.addEventListener('submit', (event) => {
    event.preventDefault()
    alert('ajout de la carte');
});