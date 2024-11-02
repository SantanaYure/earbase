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

function toggleSchedule(button) {
  // Seleciona o elemento de eventos que é o próximo irmão do botão
  const eventos = button.parentElement.nextElementSibling;

  // Alterna a exibição entre "none" e "block"
  if (eventos.style.display === "none") {
    eventos.style.display = "block";
    button.textContent = "▼"; // Muda o ícone para recolher
  } else {
    eventos.style.display = "none";
    button.textContent = "►"; // Muda o ícone para expandir
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card-dia");
  const horarios = document.querySelectorAll(".dia");

  // Ocultar todos os horários ao carregar a página
  horarios.forEach(horario => horario.style.display = "none");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      // Remover classe 'active' de todos os cards e esconder horários
      cards.forEach(c => c.classList.remove("active"));
      horarios.forEach(horario => horario.style.display = "none");

      // Adicionar classe 'active' ao card clicado
      card.classList.add("active");

      // Mostrar o horário correspondente ao card clicado
      const diaSelecionado = card.getAttribute("data-dia");
      const horarioSelecionado = document.querySelector(`.dia[data-dia="${diaSelecionado}"]`);

      if (horarioSelecionado) {
        horarioSelecionado.style.display = "block";
      }
    });
  });
});



