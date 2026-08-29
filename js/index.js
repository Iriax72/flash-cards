alert(localStorage + '\n\n' + window.localStorage)

// Referrences DOM
const main = document.querySelector('main');
const addCollecBtn = document.querySelector('#new-collection');

// Ecrire la page
for (let i = 0; i < localStorage.length; i++) {
    const collecName = localStorage.key(i);
    alert(collecName);

    // Ajouter l'anchor au HTML
    const a = document.createElement('a');
    a.href = './collection.html';
    a.innerText = collecName;
    main.appendChild(a);
}

// EventListener
addCollecBtn.addEventListener('click', () => {
    alert('clické');
    let n = 1;
    while (localStorage.getItem('Collection' + n) !== null) {
        n++;
    }
    alert(n)
    // Ajouter la collection au localStorage
    localStorage.setItem('Collection' + n, json.stringify([]));
    alert('Ahouté au localStorage')
});