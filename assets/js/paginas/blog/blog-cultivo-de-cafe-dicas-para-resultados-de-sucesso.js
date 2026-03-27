document.addEventListener('componentsLoaded', () => {
  initCafeDynamicSidebar();
});

function initCafeDynamicSidebar() {
  const slot = document.getElementById('sidebar-cafe-dynamic-slot');
  if (!slot) return;

  const basePath = '../'; // estamos em paginas/blog/post.html

  const blocks = [
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Produto</p>
          <p class="sidebar-card-post-title">
            Coffee HF: fertilizante ideal para suas culturas
          </p>
          <p>
            Conheça o fertilizante mineral misto que potencializa o cultivo de café com nutrientes quelatados e aminoácidos.
          </p>
          <a href="${basePath}blog/conheca-o-coffee-hf-o-fertilizante-ideal-para-suas-culturas.html" class="sidebar-link">
            Ler artigo
          </a>
        </div>
      `
    },
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Biofertilizantes</p>
          <p class="sidebar-card-post-title">
            Turfa Gel: benefícios para as plantações
          </p>
          <p>
            Veja como a Turfa Gel melhora a fertilidade do solo e favorece o desenvolvimento do cafeeiro.
          </p>
          <a href="${basePath}blog/turfa-gel-quais-sao-os-beneficios-para-as-plantacoes.html" class="sidebar-link">
            Ler artigo
          </a>
        </div>
      `
    },
    {
      type: 'testimonial',
      html: `
        <div class="sidebar-card sidebar-card-testimonial">
          <h3>Resultados em cafeicultura</h3>
          <p class="sidebar-quote">
            “Após incluir os biofertilizantes Litho Plant no manejo, vimos mais vigor e uniformidade nas lavouras de café.”
          </p>
          <p class="sidebar-quote-author">
            Produtor parceiro Litho Plant
          </p>
          <a href="${basePath}resultados.html" class="sidebar-link">
            Ver casos em café
          </a>
        </div>
      `
    },
    {
      type: 'info',
      html: `
        <div class="sidebar-card sidebar-card-info">
          <h3>Programas completos para café</h3>
          <p>
            Combine biofertilizantes, fertilizantes minerais e protetores solares em um plano técnico para o seu cafezal.
          </p>
          <a href="${basePath}programas.html" class="sidebar-link">
            Ver programas
          </a>
        </div>
      `
    }
  ];

  const chosen = blocks[Math.floor(Math.random() * blocks.length)];
  slot.innerHTML = chosen.html;
}
