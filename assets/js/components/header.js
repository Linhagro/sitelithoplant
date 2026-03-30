/**
 * HEADER - FUNDO VERDE APÓS SCROLL + MENU MOBILE
 * Usa .header, .header-overlay, .header-hidden, .nav-menu.active e body.no-scroll
 */

(function () {
  let initialized = false;

  function initHeaderEffects() {
    if (initialized) return;

    const header = document.querySelector('.header');
    const navMenu = document.querySelector('.nav-menu');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const body = document.body;

    if (!header) {
      console.warn('header.js: .header não encontrado');
      return;
    }

    let lastScrollY = window.scrollY;
    const overlayThreshold = 120;
    const selectedColorClass = 'is-selected';

    function isMobile() {
      return window.innerWidth <= 768;
    }

    function updateOverlay() {
      const y = window.scrollY || window.pageYOffset;

      if (y >= overlayThreshold) {
        header.classList.add('header-overlay');
      } else {
        header.classList.remove('header-overlay');
      }
    }

    function closeMobileMenu() {
      if (navMenu && mobileToggle) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('no-scroll');

        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    }

    function onScroll() {
      const currentY = window.scrollY;

      if (!isMobile()) {
        if (Math.abs(currentY - lastScrollY) >= 5) {
          if (currentY > lastScrollY && currentY > overlayThreshold) {
            header.classList.add('header-hidden');
          } else {
            header.classList.remove('header-hidden');
          }
          lastScrollY = currentY;
        }
      } else {
        header.classList.remove('header-hidden');
      }

      updateOverlay();
    }

    function onResize() {
      if (!isMobile()) {
        closeMobileMenu();
        header.classList.remove('header-hidden');
      }
    }

    function animateTogglePress() {
      if (!mobileToggle) return;
      mobileToggle.animate(
        [
          { transform: 'scale(1)' },
          { transform: 'scale(0.92)' },
          { transform: 'scale(1)' }
        ],
        {
          duration: 260,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }
      );
    }

    function setSelectedLink(currentLink) {
      if (!navMenu) return;
      navMenu.querySelectorAll('.nav-link').forEach((link) => {
        if (link === currentLink) {
          link.classList.add(selectedColorClass);
        } else {
          link.classList.remove(selectedColorClass);
        }
      });
    }

    updateOverlay();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        animateTogglePress();

        const isOpen = navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active', isOpen);
        mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        body.classList.toggle('no-scroll', isOpen);

        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-bars', 'fa-times');
          icon.classList.add(isOpen ? 'fa-times' : 'fa-bars');
        }
      });

      navMenu.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          setSelectedLink(link);

          link.animate(
            [
              { transform: 'scale(1)' },
              { transform: 'scale(0.98)' },
              { transform: 'scale(1)' }
            ],
            {
              duration: 240,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
            }
          );

          if (navMenu.classList.contains('active')) {
            setTimeout(() => {
              closeMobileMenu();
            }, 140);
          }
        });
      });
    }

    initialized = true;
    console.log('header.js: fundo verde após scroll + mobile menu configurados');
  }

  window.addEventListener('load', initHeaderEffects);
  document.addEventListener('componentsLoaded', initHeaderEffects);
})();