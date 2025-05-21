document.addEventListener('DOMContentLoaded', () => {
  const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  scrollRevealElements.forEach(el => {
      if (!el.classList.contains('revealed')) {
          observer.observe(el);
      }
  });

  const reviewCarousel = new bootstrap.Carousel(
    document.getElementById("reviewCarousel"),
    {
      interval: 5000,
      wrap: true,
    }
  );

});