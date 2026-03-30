document.addEventListener('componentsLoaded', () => {
  initTermosPage();
  initFloatingWhatsappMessage();
});

document.addEventListener('DOMContentLoaded', () => {
  if (!window.componentsLoaderInitialized) {
    initTermosPage();
    initFloatingWhatsappMessage();
  }
});

function initTermosPage() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');

    const href = link.getAttribute('href') || '';
    if (href.includes('termos')) {
      link.classList.add('active');
    }
  });

  removerSidebarSeExistir();
}

function removerSidebarSeExistir() {
  const seletores = [
    '.sidebar',
    '.page-sidebar',
    '.termos-sidebar',
    '.sticky-sidebar',
    '.floating-sidebar',
    '.blog-sidebar',
    'aside.sidebar'
  ];

  seletores.forEach(seletor => {
    document.querySelectorAll(seletor).forEach(el => {
      el.style.display = 'none';
    });
  });
}

function initFloatingWhatsappMessage() {
  const messageEl = document.querySelector('.whatsapp-floating-message');
  if (!messageEl || messageEl.dataset.initialized === 'true') return;

  messageEl.dataset.initialized = 'true';

  const mensagens = [
    'Fale com a equipe<br>Litho Plant',
    'Precisa de ajuda com<br>os termos do site?',
    'Tire suas dúvidas<br>pelo WhatsApp',
    'Atendimento rápido<br>com nossa equipe'
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