document.addEventListener('componentsLoaded', () => {
  initCoffeeDynamicSidebar();
});

function initCoffeeDynamicSidebar() {
  const slot = document.getElementById('sidebar-coffee-dynamic-slot');
  if (!slot) return;

  const basePath = '../'; // estamos em paginas/blog/post.html

  const blocks = [
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Biofertilizantes</p>
          <p class="sidebar-card-post-title">
            Turfa Gel: quais são os benefícios para as plantações?
          </p>
          <p>
            Veja como a Turfa Gel melhora o nitrogênio no solo e fortalece o microbioma.
          </p>
          <a href="${basePath}blog/turfa-gel-quais-sao-os-beneficios-para-as-plantacoes.html" class="sidebar-link">
            Ler artigo
          </a>
        </div>
      `
    },
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Nutrição foliar</p>
          <p class="sidebar-card-post-title">
            Conheça os benefícios do Litho Mag
          </p>
          <p>
            Entenda como o Litho Mag corrige deficiências de magnésio e melhora a fotossíntese.
          </p>
          <a href="${basePath}blog/conheca-os-beneficios-do-lithomag.html" class="sidebar-link">
            Ler artigo
          </a>
        </div>
      `
    },
    {
      type: 'testimonial',
      html: `
        <div class="sidebar-card sidebar-card-testimonial">
          <h3>Resultados em café</h3>
          <p class="sidebar-quote">
            “Com o Coffee HF no manejo, vimos aumento na produtividade e grãos mais uniformes.”
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
            Conheça programas de manejo que integram Coffee HF, biofertilizantes e outros insumos Litho Plant.
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