// References DOM
const main = document.querySelector('main');
const addCollecBtn = document.querySelector('#new-collection');

// Ecrire la page
addCollecBtn.href = `./collection.html?new=true&collection=${nextCollecName()}`;

for (let i = 0; i < localStorage.length; i++) {
    const collecName = localStorage.key(i);

    // Ajouter l'anchor au HTML
    const a = document.createElement('a');
    a.href = `./collection.html?collection=${collecName}`;
    a.innerText = collecName;
    main.appendChild(a);
}

// Fonctions utilitaires
function nextCollecName() {
    let n = 1;
    while (localStorage.getItem('Collection ' + n) !== null) {
        n++;
    }
    return 'Collection ' + n;
}

// EventListener
addCollecBtn.addEventListener('click', () => {
    // Ajouter la collection au localStorage
    localStorage.setItem(nextCollecName(), JSON.stringify([]));
});