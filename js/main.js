document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Mouse Follower & Ambient Glow
  const cursorDot = document.getElementById('cursorDot');
  const cursorGlow = document.getElementById('cursorGlow');

  window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    if (cursorDot) {
      cursorDot.style.transform = `translate(${x}px, ${y}px)`;
    }
    if (cursorGlow) {
      cursorGlow.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  // 2. 3D Tilt Card Effect with Dynamic Spotlight Mesh
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach((card) => {
    const glow = card.querySelector('.card-glow');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update Card Spotlight Position
      if (glow) {
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
      }

      // Subtle 3D Perspective Tilt Math
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });

  // 3. Magnetic Hover Buttons (Gen Z Micro-interaction)
  const magneticButtons = document.querySelectorAll('.magnetic');

  magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });

  // 4. Scroll Reveal via Intersection Observer
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach((el) => revealObserver.observe(el));

  // 5. Stat Counter Increment Animation
  const statNumbers = document.querySelectorAll('.stat-num');
  let animated = false;

  const countUp = () => {
    statNumbers.forEach((counter) => {
      const target = +counter.getAttribute('data-count');
      let current = 0;
      const increment = Math.ceil(target / 45);

      const updateCount = () => {
        current += increment;
        if (current >= target) {
          counter.innerText = target;
        } else {
          counter.innerText = current;
          requestAnimationFrame(updateCount);
        }
      };
      updateCount();
    });
  };

  const statsSection = document.querySelector('.stats-strip');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        countUp();
      }
    }, { threshold: 0.5 });
    statsObserver.observe(statsSection);
  }

  // 6. Mobile Navigation
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
});