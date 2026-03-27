document.addEventListener('componentsLoaded', () => {
  initProdutividadeDynamicSidebar();
});

function initProdutividadeDynamicSidebar() {
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
            Benefícios da primavera para a agricultura
          </p>
          <p>
            Entenda como a estação influencia o desenvolvimento das lavouras e como planejar o manejo.
          </p>
          <a href="${basePath}blog/beneficios-da-primavera-para-a-agricultura-invista-em-boas-praticas.html" class="sidebar-link">
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
            Veja como o Coffee HF ajuda a impulsionar o desempenho de lavouras exigentes em produtividade.
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
          <h3>Produtores que ganharam em produtividade</h3>
          <p class="sidebar-quote">
            “Com o uso de biofertilizantes e ajustes no manejo, a produtividade da fazenda deu um salto.”
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
          <h3>Programas focados em produtividade</h3>
          <p>
            Conheça programas de manejo estruturados pela equipe técnica para aumentar produtividade com sustentabilidade.
          </p>
          <a href="${basePath}programas.html" class="sidebar-link">
            Ver programas de manejo
          </a>
        </div>
      `
    }
  ];

  const chosen = blocks[Math.floor(Math.random() * blocks.length)];
  slot.innerHTML = chosen.html;
}