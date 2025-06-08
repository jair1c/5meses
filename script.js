const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

items.forEach(item => {
  observer.observe(item);
});




const cartaAnimada = document.getElementById('cartaAnimada');
const portada = cartaAnimada.querySelector('.portada-carta');
const contenido = document.getElementById('contenidoCarta');
const parrafos = document.querySelectorAll('.parrafo');
const btnSiguiente = document.getElementById('siguiente');
const btnAnterior = document.getElementById('anterior');

let indice = 0;

portada.addEventListener('click', () => {
  portada.style.display = 'none';
  contenido.classList.remove('oculto');
  mostrarParrafo(indice);
});

function mostrarParrafo(i) {
  parrafos.forEach((p, idx) => {
    p.classList.remove('activo');
    if (idx === i) {
      p.classList.add('activo');
    }
  });

  btnAnterior.disabled = (indice === 0);
  btnSiguiente.disabled = (indice === parrafos.length - 1);
}

btnSiguiente.addEventListener('click', () => {
  if (indice < parrafos.length - 1) {
    indice++;
    mostrarParrafo(indice);
  }
});

btnAnterior.addEventListener('click', () => {
  if (indice > 0) {
    indice--;
    mostrarParrafo(indice);
  }
});




const sorpresaBtn = document.getElementById('revealSurprise');
const sorpresaContent = document.getElementById('surpriseContent');

sorpresaBtn.addEventListener('click', () => {
  sorpresaContent.classList.add('show');
  sorpresaBtn.style.display = 'none';
});



const startBtn = document.getElementById("startButton");
const music = document.getElementById("bgMusic");
const intro = document.getElementById("introOverlay");

  startBtn.addEventListener("click", () => {
    music.play();
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 800);
  });