// navbar menu bar function
document.getElementById('menuButton').addEventListener('click', function () {
    var menu = document.getElementById('mobileMenu');
    var closeButton = document.getElementById('closeButton');
    var menuButton = document.getElementById('menuButton');
    menu.classList.remove('hidden');
    closeButton.classList.remove('hidden');
    menuButton.classList.add('hidden');
});

document.getElementById('closeButton').addEventListener('click', function () {
    var menu = document.getElementById('mobileMenu');
    var closeButton = document.getElementById('closeButton');
    var menuButton = document.getElementById('menuButton');
    menu.classList.add('hidden');
    closeButton.classList.add('hidden');
    menuButton.classList.remove('hidden');
});