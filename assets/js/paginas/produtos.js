document.addEventListener('componentsLoaded', () => {
  initProdutosPage();
});

document.addEventListener('DOMContentLoaded', () => {
  if (!window.componentsLoaderInitialized) {
    initProdutosPage();
  }
});

function initProdutosPage() {
  initFiltrosProdutos();
  initFloatingWhatsappProdutos();
  initRotacaoProdutoDestaque();
  initLenteZoomDestaque();
}

function initFiltrosProdutos() {
  const filtros = document.querySelectorAll('.filtro-pill');
  const cards = Array.from(document.querySelectorAll('.produto-card'));

  if (!filtros.length || !cards.length) return;

  filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
      const valor = filtro.dataset.filter;

      filtros.forEach(btn => btn.classList.remove('active'));
      filtro.classList.add('active');

      cards.forEach(card => {
        const categoria = card.dataset.categoria;
        const mostrar = valor === 'todos' || categoria === valor;

        card.classList.toggle('is-hidden', !mostrar);
        card.classList.toggle('produto-card-filtrado', valor !== 'todos' && mostrar);
      });
    });
  });
}

function initFloatingWhatsappProdutos() {
  const mensagem = document.querySelector('.whatsapp-floating-message');
  if (!mensagem || mensagem.dataset.initialized === 'true') return;

  mensagem.dataset.initialized = 'true';

  const mensagens = [
    'Fale com um consultor<br>sobre os produtos Litho Plant',
    'Quer ajuda para montar<br>o manejo com nossos produtos?',
    'Tire suas dúvidas<br>pelo WhatsApp'
  ];

  let i = 0;
  mensagem.innerHTML = mensagens[i];
  mensagem.classList.add('visible');

  setInterval(() => {
    mensagem.classList.remove('visible');

    setTimeout(() => {
      i = (i + 1) % mensagens.length;
      mensagem.innerHTML = mensagens[i];
      mensagem.classList.add('visible');
    }, 400);
  }, 5000);
}

function initRotacaoProdutoDestaque() {
  const area = document.getElementById('destaqueLenteArea');
  const imgEl = document.getElementById('destaqueImg');
  const tituloEl = document.querySelector('.produto-destaque h2');
  const descEl = document.querySelector('.produto-destaque .destaque-texto > p');
  const chipsContainer = document.querySelector('.produto-destaque .produto-beneficios');
  const doseTexto = document.querySelector('.produto-destaque .destaque-info p');
  const blocoTexto = document.querySelector('.produto-destaque .produto-destaque-fade');
  const lens = document.getElementById('zoomLens');

  if (!area || !imgEl || !tituloEl || !descEl || !chipsContainer || !doseTexto || !blocoTexto) return;
  if (blocoTexto.dataset.initialized === 'true') return;

  blocoTexto.dataset.initialized = 'true';

  const destaques = [
    {
      nome: 'SOMBRYT BR',
      img: '../assets/imagens/produtos/SOMBRYT.png',
      alt: 'SOMBRYT BR Litho Plant',
      descricao: 'Protetor solar foliar com tecnologia nanoparticulada, ideal para culturas expostas a radiação intensa e altas temperaturas.',
      chips: ['Proteção solar', 'Conforto térmico', 'Maior fixação floral'],
      doses: 'Aplicar via foliar a 200–500 mL/ha conforme a cultura e intensidade solar.'
    },
    {
      nome: 'ATIVAR',
      img: '../assets/imagens/produtos/ATIVAR.png',
      alt: 'ATIVAR Litho Plant',
      descricao: 'Biofertilizante que combina substâncias húmicas, extrato de algas e aminoácidos para potencializar a eficiência da adubação.',
      chips: ['Maior absorção de nutrientes', 'Redução de perdas', 'Solo mais vivo'],
      doses: 'Indicado para aplicações junto aos fertilizantes em todas as adubações, seguindo recomendação do consultor.'
    },
    {
      nome: 'BALTIKO',
      img: '../assets/imagens/produtos/BALTIKO.png',
      alt: 'BALTIKO Litho Plant',
      descricao: 'Bioestimulante marinho à base de algas e aminoácidos, fortalecendo o metabolismo e a resistência da planta.',
      chips: ['Resistência a estresses', 'Raízes fortalecidas', 'Floração estimulada'],
      doses: 'Aplicar em fases de estresse ou maior exigência fisiológica, conforme indicação técnica.'
    },
    {
      nome: 'TURFA GEL',
      img: '../assets/imagens/produtos/TURFA.png',
      alt: 'TURFA GEL Litho Plant',
      descricao: 'Condicionador do solo que combina substâncias húmicas e aminoácidos, enriquecendo o microbioma e fortalecendo raízes.',
      chips: ['Raízes profundas', 'Solo mais fértil', 'Resiliência a estresses'],
      doses: 'Ideal para fertirrigação ou aplicação no sulco, de acordo com o manejo recomendado.'
    }
  ];

  let indice = 0;

  function aplicarDestaque(prod) {
    imgEl.src = prod.img;
    imgEl.alt = prod.alt;
    tituloEl.textContent = prod.nome;
    descEl.textContent = prod.descricao;
    doseTexto.textContent = prod.doses;

    chipsContainer.innerHTML = '';
    prod.chips.forEach(chip => {
      const span = document.createElement('span');
      span.className = 'produto-beneficio-chip';
      span.textContent = chip;
      chipsContainer.appendChild(span);
    });

    if (lens) {
      lens.style.backgroundImage = `url("${prod.img}")`;
      lens.style.display = 'none';
    }
  }

  aplicarDestaque(destaques[indice]);

  setInterval(() => {
    blocoTexto.classList.remove('is-visible');

    setTimeout(() => {
      indice = (indice + 1) % destaques.length;
      aplicarDestaque(destaques[indice]);
      blocoTexto.classList.add('is-visible');
    }, 500);
  }, 8000);
}

function initLenteZoomDestaque() {
  const area = document.getElementById('destaqueLenteArea');
  const img = document.getElementById('destaqueImg');
  const lens = document.getElementById('zoomLens');

  if (!area || !img || !lens) return;
  if (area.dataset.zoomInitialized === 'true') return;

  area.dataset.zoomInitialized = 'true';

  const mobile = () => window.innerWidth <= 768;

  function hideLens() {
    lens.style.display = 'none';
  }

  function showLens() {
    if (mobile()) return;
    lens.style.display = 'block';
  }

  function moveLens(e) {
    if (mobile()) return;

    const areaRect = area.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    const x = e.clientX - areaRect.left;
    const y = e.clientY - areaRect.top;

    if (x < 0 || y < 0 || x > areaRect.width || y > areaRect.height) {
      hideLens();
      return;
    }

    showLens();

    const lensSize = lens.offsetWidth;
    const half = lensSize / 2;

    let lensX = x - half;
    let lensY = y - half;

    lensX = Math.max(0, Math.min(lensX, areaRect.width - lensSize));
    lensY = Math.max(0, Math.min(lensY, areaRect.height - lensSize));

    lens.style.left = `${lensX}px`;
    lens.style.top = `${lensY}px`;

    const imgX = e.clientX - imgRect.left;
    const imgY = e.clientY - imgRect.top;

    const percentX = imgX / imgRect.width;
    const percentY = imgY / imgRect.height;

    const zoom = 2.3;

    lens.style.backgroundImage = `url("${img.src}")`;
    lens.style.backgroundSize = `${imgRect.width * zoom}px ${imgRect.height * zoom}px`;
    lens.style.backgroundPosition = `${-(percentX * imgRect.width * zoom - half)}px ${-(percentY * imgRect.height * zoom - half)}px`;
  }

  area.addEventListener('mouseenter', showLens);
  area.addEventListener('mousemove', moveLens);
  area.addEventListener('mouseleave', hideLens);
  window.addEventListener('resize', hideLens);
}