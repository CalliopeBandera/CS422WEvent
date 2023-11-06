document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('savedEventIds')) {
        savedEventIds = JSON.parse(localStorage.getItem('savedEventIds'));
    }else{
        savedEventIds = [];
    }

    const saveButtons = document.querySelectorAll('.save-button');

    // Initialize the heart icons based on the saved state when the page loads
    saveButtons.forEach(button => {
        const eventListing = button.closest('.event-listing');
        const eventId = eventListing.getAttribute('data-event-id');
        const heartIcon = button.querySelector('.heart-icon');

        if (savedEventIds.includes(eventId)) {
            // Event is saved; display a full heart
            heartIcon.textContent = '♥';
            eventListing.classList.add('saved');
        } else {
            // Event is not saved; display an empty heart
            heartIcon.textContent = '♡';
            eventListing.classList.remove('saved');
        }

        // Add a click event listener to toggle the saved state
        button.addEventListener('click', () => {
            console.log("click");
            if (!eventListing.classList.contains('saved')) {
                // Event is not saved; save it
                heartIcon.textContent = '♥';
                eventListing.classList.add('saved');
                savedEventIds.push(eventId);
            } else {
                // Event is saved; unsave it
                heartIcon.textContent = '♡';
                eventListing.classList.remove('saved');
                const index = savedEventIds.indexOf(eventId);
                if (index !== -1) {
                    savedEventIds.splice(index, 1);
                }
            }

            console.log(savedEventIds);
            localStorage.setItem('savedEventIds', JSON.stringify(savedEventIds));
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

function resetSaved() {
    savedEventIds = [];
    localStorage.setItem('savedEventIds', JSON.stringify(savedEventIds));
    console.log("IDS RESET");
}
function printSaved(){
    localStorage.getItem('savedEventIds')
    console.log(savedEventIds);
}

