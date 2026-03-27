document.addEventListener('componentsLoaded', () => {
  initEscaldaduraDynamicSidebar();
});

function initEscaldaduraDynamicSidebar() {
  const slot = document.getElementById('sidebar-escaldadura-dynamic-slot');
  if (!slot) return;

  const basePath = '../'; // estamos em paginas/blog/post.html

  const blocks = [
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Proteção solar</p>
          <p class="sidebar-card-post-title">
            Sombryt: proteção solar para folhas e frutos
          </p>
          <p>
            Veja como o Sombryt ajuda a reduzir escaldadura e melhorar a qualidade dos frutos.
          </p>
          <a href="${basePath}produtos/sombryt.html" class="sidebar-link">
            Ver produto
          </a>
        </div>
      `
    },
    {
      type: 'post',
      html: `
        <div class="sidebar-card sidebar-card-post">
          <p class="sidebar-card-post-tag">Manejo de estresse</p>
          <p class="sidebar-card-post-title">
            Conheça os benefícios da Litho Plant
          </p>
          <p>
            Entenda como biofertilizantes e protetores solares se integram em programas de manejo.
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
            “Depois de adotar o Sombryt, reduzimos drasticamente a queima de frutos nas áreas mais expostas.”
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
          <h3>Planos de manejo térmico</h3>
          <p>
            Monte um programa combinando Sombryt, biofertilizantes e irrigação adequada para reduzir escaldadura.
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
