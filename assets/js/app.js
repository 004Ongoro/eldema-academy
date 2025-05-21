import bootstrap from "bootstrap"; // Import Bootstrap SJ
import scrollReveal from "scrollreveal";

// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded. Initializing Scroll Reveal...');

  const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
  console.log(`Found ${scrollRevealElements.length} elements with class 'scroll-reveal'.`);

  // Log each found element for verification
  scrollRevealElements.forEach((el, index) => {
      console.log(`  Element ${index}:`, el);
      if (el.classList.contains('revealed')) {
          console.log(`    - Already has 'revealed' class (should be visible immediately).`);
      }
  });


  const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the root
      threshold: 0.1 // When 10% of the item is visible, trigger
  };
  console.log('IntersectionObserver options:', observerOptions);

  const observer = new IntersectionObserver((entries, observer) => {
      console.log('IntersectionObserver callback triggered!');
      entries.forEach(entry => {
          console.log(`  Observing element:`, entry.target);
          console.log(`    - isIntersecting: ${entry.isIntersecting}`);
          console.log(`    - intersectionRatio: ${entry.intersectionRatio}`);

          if (entry.isIntersecting) {
              // If the element is visible
              console.log(`    - Element is intersecting! Adding 'revealed' class to:`, entry.target);
              entry.target.classList.add('revealed');
              // Stop observing once revealed to improve performance
              console.log(`    - Unobserving element:`, entry.target);
              observer.unobserve(entry.target);
          } else {
              console.log(`    - Element is NOT intersecting.`);
              // Optional: If you want to debug why something isn't revealing,
              // you might log if it loses intersection (e.g., if you scroll away and back)
              // if (entry.target.classList.contains('revealed')) {
              //     console.log(`    - Element was revealed but now out of view:`, entry.target);
              // }
          }
      });
  }, observerOptions);

  // Observe each scroll-reveal element
  scrollRevealElements.forEach(el => {
      // Only observe elements that don't already have 'revealed' class
      // This prevents trying to observe elements that are already visible
      if (!el.classList.contains('revealed')) {
          observer.observe(el);
          console.log(`Started observing element:`, el);
      } else {
          console.log(`Skipping observation for already revealed element:`, el);
      }
  });

  console.log('Scroll Reveal initialization complete.');
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
