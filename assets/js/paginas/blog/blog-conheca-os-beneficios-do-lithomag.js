document.addEventListener('componentsLoaded', () => {
  initLithomagDynamicSidebar();
});

function initLithomagDynamicSidebar() {
  const slot = document.getElementById('sidebar-lithomag-dynamic-slot');
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
          <p class="sidebar-card-post-tag">Produto</p>
          <p class="sidebar-card-post-title">
            Conheça o Coffee HF – o fertilizante ideal para suas culturas
          </p>
          <p>
            Entenda como o Coffee HF contribui para maior vigor e produtividade em diversas lavouras.
          </p>
          <a href="${basePath}blog/conheca-o-coffee-hf-o-fertilizante-ideal-para-suas-culturas.html" class="sidebar-link">
            Ver detalhes
          </a>
        </div>
      `
    },
    {
      type: 'testimonial',
      html: `
        <div class="sidebar-card sidebar-card-testimonial">
          <h3>Resultados com adubação foliar</h3>
          <p class="sidebar-quote">
            “Após incluir o Litho Mag no manejo foliar, observamos folhas mais verdes e maior uniformidade da lavoura.”
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
          <h3>Programas de nutrição foliar</h3>
          <p>
            Conheça programas que combinam Litho Mag e outros produtos Litho Plant para diferentes culturas.
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