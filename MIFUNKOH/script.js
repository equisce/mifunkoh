// Hamburguesa menú //

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.navbar .fa-bars');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('show'); // Pone y quita la clase 'show'
    });
});

// Slider - ChatGPT cómo deslizar slider //

let currentSlide = 0;

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (index + totalSlides) % totalSlides; 
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Añadir a la cesta //

const basketBtns = document.querySelectorAll('.add-cart');
const messageOverlay = document.getElementById('message-overlay');
const messageText = document.getElementById('message-text');
const acceptBtn = document.getElementById('accept-btn');

// Mensaje de añadir a la cesta //

function showMessage(message) {
    messageText.textContent = message; 
    messageOverlay.style.display = 'flex'; 
}

// Ocultar el mensaje //

function hideMessage() {
    messageOverlay.style.display = 'none';
}

// Botones cesta de la compra //

basketBtns.forEach(button => {
    button.addEventListener('click', () => {
        showMessage('¡Has añadido este producto a tu cesta!');
    });
});

acceptBtn.addEventListener('click', hideMessage); // cerrar mensaje

// Abrir la imagen  - botón Eye //  - YouTube (tutorial)

const modal = document.getElementById('product-image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');
const eyeButtons = document.querySelectorAll('.fa-eye');

eyeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const imgSrc = e.target.closest('.card-product').querySelector('img').src;
        modalImage.src = imgSrc; 
        modal.style.display = 'flex'; 
    });
});

// Cerrar al hacer click fuera //

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const eyeButtons = document.querySelectorAll(".eye-btn");
    const heartButtons = document.querySelectorAll(".heart-btn");
    const basketButtons = document.querySelectorAll(".basket-btn");
    });

    const heartIcons = document.querySelectorAll('.fa-heart');

// Botón favoritos //

heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        showMessage('¡Has añadido este producto a tus favoritos!');
    });
});

// Botón leer más entrada blog // ChatGPT cómo hacer que sólo me redireccione el segundo botón de 'Leer más' y los otros únicamente hagan hover.

document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".btn-read-more");

    readMoreButtons.forEach((button, index) => {
        if (index === 0) { // Solo el primer botón (Funkos)
            button.addEventListener("click", function() {
                window.open("blog.html", "_blank");
            });
        } else {
            button.addEventListener("click", function(event) {
                event.preventDefault(); // Evita redirección en otros botones
            });
        }
    });
});

