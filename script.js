/* The Red Cow · minimal vanilla JS */

(function () {
  'use strict';

/* --- social config (update Instagram when live) --- */
  const SOCIAL = {
    facebook: 'https://www.facebook.com/people/The-RED-COW/61564161263680/',
    instagramHandle: '',
    // Paste SnapWidget or Behold embed URL here once Instagram is live
    instagramEmbedSrc: '',
  };

  if (SOCIAL.instagramHandle || SOCIAL.instagramEmbedSrc) {
    const follow = document.getElementById('instagramFollow');
    const embed = document.getElementById('instagramEmbed');
    const url = SOCIAL.instagramHandle
      ? `https://www.instagram.com/${SOCIAL.instagramHandle}/`
      : 'https://www.instagram.com/';

    if (follow && SOCIAL.instagramHandle) {
      follow.href = url;
      follow.hidden = false;
    }

    if (embed && SOCIAL.instagramEmbedSrc) {
      embed.innerHTML = `
        <iframe
          src="${SOCIAL.instagramEmbedSrc}"
          class="social__snapwidget"
          title="The Red Cow on Instagram"
          loading="lazy"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"></iframe>`;
    } else if (embed && SOCIAL.instagramHandle) {
      embed.querySelector('.social__placeholder-text').textContent =
        'Our Instagram feed is being connected. Follow us for the latest photos and updates.';
      if (follow) follow.classList.remove('social__follow--soon');
    }

    if (SOCIAL.instagramHandle) {
      document.querySelectorAll('.visit__social--soon').forEach(el => {
        el.href = url;
        el.classList.remove('visit__social--soon');
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
        el.style.pointerEvents = '';
        el.style.opacity = '';
      });
    }
  }

  /* --- year stamp --- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- nav scroll state --- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- mobile burger --- */
  const burger = document.getElementById('navBurger');
  const links  = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('is-open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }));
  }

  /* --- menu tabs --- */
  const tabs   = document.querySelectorAll('.menu__tab');
  const panels = document.querySelectorAll('.menu__panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach(p => p.classList.toggle('is-active', p.dataset.panel === target));
    });
  });

  /* --- reveal on scroll --- */
  const reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          // stagger siblings inside the same parent
          const siblings = Array.from(el.parentElement?.querySelectorAll(':scope > [data-reveal]') || []);
          const idx = siblings.indexOf(el);
          if (idx >= 0) el.style.setProperty('--reveal-delay', (idx * 80) + 'ms');
          el.classList.add('is-in');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

})();
