// References DOM
const main = document.querySelector('main');
const addCollecBtn = document.querySelector('#new-collection');

// Ecrire la page
for (let i = 0; i < localStorage.length; i++) {
    const collecName = localStorage.key(i);

    // Ajouter l'anchor au HTML
    const a = document.createElement('a');
    a.href = './collection.html';
    a.innerText = collecName;
    main.appendChild(a);
}

// EventListener
addCollecBtn.addEventListener('click', () => {
    let n = 1;
    while (localStorage.getItem('Collection' + n) !== null) {
        n++;
    }
    // Ajouter la collection au localStorage
    localStorage.setItem('Collection' + n, JSON.stringify([]));
});