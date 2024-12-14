window.onload = function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');

    if (burgerMenu && navbar) {
        burgerMenu.addEventListener('click', () => {
            navbar.classList.toggle('open');
        });
    }
};

// Панель керування стилями
function changeTextColor(color) {
    document.querySelector('.Main').style.color = color;
}

function changeFontSize() {
    const fontSize = document.getElementById('font-size-selector').value;
    document.querySelector('.Main').style.fontSize = fontSize;
}

function changeWidth() {
    const width = document.getElementById('width-slider').value + 'px';
    document.querySelector('.Main').style.width = width;
}

function toggleBackgroundColor() {
    const mainElement = document.querySelector('.Main');
    mainElement.style.backgroundColor = mainElement.style.backgroundColor === 'lightgray' ? 'white' : 'lightgray';
}

function applyCustomCSS() {
    const customCSS = document.getElementById('custom-css').value;
    const styleElement = document.createElement('style');
    styleElement.innerHTML = customCSS;
    document.head.appendChild(styleElement);
}