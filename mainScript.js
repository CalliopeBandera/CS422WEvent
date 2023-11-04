
document.addEventListener("DOMContentLoaded", function () {
    const saveButtons = document.querySelectorAll('.save-button');

    // Add a click event listener to each button
    saveButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log("CLICk");
            // Toggle the "full-heart" class on the heart icon
            const heartIcon = button.querySelector('.heart-icon');
            if (heartIcon.textContent === '♡') {
                heartIcon.textContent = '♥'; // Full heart character
                eventListing.classList.add('saved');
            } else {
                heartIcon.textContent = '♡'; // Outline heart character
                eventListing.classList.remove('saved');
            }
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get("category");
  
    if (category) {
        const eventListings = document.querySelectorAll(".event-listing");
        eventListings.forEach(function (listing) {
        const categories = listing.getAttribute("data-category").split(',');
        if (!categories.includes(category)) {
            listing.style.display = "none";
        }
        });
        category = category.charAt(0).toUpperCase() + category.slice(1);
        document.getElementById("results-header").innerText = category + " events";
    }
  });