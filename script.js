const activeimg = document.querySelectorAll('.active');

function removeActiveClasses() {
    activeimg.forEach(active => {
        active.classList.remove('image');
    });
}

activeimg.forEach((active) => {
    active.addEventListener('click', () => {
        removeActiveClasses();
        active.classList.add('image');
    });
});
