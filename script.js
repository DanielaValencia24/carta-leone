// Función para mostrar el mensaje
function showMessage() {
  const paperElement = document.querySelector('.paper');
  if (paperElement) {
    paperElement.style.visibility = 'visible'; // Mostrar el mensaje
  }
}

// Función para ocultar el mensaje
function hideMessage() {
  const paperElement = document.querySelector('.paper');
  if (paperElement) {
    paperElement.style.visibility = 'hidden'; // Ocultar el mensaje
  }
}

// Inicializa la visibilidad del mensaje
hideMessage();

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

if (btnOpenElement && btnCloseElement) {
  btnCloseElement.disabled = true;

  btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;

    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    const heartElement = document.querySelector('.heart');

    if (coverElement) {
      coverElement.classList.add('open-cover');
    }

    setTimeout(() => {
      if (coverElement) {
        coverElement.style.zIndex = -1;
      }

      if (paperElement) {
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');
        showMessage(); // Mostrar el mensaje
      }

      if (heartElement) {
        heartElement.style.display = 'block';
      }
    }, 500);
  });

  btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    const heartElement = document.querySelector('.heart');

    if (paperElement) {
      paperElement.classList.remove('open-paper');
      paperElement.classList.add('close-paper');
      hideMessage(); // Ocultar el mensaje
    }

    setTimeout(() => {
      if (coverElement) {
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');
      }

      if (heartElement) {
        heartElement.style.display = 'none';
      }
    }, 500);
  });
}