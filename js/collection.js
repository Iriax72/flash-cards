// Params
const params = new URLSearchParams(window.location.search);
let collec = params.has('collection') ? params.get('collection') : null;
const newCollec = params.has('new') && params.get('new');

// References DOM
const h1 = document.querySelector('h1');
const nameForm = document.querySelector('#name-form');
const newNameInput = nameForm.querySelector('input');
const addCardForm = document.querySelector('#add-card-form');
const deleteCollecBtn = document.querySelector('#delete-collec');
//const addCardFormSubmit = addCardForm.querySelector('button[type="submit"]')

// Ecrire la page
h1.innerText = collec;

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
    event.preventDefault()
    alert('ajout de la carte');
});

deleteCollecBtn.addEventListener('click', (event) => {
    if (confirm('Etes vousbsur de vouloir supprimer la collection ?\nCette action est irreversible')) {
        localStorage.removeItem(collec);
    } else {
        event.preventDefault();
    }
})