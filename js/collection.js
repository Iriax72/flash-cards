const params = new URLSearchParams(window.location.search);
let collec = params.has('collection') ? params.get('collection') : null;

// References DOM
const h1 = document.querySelector('h1');
const nameForm = document.querySelector('#name-form');
const newNameInput = nameForm.querySelector('input');
const cardArea = document.querySelector('#cards-area');
const leftBtn = document.querySelector('.switch-btn:first-child');
const rightBtn = document.querySelector('.switch-btn:last-child');
const addCardForm = document.querySelector('#add-card-form');
const rectoInput = document.querySelector('#recto');
const versoInput = document.querySelector('#verso');
const deleteCollecBtn = document.querySelector('#delete-collec');
//const addCardFormSubmit = addCardForm.querySelector('button[type="submit"]')

// Valeur
let currentCard = 0;

// Ecrire la page
h1.innerText = collec;

const cardsData = JSON.parse(localStorage.getItem(collec));
cardsData.forEach(card => {
    div = document.createElement('div');
    div.classList.add('card');
    div.innerText = card[0] + ': ' + card[1];
    cardArea.append(div);
});

// Fonctions utilitaires
function getCards() {
    return [...cardArea.querySelectorAll('.card')];
}

function showCard(i) {
    const cards = getCards();
    alert('cards: ' + JSON.stringify(cards));
    alert('i: ' + i)
    cards.forEach(card => {
        alert('indexOf: ' + cards.indexOf(card))
        if (cards.indexOf(card) === i) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden')
        }
        alert(JSON.stringify([...card.classList]))
    })
    alert('fini')
}

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
});

leftBtn.addEventListener('click', () => {
    alert('left click');
    currentCard--;
    if (currentCard < 0) {
        currentCard = getCards.length - 1;
    }
    showCard(currentCard);
})

rightBtn.addEventListener('click', () => {
    alert('right click');
    currentCard++;
    if (currentCard >= getCards().length) {
        currentCard = 0;
    }
    alert(currentCard);
    showCard(currentCard);
});

addCardForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const recto = rectoInput.value;
    const verso = versoInput.value;

    const data = JSON.parse(localStorage.getItem(collec));
    data.push([recto, verso]);
    localStorage.setItem(collec, JSON.stringify(data));

    // Refresh pour afficher les maj
    window.location.reload()
});

deleteCollecBtn.addEventListener('click', (event) => {
    if (confirm('Etes vous sur de vouloir supprimer la collection ?\nCette action est irreversible')) {
        localStorage.removeItem(collec);
    } else {
        event.preventDefault();
    }
});