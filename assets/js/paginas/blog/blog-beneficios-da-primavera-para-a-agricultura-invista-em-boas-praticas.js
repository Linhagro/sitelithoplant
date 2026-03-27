document.addEventListener('componentsLoaded', () => {
  initPrimaveraPostAnimations();
  initPrimaveraDynamicSidebar();
});

function initPrimaveraPostAnimations() {
  const animatedBlocks = document.querySelectorAll('.animate-fade-up, .animate-fade-up-delayed');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedBlocks.forEach(el => observer.observe(el));
  } else {
    animatedBlocks.forEach(el => el.classList.add('visible'));
  }
}

/**
 * Sidebar dinâmica: escolhe um card aleatório entre várias opções
 */
function initPrimaveraDynamicSidebar() {
  const slot = document.getElementById('sidebar-dynamic-slot');
  if (!slot) return;

  const basePath = '../'; // estamos em paginas/blog/post.html

  const blocks = [
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Blog</p>
          <p class="sidebar-card-post-title">
            Escaldadura nas plantas: como evitar esse problema?
          </p>
          <p>
            Entenda como o estresse térmico afeta folhas e frutos e veja como ajustar o manejo para reduzir perdas.
          </p>
          <a href="${basePath}blog/escaldadura-nas-plantas-como-evitar-esse-problema.html" class="sidebar-link">
            Ler artigo
          </a>
        </div>
      `
    },
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Produtos</p>
          <p class="sidebar-card-post-title">
            Conheça o Coffee HF – o fertilizante ideal para suas culturas
          </p>
          <p>
            Veja como o Coffee HF ajuda a fortalecer o sistema radicular e impulsionar o desempenho de lavouras de café e outras culturas.
          </p>
          <a href="${basePath}blog/conheca-o-coffee-hf-o-fertilizante-ideal-para-suas-culturas.html" class="sidebar-link">
            Ver detalhes do Coffee HF
          </a>
        </div>
      `
    },
    {
      type: 'testimonial',
      html: `
        <div class="sidebar-card sidebar-card-testimonial">
          <h3>Quem já sentiu a diferença</h3>
          <p class="sidebar-quote">
            “Depois que ajustamos o manejo na primavera com biofertilizantes Litho Plant,
            o arranque da lavoura ficou muito mais uniforme e seguro.”
          </p>
          <p class="sidebar-quote-author">
            Produtor parceiro Litho Plant
          </p>
          <a href="${basePath}resultados.html" class="sidebar-link">
            Ver resultados em campo
          </a>
        </div>
      `
    },
    {
      type: 'info',
      html: `
        <div class="sidebar-card sidebar-card-info">
          <h3>Quer se aprofundar em biofertilizantes?</h3>
          <p>
            Entenda o papel da biologia do solo, da matéria orgânica e dos micronutrientes
            na construção de lavouras mais estáveis ao longo do ano.
          </p>
          <a href="${basePath}programas.html" class="sidebar-link">
            Ver programas de manejo
          </a>
        </div>
      `
    },
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Gestão</p>
          <p class="sidebar-card-post-title">
            O que fazer para melhorar a produtividade da agricultura?
          </p>
          <p>
            Dicas práticas para otimizar recursos, reduzir perdas e aumentar a eficiência da fazenda.
          </p>
          <a href="${basePath}blog/o-que-fazer-para-melhorar-a-produtividade-da-agricultura.html" class="sidebar-link">
            Ler artigo
          </a>
        </div>
      `
    }
  ];

  const chosen = blocks[Math.floor(Math.random() * blocks.length)];
  slot.innerHTML = chosen.html;

  const el = slot.firstElementChild;
  if (el) {
    el.classList.add('animate-fade-up');
    requestAnimationFrame(() => {
      el.classList.add('visible');
    });
  }
}