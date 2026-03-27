document.addEventListener('componentsLoaded', () => {
  initQuemSomosPage();
  initHistoryTimeline();
  initMissionTabs();
  initFloatingWhatsappMessage();
});

function initQuemSomosPage() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') && link.getAttribute('href').includes('quem-somos')) {
      link.classList.add('active');
    }
  });
}

function initHistoryTimeline() {
  const steps = document.querySelectorAll('.history-step');
  const highlightImage = document.querySelector('.history-highlight-image');

  if (!steps.length || !highlightImage) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const step = entry.target;
        const index = parseInt(step.dataset.step || '0', 10);

        steps.forEach(s => s.classList.remove('is-active'));
        step.classList.add('is-active');

        // Atualiza imagem
        const dataAttr = `src${index}`;
        const newSrc = highlightImage.dataset[dataAttr];

        if (newSrc && !highlightImage.src.includes(newSrc)) {
          highlightImage.classList.remove('history-image-fade-in');
          highlightImage.classList.add('history-image-fade-out');

          setTimeout(() => {
            highlightImage.src = newSrc;
            highlightImage.classList.remove('history-image-fade-out');
            highlightImage.classList.add('history-image-fade-in');
          }, 200);
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: '0px 0px -30% 0px'
    }
  );

  steps.forEach(step => observer.observe(step));
}

function initMissionTabs() {
  const tabs = document.querySelectorAll('.mission-tab');
  const panels = document.querySelectorAll('.mission-panel');
  if (!tabs.length || !panels.length) return;

  let currentIndex = 0;
  let autoRotateInterval = null;
  const INTERVAL_MS = 6000; // 6 segundos em cada aba

  function activateTab(index) {
    const safeIndex = index % tabs.length;
    currentIndex = safeIndex;

    tabs.forEach((tab, i) => {
      tab.classList.toggle('is-active', i === safeIndex);
    });

    panels.forEach((panel, i) => {
      panel.classList.toggle('is-active', i === safeIndex);
    });
  }

  function startAutoRotate() {
    stopAutoRotate();
    autoRotateInterval = setInterval(() => {
      activateTab(currentIndex + 1);
    }, INTERVAL_MS);
  }

  function stopAutoRotate() {
    if (autoRotateInterval) {
      clearInterval(autoRotateInterval);
      autoRotateInterval = null;
    }
  }

  // clique manual: ativa imediatamente e reinicia o ciclo
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      activateTab(index);
      startAutoRotate();
    });
  });

  // índice inicial: usa qual aba já está ativa no HTML
  tabs.forEach((tab, index) => {
    if (tab.classList.contains('is-active')) {
      currentIndex = index;
    }
  });

  startAutoRotate();
}

function initFloatingWhatsappMessage() {
  const messageEl = document.querySelector('.whatsapp-floating-message');
  if (!messageEl) return;

  const mensagens = [
    'Fale com um especialista<br>da Litho Plant',
    'Quer melhorar a<br>produtividade da lavoura?',
    'Monte seu programa<br>nutricional completo',
    'Tire suas dúvidas<br>pelo WhatsApp',
    'Solo vivo, plantas fortes.<br>Vamos conversar?'
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