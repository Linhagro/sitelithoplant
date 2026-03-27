/**
 * PROGRAMAS NUTRICIONAIS - JS
 * Bloco de resultados + smooth scroll + WhatsApp balão + lupa
 */

document.addEventListener('componentsLoaded', () => {
  initProgramasPage();
});

function initProgramasPage() {
  initResultadosBlocoNovo();
  initSmoothScrollProgramas();
  initFloatingWhatsappProgramas();
}

/* BLOCO DE RESULTADOS – thumbs + conteúdo + lightbox + lupa */

function initResultadosBlocoNovo() {
  const container = document.querySelector('.resultados-programa');
  if (!container) return;

  const thumbs = Array.from(container.querySelectorAll('.resultado-thumb'));
  const figuras = Array.from(container.querySelectorAll('.resultado-main-figure'));
  const conteudos = Array.from(container.querySelectorAll('.resultado-main-conteudo'));
  const media = container.querySelector('.resultado-main-media');

  if (!figuras.length || !conteudos.length || !thumbs.length || !media) return;

  function ativar(index) {
    thumbs.forEach(btn => {
      btn.classList.toggle('ativo', Number(btn.dataset.go) === index);
    });

    figuras.forEach(fig => {
      fig.classList.toggle('ativo', Number(fig.dataset.index) === index);
    });

    conteudos.forEach(art => {
      art.classList.toggle('ativo', Number(art.dataset.index) === index);
    });
  }

  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = Number(btn.dataset.go) || 0;
      ativar(index);
    });
  });

  ativar(0);

  // LIGHTBOX
  const fullscreenBtn = media.querySelector('.resultado-fullscreen-btn');
  const lightbox = document.getElementById('resultado-lightbox');
  const lightboxImg = document.getElementById('resultado-lightbox-img');
  const lightboxClose = lightbox ? lightbox.querySelector('.resultado-lightbox-close') : null;
  const lightboxBackdrop = lightbox ? lightbox.querySelector('.resultado-lightbox-backdrop') : null;

  function getActiveImg() {
    const ativa = container.querySelector('.resultado-main-figure.ativo img');
    return ativa || null;
  }

  function abrirLightbox() {
    const img = getActiveImg();
    if (!img || !lightbox || !lightboxImg) return;
    lightboxImg.src = img.src;
    lightbox.classList.add('ativo');
    document.body.style.overflow = 'hidden';
  }

  function fecharLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('ativo');
    document.body.style.overflow = '';
  }

  if (fullscreenBtn && lightbox) {
    fullscreenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      abrirLightbox();
    });

    media.addEventListener('click', (e) => {
      if (e.target.closest('.resultado-fullscreen-btn')) return;
      abrirLightbox();
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', fecharLightbox);
  }

  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', fecharLightbox);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      fecharLightbox();
    }
  });

  // LUPA DE ZOOM
  let zoomLens = null;

  function getActiveZoomImg() {
    const activeFigure = container.querySelector('.resultado-main-figure.ativo .resultado-img-zoom');
    return activeFigure || null;
  }

  function initZoomLens() {
    if (!media) return;

    zoomLens = document.createElement('div');
    zoomLens.className = 'resultado-zoom-lens';
    media.appendChild(zoomLens);

    media.addEventListener('mouseenter', handleZoomEnter);
    media.addEventListener('mousemove', handleZoomMove);
    media.addEventListener('mouseleave', handleZoomLeave);
  }

  function handleZoomEnter() {
    const img = getActiveZoomImg();
    if (!img || !zoomLens) return;

    const rect = img.getBoundingClientRect();
    const zoom = 2.5;

    zoomLens.classList.add('ativo');
    zoomLens.style.backgroundImage = `url(${img.src})`;
    zoomLens.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
  }

  function handleZoomMove(e) {
    const img = getActiveZoomImg();
    if (!img || !zoomLens) return;

    const rect = img.getBoundingClientRect();
    const lensRect = zoomLens.getBoundingClientRect();
    const zoom = 2.5;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const minX = 0;
    const minY = 0;
    const maxX = rect.width;
    const maxY = rect.height;
    const clampedX = Math.max(minX, Math.min(x, maxX));
    const clampedY = Math.max(minY, Math.min(y, maxY));

    const lensHalfW = lensRect.width / 2;
    const lensHalfH = lensRect.height / 2;

    const contRect = media.getBoundingClientRect();
    const lensLeft = rect.left + clampedX - lensHalfW - contRect.left;
    const lensTop = rect.top + clampedY - lensHalfH - contRect.top;

    zoomLens.style.left = `${lensLeft}px`;
    zoomLens.style.top = `${lensTop}px`;

    const bgPosX = -((clampedX * zoom) - lensHalfW);
    const bgPosY = -((clampedY * zoom) - lensHalfH);

    zoomLens.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
  }

  function handleZoomLeave() {
    if (!zoomLens) return;
    zoomLens.classList.remove('ativo');
  }

  initZoomLens();
}

/* SMOOTH SCROLL */

function initSmoothScrollProgramas() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/* BALÃO WHATSAPP */

function initFloatingWhatsappProgramas() {
  const messageEl = document.querySelector('.whatsapp-floating-message');
  if (!messageEl) return;

  const msgs = [
    'Quer montar seu Programa Revitalizar?',
    'Fale com um especialista Litho Plant',
    'Vamos planejar a próxima safra juntos?'
  ];

  let idx = 0;

  function showMsg() {
    const span = messageEl.querySelector('span');
    if (!span) return;

    span.textContent = msgs[idx];
    messageEl.classList.add('visible');

    setTimeout(() => {
      messageEl.classList.remove('visible');
    }, 2500);

    idx = (idx + 1) % msgs.length;
  }

  setTimeout(showMsg, 3000);
  setInterval(showMsg, 7000);
}