// Hamburguesa menú

  document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.navbar .fa-bars');
    const menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  });
  
// Slider intro

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
  
// Modal imagen ampliada producto

  const imagenProducto = document.querySelector('.imagen-producto img');
  const modal = document.getElementById('modal-img');
  const imagenAmpliada = document.querySelector('.imagen-ampliada');
  const cerrar = document.querySelector('.cerrar-modal');
  
  if (imagenProducto) {
    imagenProducto.addEventListener('click', () => {
      imagenAmpliada.src = imagenProducto.src;
      modal.classList.add('show');
    });
  
    cerrar.addEventListener('click', () => {
      modal.classList.remove('show');
      imagenAmpliada.src = '';
    });
  
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('show');
        imagenAmpliada.src = '';
      }
    });
  }
  
// Tabs en producto

  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      document.getElementById(target).classList.add('active');
    });
  });
  
// Estrellas

  const estrellas = document.querySelectorAll('.estrellas i');
  const mensajeValoracion = document.querySelector('.texto-valoracion');
  
  estrellas.forEach(estrella => {
    estrella.addEventListener('click', () => {
      const valor = parseInt(estrella.getAttribute('data-value'));
      estrellas.forEach(e => {
        e.classList.remove('active');
        if (parseInt(e.getAttribute('data-value')) <= valor) {
          e.classList.add('active');
        }
      });
      mensajeValoracion.textContent = `Has valorado con ${valor} estrella${valor > 1 ? 's' : ''}.`;
    });
  });
  
// Añadir al carrito y redirigir - Cómo redirigir: ChatGPT

  const botonCarrito = document.querySelector('.btn-carrito');
  const mensajeCarrito = document.getElementById('mensajeCarrito');
  
  if (botonCarrito && mensajeCarrito) {
    botonCarrito.addEventListener('click', e => {
      e.preventDefault();
      mensajeCarrito.classList.add('mostrar');
  
      const contadorCarrito = document.querySelector('.cant');
      if (contadorCarrito) {
        contadorCarrito.textContent = '(1)';
        localStorage.setItem('carritoCantidad', '1');
      }
  
      setTimeout(() => {
        mensajeCarrito.classList.remove('mostrar');
        window.location.href = 'carrito.html';
      }, 2000);
    });
  }
  
// Función general al cargar la página

  document.addEventListener('DOMContentLoaded', () => {
    const cantidadGuardada = localStorage.getItem('carritoCantidad');
    const contador = document.querySelector('.cant');
    const estaEnCarrito = window.location.pathname.includes('carrito.html');
  
    if (contador) {
      if (estaEnCarrito && parseInt(cantidadGuardada) > 0) {
        contador.textContent = `(${cantidadGuardada})`;
      } else {
        contador.textContent = `(0)`;
      }
    }
  
  // Actualizar total en carrito.html

    const inputCantidad = document.querySelector('input[type="number"]');
    const celdaTotal = document.querySelector('td:nth-child(5)');
    const subtotal = document.querySelector('.resumen-carrito p:nth-child(2) span');
    const total = document.querySelector('.resumen-carrito .total strong');
    const filaProducto = document.querySelector('.tabla-carrito tbody tr');
    const btnEliminar = document.querySelector('.btn-eliminar');
  
    if (inputCantidad && celdaTotal && subtotal && total) {
      const precioTexto = document.querySelector('td:nth-child(3)').textContent;
      const precioUnitario = parseFloat(precioTexto.replace('€', '').replace(',', '.'));
  
      function actualizarTotal() {
        const cantidad = parseInt(inputCantidad.value);
        const nuevoTotal = (precioUnitario * cantidad).toFixed(2) + '€';
        celdaTotal.textContent = nuevoTotal;
        subtotal.textContent = nuevoTotal;
        total.textContent = nuevoTotal;
      }
  
      inputCantidad.addEventListener('input', actualizarTotal);
      actualizarTotal();
    }
  
  // Eliminar producto del carrito

    if (btnEliminar) {
      btnEliminar.addEventListener('click', () => {
        if (filaProducto) filaProducto.remove();
        if (subtotal) subtotal.textContent = '0€';
        if (total) total.textContent = '0€';
  
        localStorage.removeItem('carritoCantidad');
        if (contador) contador.textContent = '(0)';
      });
    }
  
  // Si el carrito está vacío al cargar, limpiar contador

    if (!filaProducto && contador) {
      localStorage.removeItem('carritoCantidad');
      contador.textContent = '(0)';
    }
  });
  
// Formulario de contacto

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const mensajeExito = document.getElementById('mensajeExito');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      // Muestra el mensaje
      mensajeExito.style.display = 'block';

      // Reseteamos el formulario
      form.reset();

      // Oculta el mensaje después de 4 segundos
      setTimeout(() => {
        mensajeExito.style.display = 'none';
      }, 4000);
    });
  }
});
