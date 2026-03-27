// ============================================
// PÁGINA CULTURAS - LITHO PLANT
// ============================================

document.addEventListener('componentsLoaded', () => {
  marcarNavCulturasAtivo();
  animarCardsCulturas();
  initFiltrosCulturas();
  initFloatingWhatsappMessage();
});

// Marca nav-link "Culturas" como ativo
function marcarNavCulturasAtivo() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.textContent.includes('Culturas')) {
      link.classList.add('active');
    }
  });
}

// Anima cards ao entrar na tela (stagger)
function animarCardsCulturas() {
  const cards = document.querySelectorAll('.cultura-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const card = entry.target;
      const index = Number(card.dataset.index || 0);
      const delay = 80 * index; // ms

      setTimeout(() => {
        card.classList.add('cultura-card-visible');
      }, delay);

      obs.unobserve(card);
    });
  }, { threshold: 0.2 });

  cards.forEach((card, idx) => {
    card.dataset.index = idx.toString();
    card.classList.add('cultura-card-hidden');
    observer.observe(card);
  });
}

// Filtros por categoria: reordena cards trazendo os filtrados para frente
// e destaca visualmente os que pertencem ao filtro
function initFiltrosCulturas() {
  const filtroBotoes = document.querySelectorAll('.filtro-pill');
  const grid = document.querySelector('.culturas-grid');
  const cardsNodeList = document.querySelectorAll('.cultura-card');
  if (!filtroBotoes.length || !grid || !cardsNodeList.length) return;

  // Ordem original dos cards
  const cardsOriginais = Array.from(cardsNodeList);

  filtroBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const filtro = botao.dataset.filter || 'todas';

      // destaque visual do filtro ativo
      filtroBotoes.forEach(b => b.classList.remove('active'));
      botao.classList.add('active');

      // limpa o grid
      grid.innerHTML = '';

      if (filtro === 'todas') {
        // volta tudo na ordem original, sem destaque extra
        cardsOriginais.forEach(card => {
          card.classList.remove('cultura-card-filtrado');
          grid.appendChild(card);
        });
        return;
      }

      const matching = [];
      const nonMatching = [];

      cardsOriginais.forEach(card => {
        const categoria = card.dataset.categoria || '';
        if (categoria === filtro) {
          // card da categoria filtrada: ganha destaque
          card.classList.add('cultura-card-filtrado');
          matching.push(card);
        } else {
          // card de outra categoria: volta ao estilo padrão
          card.classList.remove('cultura-card-filtrado');
          nonMatching.push(card);
        }
      });

      // primeiro os da categoria filtrada, depois os outros
      matching.forEach(card => grid.appendChild(card));
      nonMatching.forEach(card => grid.appendChild(card));
    });
  });
}

// Balão do WhatsApp flutuante alternando mensagens
function initFloatingWhatsappMessage() {
  const messageEl = document.querySelector('.whatsapp-floating-message');
  if (!messageEl) return;

  const mensagens = [
    'Fale com um consultor<br>especialista Litho Plant',
    'Quer melhorar o<br>desempenho da sua cultura?',
    'Tire suas dúvidas<br>pelo WhatsApp',
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