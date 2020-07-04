//function to select elements
const selectElement = (s) => document.querySelector(s);

//Open the menu onclick
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
})

//Open the menu onclick
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active')
})