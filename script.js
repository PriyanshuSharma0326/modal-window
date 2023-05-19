const modal = document.querySelector('#virat');

function displayModal() {
    modal.classList.add('show');
    modal.classList.remove('hidden');
}

function removeModal() {
    modal.classList.remove('show');
    modal.classList.add('hidden');   
}
