document.addEventListener("DOMContentLoaded", function () {
  const travelBuddyForm = document.getElementById("myForm");
  if (travelBuddyForm) {
    travelBuddyForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = travelBuddyForm.querySelector("#name")?.value.trim();
      const email = travelBuddyForm.querySelector("#email")?.value.trim();
      const destination = travelBuddyForm.querySelector("#destination")?.value.trim();
      const dates = travelBuddyForm.querySelector("#dates")?.value.trim();
      const interests = travelBuddyForm.querySelector("#interests")?.value.trim();

      if (!name || !email || !destination || !dates || !interests) {
        alert("Please fill in all the fields.");
        return;
      }

      alert(`Thank you, ${name}! Your travel buddy search has been successfully submitted.`);
      travelBuddyForm.reset();
    });
  }


  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = contactForm.querySelector("#name")?.value.trim();
      const email = contactForm.querySelector("#email")?.value.trim();
      const message = contactForm.querySelector("#message")?.value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
      }

      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    });
  }

  
  const searchInput = document.getElementById("search-country");
  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const query = searchInput.value.toLowerCase();
      const destinationSection = document.getElementById("destinations");
      const hotelSection = document.getElementById("hotels");

      if (destinationSection) {
        const destinations = destinationSection.querySelectorAll("li");
        destinations.forEach(function (item) {
          item.style.display = item.textContent.toLowerCase().includes(query) ? "list-item" : "none";
        });
      }

      if (hotelSection) {
        const hotels = hotelSection.querySelectorAll("li");
        hotels.forEach(function (item) {
          item.style.display = item.textContent.toLowerCase().includes(query) ? "list-item" : "none";
        });
      }
    });
  }
});