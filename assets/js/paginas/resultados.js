document.addEventListener('componentsLoaded', () => {
  initSelecaoCulturas();
  initCarouselMamao();
  initCarouselFrutas();
  initCafeVideos();                 // controla café + milho
  initFloatingWhatsappResultados();
});

function initSelecaoCulturas() {
  const itens = document.querySelectorAll('.cultura-item');
  const blocos = document.querySelectorAll('.cultura-bloco');
  if (!itens.length || !blocos.length) return;

  function ativar(cultura) {
    itens.forEach(li => {
      li.classList.toggle('active', li.dataset.cultura === cultura);
    });
    blocos.forEach(bloco => {
      if (bloco.dataset.cultura === cultura) {
        bloco.classList.add('ativo');
      } else {
        bloco.classList.remove('ativo');
      }
    });
  }

  itens.forEach(li => {
    const btn = li.querySelector('button');
    if (!btn) return;
    btn.addEventListener('click', () => ativar(li.dataset.cultura));
  });

  ativar('soja');
}

function initCarouselMamao() {
  const carousel = document.querySelector('#carousel-mamao');
  if (!carousel) return;

  const imagens = Array.from(carousel.querySelectorAll('img'));
  if (!imagens.length) return;

  let idx = 0;
  imagens.forEach((img, i) => img.classList.toggle('ativo', i === 0));

  setInterval(() => {
    imagens[idx].classList.remove('ativo');
    idx = (idx + 1) % imagens.length;
    imagens[idx].classList.add('ativo');
  }, 4000);
}

function initCarouselFrutas() {
  const carousel = document.querySelector('#carousel-frutas');
  if (!carousel) return;

  const imagens = Array.from(carousel.querySelectorAll('img'));
  if (!imagens.length) return;

  let idx = 0;
  imagens.forEach((img, i) => img.classList.toggle('ativo', i === 0));

  setInterval(() => {
    imagens[idx].classList.remove('ativo');
    idx = (idx + 1) % imagens.length;
    imagens[idx].classList.add('ativo');
  }, 4000);
}

function initCafeVideos() {
  const covers = document.querySelectorAll('.cafe-video-cover');
  if (!covers.length) return;

  covers.forEach(btn => {
    btn.addEventListener('click', () => {
      const videoId = btn.dataset.videoId;
      if (!videoId) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'video-ratio';

      wrapper.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${videoId}?autoplay=1"
          title="Depoimento - Litho Plant"
          frameborder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      `;

      btn.replaceWith(wrapper);
    });
  });
}

function initFloatingWhatsappResultados() {
  const msg = document.querySelector('.whatsapp-floating-message');
  if (!msg) return;

  const textos = [
    'Fale com um consultor<br>sobre os resultados em campo',
    'Quer alcançar esses<br>resultados na sua lavoura?',
    'Monte o manejo ideal<br>com nosso time técnico'
  ];

  let i = 0;
  msg.classList.add('visible');
  msg.innerHTML = textos[i];

  setInterval(() => {
    msg.classList.remove('visible');
    i = (i + 1) % textos.length;
    setTimeout(() => {
      msg.innerHTML = textos[i];
      msg.classList.add('visible');
    }, 450);
  }, 5000);
}