(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('[data-paper-carousel]').forEach(carousel => {
    const viewport = carousel.querySelector('[data-carousel-viewport]');
    const slides = [...carousel.querySelectorAll('[data-carousel-slide]')];
    const status = carousel.querySelector('[data-carousel-status]');
    const toggle = carousel.querySelector('[data-carousel-toggle]');
    if (!viewport || slides.length < 2 || !status || !toggle) return;

    let active = 0;
    let timer = null;
    let scrollFrame = 0;
    let pausedByUser = false;

    const wrap = index => (index + slides.length) % slides.length;

    const update = index => {
      active = wrap(index);
      const figureNumber = slides[active].getAttribute('aria-label').match(/Figure (\d+)/)?.[1];
      status.textContent = `Figure ${figureNumber || active + 1} · ${active + 1} of ${slides.length}`;
    };

    const updateToggle = () => {
      toggle.textContent = pausedByUser ? 'Play' : 'Pause';
      toggle.setAttribute('aria-label', pausedByUser ? 'Resume automatic figure rotation' : 'Pause automatic figure rotation');
      toggle.setAttribute('aria-pressed', String(pausedByUser));
    };

    const stopTimer = () => {
      window.clearTimeout(timer);
      timer = null;
    };

    const schedule = () => {
      stopTimer();
      if (pausedByUser || document.hidden) return;
      timer = window.setTimeout(() => goTo(active + 1), 5000);
    };

    const goTo = (index, behavior = reducedMotion.matches ? 'auto' : 'smooth') => {
      const target = wrap(index);
      const left = slides[target].getBoundingClientRect().left
        - viewport.getBoundingClientRect().left
        + viewport.scrollLeft;
      viewport.scrollTo({ left, behavior });
      update(target);
      schedule();
    };

    toggle.addEventListener('click', () => {
      pausedByUser = !pausedByUser;
      updateToggle();
      schedule();
    });

    viewport.addEventListener('scroll', () => {
      cancelAnimationFrame(scrollFrame);
      scrollFrame = requestAnimationFrame(() => {
        update(Math.round(viewport.scrollLeft / viewport.clientWidth));
      });
    }, { passive: true });

    viewport.addEventListener('keydown', event => {
      if (event.target !== viewport) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(active + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });

    document.addEventListener('visibilitychange', schedule);
    window.addEventListener('resize', () => goTo(active, 'auto'));
    update(0);
    updateToggle();
    schedule();
  });
})();
