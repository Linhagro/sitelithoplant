document.addEventListener('componentsLoaded', () => {
  initSombrytDynamicSidebar();
});

function initSombrytDynamicSidebar() {
  const slot = document.getElementById('sidebar-sombryt-dynamic-slot');
  if (!slot) return;

  const basePath = '../'; // estamos em paginas/blog/post.html

  const blocks = [
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Proteção térmica</p>
          <p class="sidebar-card-post-title">
            Escaldadura nas plantas: como evitar esse problema?
          </p>
          <p>
            Entenda como Sombryt e boas práticas de manejo ajudam a reduzir escaldadura em diferentes culturas.
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
          <p class="sidebar-card-post-tag">Sobre a Litho Plant</p>
          <p class="sidebar-card-post-title">
            Conheça os benefícios da Litho Plant
          </p>
          <p>
            Veja como biofertilizantes e protetores solares se integram em programas de manejo sustentáveis.
          </p>
          <a href="${basePath}blog/conheca-os-beneficios-da-litho-plant.html" class="sidebar-link">
            Ler artigo
          </a>
        </div>
      `
    },
    {
      type: 'testimonial',
      html: `
        <div class="sidebar-card sidebar-card-testimonial">
          <h3>Resultados com Sombryt</h3>
          <p class="sidebar-quote">
            “Após usar Sombryt nas áreas mais expostas, reduzimos a queima de frutos e melhoramos a padronização da colheita.”
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
          <h3>Planos de proteção solar</h3>
          <p>
            Monte um programa combinando Sombryt, biofertilizantes e irrigação para reduzir estresse térmico na sua lavoura.
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
