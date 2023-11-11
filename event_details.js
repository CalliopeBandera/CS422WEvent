document.addEventListener("DOMContentLoaded", function () {
  loadDetails();

  if (localStorage.getItem("savedEventIds")) {
    savedEventIds = JSON.parse(localStorage.getItem("savedEventIds"));
  } else {
    savedEventIds = [];
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
});

function resetSaved() {
  savedEventIds = [];
  localStorage.setItem("savedEventIds", JSON.stringify(savedEventIds));
  console.log("IDS RESET");
}
function printSaved() {
  localStorage.getItem("savedEventIds");
  console.log(savedEventIds);
}

function loadDetails() {
  var urlParams = new URLSearchParams(window.location.search);
  var id = parseInt(urlParams.get("id"));
  console.log(id);
  var title = "";
  var description = "";
  var date = "";
  var location = "";
  var price = "";
  var image = "";
  switch (id) {
    case 1:
      title = "Cupcake Day Festival";
      description = "Cupcake ipsum dolor sit amet";
      date = "Friday, November 1, 2023";
      location = "Wacker Drive, Chicago, IL";
      price = "free";
      image = "images/cupcakes.jpg";
      break;
    case 2:
      title = "Fulton Market Food Festival";
      description = "Cupcake ipsum dolor sit amet";
      date = "Friday, November 1, 2023";
      location = "Fulton & Morgan St, Chicago, IL";
      price = "free";
      image = "images/fulton.jpg";
      break;
    case 3:
      title = "The Festival of Wood and Barrel Aged Beer";
      description = "Cupcake ipsum dolor sit amet";
      date = "Friday, November 1, 2023";
      location = "Michigan Avenue, Chicago, IL";
      price = "$-$$";
      image = "images/beer.jpg";
      break;
    case 4:
      title = "Christmas Market";
      description = "Cupcake ipsum dolor sit amet";
      date = "Friday, November 10, 2023";
      location = "State Street, Chicago, IL";
      price = "$";
      image = "images/christmas.jpg";
      break;
    case 5:
      title = "Sushi and Sashimi Food festival";
      description = "Cupcake ipsum dolor sit amet";
      date = "Saturday, November 18, 2023";
      location = "Lake Shore Drive, Chicago, IL";
      price = "$$-$$$";
      image = "images/sushi.jpg";
      break;
    case 6:
      title = "Rock Under the Stars Festival";
      description = "Cupcake ipsum dolor sit amet";
      date = "Wednesday, November 15, 2023";
      location = "LaSalle Street, Chicago, IL";
      price = "$";
      image = "images/rock.jpg";
      break;
    case 7:
      title = "International Food and Art Extravaganza";
      description = "Cupcake ipsum dolor sit amet";
      date = "Saturday, November 20, 2023";
      location = "Randolph Street, Chicago, IL";
      price = "$$";
      image = "images/foodart.jpg";
      break;
    default:
      console.log("No event found");
      break;
  }

  // Create main div
  var mainDiv = document.createElement("div");
  mainDiv.className = "event-listing pl-4 event-details";
  mainDiv.id = id;
  mainDiv.setAttribute("data-event-id", mainDiv.id);

  // Create h2
  var h2 = document.createElement("h2");
  h2.id = "eventName";
  h2.textContent = title;
  mainDiv.appendChild(h2);

  // Create img
  var imgDiv = document.createElement("div");
  imgDiv.className = "event-image event-image-details";
  var img = document.createElement("img");
  img.id = "eventImage";
  img.src = image;
  imgDiv.appendChild(img);
  mainDiv.appendChild(imgDiv);

  // Create button
  var button = document.createElement("button");
  button.className = "save-button";
  var span = document.createElement("span");
  span.className = "heart-icon";
  if (localStorage.getItem("savedEventIds")) {
    savedEventIds = JSON.parse(localStorage.getItem("savedEventIds"));
  }
  if (savedEventIds.includes(mainDiv.id)) {
    span.textContent = "♥";
  } else {
    span.textContent = "♡";
  }
  button.appendChild(span);
  mainDiv.appendChild(button);

  // Create p
  var p = document.createElement("p");
  p.id = "eventDescription";
  p.innerHTML =
    "Description: " +
    description +
    "<br>" +
    "Date: " +
    date +
    "<br>" +
    "Location: " +
    location +
    "<br>" +
    "Price: " +
    price;
  document.body.appendChild(p);

  // Append mainDiv to body or any other parent element
  mainContainer = document.getElementById("event-place");
  mainContainer.appendChild(mainDiv);
}
