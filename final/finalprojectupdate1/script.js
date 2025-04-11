
document.addEventListener("DOMContentLoaded", function () {
    const travelBuddyForm = document.getElementById("myForm");
    if (travelBuddyForm) {
      travelBuddyForm.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const destination = document.getElementById("destination").value;
        const dates = document.getElementById("dates").value;
        const interests = document.getElementById("interests").value;
  

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
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
  
        
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



  