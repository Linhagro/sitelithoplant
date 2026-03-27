document.addEventListener('componentsLoaded', () => {
  initLithoplantDynamicSidebar();
});

function initLithoplantDynamicSidebar() {
  const slot = document.getElementById('sidebar-lithoplant-dynamic-slot');
  if (!slot) return;

  const basePath = '../'; // estamos em paginas/blog/post.html

  const blocks = [
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Produto</p>
          <p class="sidebar-card-post-title">
            Turfa Gel: quais são os benefícios para as plantações?
          </p>
          <p>
            Conheça o biofertilizante que melhora a dinâmica de nitrogênio no solo e fortalece as plantas.
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
            Veja como o Litho Mag corrige deficiências de magnésio e melhora a fotossíntese.
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
          <h3>Produtores que confiam na Litho Plant</h3>
          <p class="sidebar-quote">
            “Depois que incluímos os biofertilizantes e o Sombryt no manejo, a lavoura ficou mais uniforme e produtiva.”
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
          <h3>Programas completos de manejo</h3>
          <p>
            Integre biofertilizantes, fertilizantes minerais e protetor solar em um único programa técnico.
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