/* ============================================
   animations.js — Intersection Observer & Scroll Animations
   ============================================ */

export function initAnimations() {
  const targets = document.querySelectorAll('.fade-in-up');

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get siblings to calculate stagger delay
          const parent = entry.target.parentElement;
          const siblings = [...parent.children].filter(
            (el) => el.classList.contains('fade-in-up')
          );
          const delay = siblings.indexOf(entry.target) * 80;

          // Apply staggered animation
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);

          // Stop observing after animation triggers
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => observer.observe(el));
}
