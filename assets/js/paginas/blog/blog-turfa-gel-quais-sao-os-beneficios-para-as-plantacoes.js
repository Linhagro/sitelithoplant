document.addEventListener('componentsLoaded', () => {
  initTurfaDynamicSidebar();
});

function initTurfaDynamicSidebar() {
  const slot = document.getElementById('sidebar-turfa-dynamic-slot');
  if (!slot) return;

  const basePath = '../'; // estamos em paginas/blog/post.html

  const blocks = [
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Biofertilizantes</p>
          <p class="sidebar-card-post-title">
            O que fazer para melhorar a produtividade da agricultura?
          </p>
          <p>
            Veja como práticas modernas e biofertilizantes aumentam a produtividade de forma sustentável.
          </p>
          <a href="${basePath}blog/o-que-fazer-para-melhorar-a-produtividade-da-agricultura.html" class="sidebar-link">
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
            Entenda como o Coffee HF contribui para maior vigor e produtividade em diferentes lavouras.
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
          <h3>Resultados em campo</h3>
          <p class="sidebar-quote">
            “Após incluir o Turfa Gel no manejo, percebemos raízes mais ativas e plantas mais resistentes.”
          </p>
          <p class="sidebar-quote-author">
            Produtor parceiro Litho Plant
          </p>
          <a href="${basePath}resultados.html" class="sidebar-link">
            Ver casos em campo
          </a>
        </div>
      `
    },
    {
      type: 'info',
      html: `
        <div class="sidebar-card sidebar-card-info">
          <h3>Programas de manejo com biofertilizantes</h3>
          <p>
            Conheça programas estruturados que combinam Turfa Gel e outros produtos Litho Plant.
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