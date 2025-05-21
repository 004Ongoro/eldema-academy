import bootstrap from "bootstrap"; // Import Bootstrap SJ
import scrollReveal from "scrollreveal";

// Scroll reveal
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
      observer.observe(el);
  });
});

// Initialize Bootstrap carousel
const reviewCarousel = new bootstrap.Carousel(
  document.getElementById("reviewCarousel"),
  {
    interval: 5000,
    wrap: true,
  }
);

document.window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    console.log("Sroll value: " + window.scrollY);
    document.querySelector(".toggler").classList.add("toggler-full");
  } else {
    document.querySelector(".toggler").classList.remove("toggler-full");
  }
});

scrollReveal.reveal(".headline", {
  origin: "bottom",
  distance: "20px",
  duration: 1000,
  delay: 200,
  easing: "ease-in-out",
  reset: true,
});
