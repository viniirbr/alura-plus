const body = document.querySelector('[body-tag]');
const darkIcon = document.querySelector('[dark-icon]');

darkIcon.addEventListener('click', () => {
    body.classList.toggle('dark');
})