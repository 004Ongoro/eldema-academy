import bootstrap from "bootstrap"; // Import Bootstrap SJ
import scrollReveal from "scrollreveal";

// Scroll reveal
ScrollReveal().reveal(".headline");

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
