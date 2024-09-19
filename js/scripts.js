// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  });
});

// Seleciona o <p> com o ID 'location'
const locationElement = document.getElementById('location');

// Adiciona um evento de clique ao <p>
locationElement.addEventListener('click', function () {
  // Abre o link do Google Maps em uma nova aba
  window.open('https://maps.app.goo.gl/W4X5bvmK6VUSPviJ7', '_blank');
});

