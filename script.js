document.addEventListener('DOMContentLoaded', () => {
  // ============================================================
  // 1. ELEKTROTECHNICKÉ ANIMOVANÉ PLÁTNO (CIRCUIT NODES)
  // ============================================================
  const canvas = document.getElementById('circuit-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const maxParticles = window.innerWidth < 768 ? 25 : 55;
    const connectionDist = 120;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        ctx.fillStyle = isDark ? 'rgba(0, 245, 212, 0.7)' : 'rgba(0, 150, 199, 0.7)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const lineColor = isDark ? 'rgba(0, 245, 212, ' : 'rgba(0, 150, 199, ';

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * (isDark ? 0.22 : 0.12);
            ctx.strokeStyle = lineColor + alpha + ')';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  // ============================================================
  // 2. TMAVÝ / SVĚTLÝ REŽIM (THEME TOGGLE)
  // ============================================================
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('vilem_theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('vilem_theme', next);
    });
  }

  // ============================================================
  // 3. MOBILNÍ MENU
  // ============================================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // ============================================================
  // 4. ZVÝRAZNĚNÍ AKTIVNÍHO ODKAZU PŘI SCROLLOVÁNÍ
  // ============================================================
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const activeLink = document.querySelector(`.nav-menu a[href*="${id}"]`);
      if (activeLink) {
        if (scrollPos >= top && scrollPos < top + height) {
          activeLink.classList.add('active');
        } else {
          activeLink.classList.remove('active');
        }
      }
    });
  });

  // ============================================================
  // 5. KOPÍROVÁNÍ E-MAILU
  // ============================================================
  const copyBtn = document.getElementById('copy-email-btn');
  const emailLink = document.getElementById('user-email-text');
  const copyTooltip = document.getElementById('copy-tooltip');

  if (copyBtn && emailLink) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailLink.textContent.trim()).then(() => {
        copyBtn.classList.add('copied');
        if (copyTooltip) copyTooltip.textContent = 'Zkopírováno!';
        setTimeout(() => {
          copyBtn.classList.remove('copied');
          if (copyTooltip) copyTooltip.textContent = 'Kopírovat';
        }, 2000);
      });
    });
  }

  // ============================================================
  // 6. KONTAKTNÍ FORMULÁŘ
  // ============================================================
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const msg = document.getElementById('form-message').value.trim();

      if (!name || !email || !msg) {
        formStatus.textContent = '! Vyplňte prosím všechna pole.';
        formStatus.className = 'form-status-msg error';
        return;
      }

      formStatus.textContent = 'Odesílám zprávu...';
      formStatus.className = 'form-status-msg';

      setTimeout(() => {
        formStatus.textContent = `✓ Děkuji, ${name}! Zpráva byla úspěšně odeslána.`;
        formStatus.className = 'form-status-msg success';
        contactForm.reset();

        setTimeout(() => {
          formStatus.textContent = '';
        }, 4000);
      }, 600);
    });
  }

  // ============================================================
  // 7. AKTUÁLNÍ ROK V PATIČCE
  // ============================================================
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
