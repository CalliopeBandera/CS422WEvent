document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("savedEventIds")) {
    savedEventIds = JSON.parse(localStorage.getItem("savedEventIds"));
  }

  console.log(savedEventIds);
  function createEventListing(
    eventId,
    eventName,
    date,
    location,
    price,
    image
  ) {
    return `
          <div class="event-listing pl-4" data-event-id="${eventId}">
            <div class="event-image">
              <img src="images/${image}.jpg" alt="Event Image" />
            </div>
            <div class="event-details">
              <h2>${eventName}</h2>
              <p>Date: ${date}</p>
              <p>Location: ${location}</p>
              <p>Price: ${price}</p>
            </div>
            <button class="save-button">
              <span class="heart-icon">♥</span>
            </button>
          </div>
        `;
  }

  var events = document.getElementById("liked-events");

  for (var i = 0; i < savedEventIds.length; i++) {
    if (savedEventIds[i] == 1) {
      events.innerHTML += createEventListing(
        1,
        "Cupcake Day Festival",
        "Friday, November 1, 2023",
        "Wacker Drive, Chicago, IL",
        "free",
        "cupcakes"
      );
    } else if (savedEventIds[i] == 2) {
      events.innerHTML += createEventListing(
        2,
        "Fulton Market Food Festival",
        "Friday, November 1, 2023",
        "Fulton & Morgan St, Chicago, IL",
        "free",
        "fulton"
      );
    } else if (savedEventIds[i] == 3) {
      events.innerHTML += createEventListing(
        3,
        "The Festival of Wood and Barrel Aged Beer",
        "Friday, November 1, 2023",
        "Michigan Avenue, Chicago, IL",
        "$-$$",
        "beer"
      );
    } else if (savedEventIds[i] == 4) {
      events.innerHTML += createEventListing(
        4,
        "Christmas Market",
        "Friday, November 10, 2023",
        "State Street, Chicago, IL",
        "$",
        "christmas"
      );
    } else if (savedEventIds[i] == 5) {
      events.innerHTML += createEventListing(
        5,
        "Sushi and Sashimi Food festival",
        "Saturday, November 18, 2023",
        "Lake Shore Drive, Chicago, IL",
        "$$-$$$",
        "sushi"
      );
    } else if (savedEventIds[i] == 6) {
      events.innerHTML += createEventListing(
        6,
        "Rock Under the Stars Festival",
        "Wednesday, November 15, 2023",
        "LaSalle Street, Chicago, IL",
        "$",
        "rock"
      );
    } else if (savedEventIds[i] == 7) {
      events.innerHTML += createEventListing(
        7,
        "International Food and Art Extravaganza",
        "Saturday, November 20, 2023",
        "Randolph Street, Chicago, IL",
        "$$",
        "foodart"
      );
    } else if (savedEventIds[i] == 8) {
      events.innerHTML += createEventListing(
        8,
        "Winter Wonderland Gala",
        "Saturday, December 10, 2023",
        "Division Street, Chicago, IL",
        "$$$$",
        "wonderland"
      );
    }
  }

  const saveButtons = document.querySelectorAll(".save-button");

  // Initialize the heart icons based on the saved state when the page loads
  saveButtons.forEach((button) => {
    const eventListing = button.closest(".event-listing");
    const eventId = eventListing.getAttribute("data-event-id");
    const heartIcon = button.querySelector(".heart-icon");

    if (savedEventIds.includes(eventId)) {
      // Event is saved; display a full heart
      heartIcon.textContent = "♥";
      eventListing.classList.add("saved");
    } else {
      // Event is not saved; display an empty heart
      heartIcon.textContent = "♡";
      eventListing.classList.remove("saved");
    }

    // Add a click event listener to toggle the saved state
    button.addEventListener("click", () => {
      console.log("click");
      if (!eventListing.classList.contains("saved")) {
        // Event is not saved; save it
        heartIcon.textContent = "♥";
        eventListing.classList.add("saved");
        savedEventIds.push(eventId);
      } else {
        // Event is saved; unsave it
        heartIcon.textContent = "♡";
        eventListing.classList.remove("saved");
        const index = savedEventIds.indexOf(eventId);
        if (index !== -1) {
          savedEventIds.splice(index, 1);
        }
      }

      console.log(savedEventIds);
      localStorage.setItem("savedEventIds", JSON.stringify(savedEventIds));
    });
  });

  const urlParams = new URLSearchParams(window.location.search);
  var category = urlParams.get("category");

  if (category) {
    const eventListings = document.querySelectorAll(".event-listing");
    eventListings.forEach(function (listing) {
      const categories = listing.getAttribute("data-category").split(",");
      if (!categories.includes(category)) {
        listing.style.display = "none";
      }
    });
    category = category.charAt(0).toUpperCase() + category.slice(1);
    document.getElementById("results-header").innerText = category + " events";
  }

  var event = new Event("pageIsReady");

  window.dispatchEvent(event);
});
