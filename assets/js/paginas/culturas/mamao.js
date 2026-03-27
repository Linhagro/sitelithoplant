// ============================================
// PÁGINA CULTURA - MAMÃO
// ============================================

document.addEventListener('componentsLoaded', () => {
  marcarNavCulturasAtivo();
  animarBeneficiosMamao();
  initFloatingWhatsappMessage();
});

// Marca nav-link "Culturas"
function marcarNavCulturasAtivo() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.textContent.includes('Culturas')) {
      link.classList.add('active');
    }
  });
}

// Anima cartões de benefício ao entrar na tela
function animarBeneficiosMamao() {
  const cards = document.querySelectorAll('.beneficio-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const card = entry.target;
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      obs.unobserve(card);
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';
    card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    observer.observe(card);
  });
}

// Balão do WhatsApp flutuante alternando mensagens
function initFloatingWhatsappMessage() {
  const messageEl = document.querySelector('.whatsapp-floating-message');
  if (!messageEl) return;

  const mensagens = [
    'Fale com um consultor<br>especialista Litho Plant',
    'Quer melhorar o<br>desempenho do seu mamão?',
    'Tire suas dúvidas<br>sobre manejo da cultura',
    'Fale com nosso time<br>técnico agora',
    'Vamos construir um<br>manejo mais eficiente?'
  ];

  let idx = 0;

  function mostrarMensagem() {
    const span = messageEl.querySelector('span');
    if (!span) return;

    span.innerHTML = mensagens[idx];
    messageEl.classList.add('visible');

    setTimeout(() => {
      messageEl.classList.remove('visible');
    }, 2500);

    idx = (idx + 1) % mensagens.length;
  }

  setTimeout(mostrarMensagem, 3000);
  setInterval(mostrarMensagem, 6000);
}