(() => {
  const sections = document.querySelectorAll('section, .card, .gov-grid article');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((node, index) => {
    node.classList.add('reveal');
    node.style.transitionDelay = `${Math.min(index * 45, 320)}ms`;
    observer.observe(node);
  });
})();
