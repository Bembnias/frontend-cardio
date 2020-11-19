const openBtn = document.querySelector('#open-modal');
const closeBtn = document.querySelector('#close-modal');
const modal = document.querySelector('#modal');

openBtn.addEventListener('click', () => {
    modal.style.display='block';
})

closeBtn.addEventListener('click', () => {
    modal.style.display='none';
})