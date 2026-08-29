// Params
const params = new URLSearchParams(window.location.search);
let collec = params.has('collection') ? params.get('collection') : null;
const newCollec = params.has('new') && params.get('new');

// References DOM
const h1 = document.querySelector('h1');
const nameForm = document.querySelector('#name-form');
const newNameInput = nameForm.querySelector('input');
const cardArea = document.querySelector('#card-area');
const addCardForm = document.querySelector('#add-card-form');
const rectoInput = document.querySelector('#recto');
const versoInput = document.querySelector('#verso');
const deleteCollecBtn = document.querySelector('#delete-collec');
//const addCardFormSubmit = addCardForm.querySelector('button[type="submit"]')

// Ecrire la page
h1.innerText = collec;
const cards = JSON.parse(localStorage.getItem(collec));
cards.forEach(card => {
    cardArea.append(`<div>| ${card[0]}: ${card[1].}</div>`);
});

// EventListener
nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newName = newNameInput.value;

    // Empecher de renommer si la collection existe deja
    if (localStorage.getItem(newName) !== null) {
        alert('Ce nom est deja utilise')
        return;
    }

    // Renommer
    const data = localStorage.getItem(collec);
    localStorage.setItem(newName, data);
    localStorage.removeItem(collec);

    collec = newName
    h1.innerText = newName;
    newNameInput.value = '';
})

addCardForm.addEventListener('submit', (event) => {
    // event.preventDefault()
    const recto = rectoInput.value;
    const verso = versoInput.value;
    // rectoInput.value = '';
    // versoInput.value = '';
    const data = JSON.parse(localStorage.getItem(collec));
    const newData = data.push([recto, verso]);

    localStorage.setItem(collec, JSON.stringify(newData));

    alert(localStorage.getItem(collec));
});

deleteCollecBtn.addEventListener('click', (event) => {
    if (confirm('Etes vousbsur de vouloir supprimer la collection ?\nCette action est irreversible')) {
        localStorage.removeItem(collec);
    } else {
        event.preventDefault();
    }
})