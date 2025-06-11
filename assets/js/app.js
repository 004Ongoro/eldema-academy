
document.addEventListener('DOMContentLoaded', function() {
  const modalHTML = `
    <div class="modal-overlay" id="volunteerModalOverlay">
      <div class="v-modal-content">
        <button class="modal-close-button" id="closeVolunteerModal">&times;</button>
        <div class="modal-header">
          <h2>Volunteer at Eldema Letap Academy!</h2>
        </div>
        <div class="modal-body">
          <p>Are you passionate about making a difference? Eldema Letap Academy is looking for enthusiastic volunteers in various fields to help us achieve our mission.</p>
          <p>Your skills and time can help shape brighter futures!</p>
        </div>
        <a href="https://eldemaletapacademy.org/volunteering/" class="modal-cta-button">Learn More & Volunteer</a>
      </div>
    </div>
  `;

  if (localStorage.getItem('eldemaVolunteerModalShown') !== 'true') {
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const volunteerModalOverlay = document.getElementById('volunteerModalOverlay');
    const closeVolunteerModalButton = document.getElementById('closeVolunteerModal');

    function showModal() {
      volunteerModalOverlay.classList.add('active');
    }

    function hideModal() {
      volunteerModalOverlay.classList.remove('active');
      localStorage.setItem('eldemaVolunteerModalShown', 'true');
    }

    closeVolunteerModalButton.addEventListener('click', hideModal);

    volunteerModalOverlay.addEventListener('click', function(event) {
      if (event.target === volunteerModalOverlay) {
        hideModal();
      }
    });

    // Show the modal
    showModal();
  }
});

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