
burger = document.querySelector('.burger');
sidenav = document.querySelector('.sidenav');
empty_area = document.querySelector('.area-resp');

burger.addEventListener('click', () => {
    sidenav.classList.toggle('sidenav-resp');
    sidenav.classList.toggle('sidenav-h-resp');
    empty_area.classList.toggle('area-resp');
});