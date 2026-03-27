document.addEventListener('componentsLoaded', () => {
  initProdutosPage();
});

function initProdutosPage() {
  initFiltrosProdutos();
  initFloatingWhatsappProdutos();
  initRotacaoProdutoDestaque();
}

/* ----------------- FILTROS PRODUTOS ----------------- */
function initFiltrosProdutos() {
  const filtros = document.querySelectorAll('.filtro-pill');
  const grid = document.querySelector('.produtos-grid');
  const cards = Array.from(document.querySelectorAll('.produto-card'));
  if (!grid || cards.length === 0) return;

  const ordemOriginal = [...cards];

  filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
      filtros.forEach(f => f.classList.remove('active'));
      filtro.classList.add('active');

      const valor = filtro.dataset.filter;
      let selecionados;

      if (valor === 'todos') {
        selecionados = ordemOriginal;
        ordemOriginal.forEach(c => c.classList.remove('produto-card-filtrado'));
      } else {
        selecionados = ordemOriginal.filter(c => c.dataset.categoria === valor);
        ordemOriginal.forEach(c => {
          if (c.dataset.categoria === valor) {
            c.classList.add('produto-card-filtrado');
          } else {
            c.classList.remove('produto-card-filtrado');
          }
        });
      }

      const naoSelecionados = ordemOriginal.filter(c => !selecionados.includes(c));
      grid.innerHTML = '';
      grid.append(...selecionados, ...naoSelecionados);
    });
  });
}

/* ----------------- WHATSAPP FLUTUANTE ----------------- */
function initFloatingWhatsappProdutos() {
  const mensagem = document.querySelector('.whatsapp-floating-message');
  if (!mensagem) return;

  const mensagens = [
    'Fale com um consultor<br>sobre os produtos Litho Plant',
    'Quer ajuda para montar<br>o manejo com nossos produtos?',
    'Tire suas dúvidas<br>pelo WhatsApp'
  ];

  let i = 0;
  mensagem.classList.add('visible');
  mensagem.innerHTML = mensagens[i];

  setInterval(() => {
    mensagem.classList.remove('visible');
    i = (i + 1) % mensagens.length;
    setTimeout(() => {
      mensagem.innerHTML = mensagens[i];
      mensagem.classList.add('visible');
    }, 500);
  }, 5000);
}

/* ----------------- ROTACIONAR PRODUTO EM DESTAQUE ----------------- */
function initRotacaoProdutoDestaque() {
  const imgEl = document.querySelector('.produto-destaque .destaque-img img');
  const tituloEl = document.querySelector('.produto-destaque h2');
  const descEl = document.querySelector('.produto-destaque .destaque-texto > p');
  const chipsContainer = document.querySelector('.produto-destaque .produto-beneficios');
  const doseTexto = document.querySelector('.produto-destaque .destaque-info p');
  const blocoTexto = document.querySelector('.produto-destaque .produto-destaque-fade');

  if (!imgEl || !tituloEl || !descEl || !chipsContainer || !doseTexto || !blocoTexto) return;

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
      descricao: 'Bioestimulante marinho à base de algas Ascophyllum nodosum e aminoácidos, fortalecendo o metabolismo e a resistência da planta.',
      chips: ['Resistência a estresses', 'Raízes fortalecidas', 'Floração estimulada'],
      doses: 'Aplicar em fases de estresse ou maior exigência fisiológica, conforme indicação técnica.'
    },
    {
      nome: 'TURFA GEL',
      img: '../assets/imagens/produtos/TURFA.png',
      alt: 'TURFA GEL Litho Plant',
      descricao: 'Condicionador do solo que combina substâncias húmicas de turfa e aminoácidos, enriquecendo o microbioma e fortalecendo raízes.',
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
  }

  aplicarDestaque(destaques[indice]);

  setInterval(() => {
    // fade-out
    blocoTexto.classList.remove('is-visible');

    setTimeout(() => {
      indice = (indice + 1) % destaques.length;
      aplicarDestaque(destaques[indice]);

      // fade-in
      blocoTexto.classList.add('is-visible');
    }, 500); // mesmo tempo da transição no CSS
  }, 8000);
}