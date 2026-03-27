document.addEventListener('componentsLoaded', () => {
  initNitrogenioDynamicSidebar();
});

function initNitrogenioDynamicSidebar() {
  const slot = document.getElementById('sidebar-nitrogenio-dynamic-slot');
  if (!slot) return;

  const basePath = '../'; // estamos em paginas/blog/post.html

  const blocks = [
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Produto</p>
          <p class="sidebar-card-post-title">
            Gluta Phós 37: eficiência em fósforo e nitrogênio
          </p>
          <p>
            Conheça o fertilizante mineral com aminoácidos que ajuda a aproveitar melhor o nitrogênio na lavoura.
          </p>
          <a href="${basePath}produtos/gluta-phos-37.html" class="sidebar-link">
            Ver produto
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
            Lithamin Plus: aminoácidos e micronutrientes
          </p>
          <p>
            Veja como o Lithamin Plus contribui para vigor vegetativo e recuperação pós-estresse.
          </p>
          <a href="${basePath}produtos/lithamin-plus.html" class="sidebar-link">
            Ver produto
          </a>
        </div>
      `
    },
    {
      type: 'testimonial',
      html: `
        <div class="sidebar-card sidebar-card-testimonial">
          <h3>Resultados com melhor manejo de N</h3>
          <p class="sidebar-quote">
            “Ajustando a adubação e usando as soluções Litho Plant, reduzimos perdas de nitrogênio e aumentamos a produtividade.”
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
          <h3>Programas de adubação nitrogenada</h3>
          <p>
            Monte programas que integram N mineral, biofertilizantes e manejo de irrigação para diferentes culturas.
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