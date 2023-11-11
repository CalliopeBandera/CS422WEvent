const events = [
    {
        id: 1,
        name: "Cupcake Day Festival",
        description: "Indulge your sweet tooth at the Cupcake Day Festival – a delectable celebration of all things cupcake! Join us for a day filled with irresistible flavors, creative designs, and sweet surprises. Talented bakers will showcase their culinary artistry, offering a delightful array of cupcakes to satisfy every craving. From classic favorites to innovative creations, immerse yourself in a world of confectionery delights. Bring your family and friends to experience a day of cupcake bliss, featuring tastings, competitions, and a feast for the eyes. Don't miss out on the sugar-filled fun at the Cupcake Day Festival – where happiness is baked in every bite!",
        date: "Friday, November 1, 2023",
        location: " Wacker Drive, Chicago, IL",
        cost: "free",
        image: "images/mimosa-cupcakes-horizontal-2-1550946959.png"
    },
    {
        id: 2,
        name: "Fulton Market Food Festival",
        description: "Indulge your senses at the Fulton Market Food Festival – a culinary celebration in the heart of flavor! Join us for a delectable journey through a diverse array of food experiences, featuring the best local and international cuisines. From gourmet bites to street food delights, experience the vibrant tapestry of flavors that Fulton Market has to offer. Immerse yourself in a foodie's paradise, where chefs showcase their culinary prowess, and vendors tempt you with mouthwatering treats. Join us for a gastronomic adventure that transforms Fulton Market into a hub of taste and discovery. Don't miss the chance to savor the extraordinary at the Fulton Market Food Festival!",
        date: "Friday, November 1, 2023",
        location: "Fulton & Morgan St, Chicago, IL",
        cost: "free",
        image: "images/wide_lrg_fulton-market-district-mary-ellen-bleeden-01.jpg"
    },
    {
        id: 3,
        name: "The Festival of Wood and Barrel Aged Beer",
        description: "Welcome to the Festival of Wood and Barrel Aged Beer – where craftsmanship meets flavor in a symphony of barrel-aged perfection! Immerse yourself in the rich world of brewer's artistry as top-notch breweries showcase their finest creations, aged to perfection in wooden barrels. From robust stouts to complex ales, savor the depth and complexity that only time and barrels can impart. Join fellow beer enthusiasts for an unparalleled tasting experience, surrounded by the warmth of oak and the aroma of exceptional brews. Don't miss the chance to be part of this celebration of aged excellence – a festival where beer becomes a masterpiece! Cheers to the Festival of Wood and Barrel Aged Beer!2",
        date: "Friday, November 1, 2023",
        location: "Michigan Avenue, Chicago, IL",
        cost: " $-$$",
        image: "images/DEBC Play Date Bottle with Glass Horizontal.jpg"
    },
    {
        id: 4,
        name: "Christmas Market",
        description: "Step into the enchanting world of our Christmas Market, where festive magic comes to life! Immerse yourself in the holiday spirit as twinkling lights, joyful melodies, and the aroma of seasonal treats fill the air. Explore a winter wonderland of handcrafted gifts, artisanal delights, and holiday decorations, perfect for creating cherished memories with loved ones. Join us in celebrating the joy of the season with a merry mix of shopping, entertainment, and delightful surprises for the whole family. Experience the warmth of the holidays at our Christmas Market – your one-stop destination for festive cheer and yuletide delights!",
        date: "Friday, November 10, 2023",
        location: "State Street, Chicago, IL",
        cost: "$",
        image: "images/mercadillo_plaza_mayor_2019.jpg"
    },
    {
        id: 5,
        name: "Sushi and Sashimi Food festival",
        description: "Dive into the exquisite world of sushi and sashimi at our sensational Food Festival! Indulge your taste buds in a celebration of Japanese culinary mastery, where expert chefs will craft the finest sushi and sashimi creations. Immerse yourself in a feast of flavors, textures, and artful presentations that showcase the essence of this iconic cuisine. Join us for a delectable experience that promises to transport you to the heart of Japan, where every bite is a culinary masterpiece. Get ready to savor the freshness and precision of sushi and sashimi like never before – an unforgettable journey for food enthusiasts and sushi lovers alike!",
        date: "Saturday, November 18, 2023",
        location: "Lake Shore Drive, Chicago, IL",
        cost: "$$-$$$",
        image: "images/sushi wide.jpg"
    },
    {
        id: 6,
        name: "International Food and Art Extravaganza",
        description: "Indulge your senses at the International Food and Art Extravaganza! Join us for a global celebration of culinary delights and artistic wonders from around the world. Immerse yourself in a fusion of flavors as renowned chefs showcase their international culinary expertise, complemented by a vibrant display of artistry from diverse cultures. This extraordinary event promises a feast for the palate and the eyes, where food and art converge to create an unforgettable experience. Don't miss the chance to savor the world on your plate and appreciate the beauty that transcends borders. Join us for a gastronomic and artistic journey like no other!",
        date: "Saturday, November 20, 2023",
        location: "Randolph Street, Chicago, IL",
        cost: "$$",
        image: "images/festival.jpg"
    },
    {
        id: 7,
        name: "Winter Wonderland Gala",
        description: "Embark on a magical evening at our Winter Wonderland Gala! Join us in a spectacular celebration where the enchantment of winter comes to life. Amidst glistening decor and the soft glow of twinkling lights, indulge in an elegant night of festivities. Savor exquisite cuisine, dance under the stars, and revel in the joy of the season with live entertainment. This Gala promises an unforgettable winter wonderland experience, creating cherished memories and festive moments. Embrace the magic at our Winter Wonderland Gala – where elegance meets the enchantment of the season.",
        date: "Saturday, December 10, 2023",
        location: "Division Street, Chicago, IL",
        cost: "$$$$",
        image: "images/wonderland.jpg"
    },
    {
        id: 8,
        name: "Rock Under the Stars Festival",
        description: "Get ready to rock the night away at the Rock Under the Stars Festival! Join us for an electrifying experience as top-notch bands take the stage under a canopy of twinkling stars. Immerse yourself in the pulsating rhythm, feel the energy of live performances, and let the music ignite your soul. Whether you're a hardcore fan or a casual listener, this festival promises a night of unforgettable melodies, vibrant atmosphere, and a celebration of the power of rock. Join us for an epic night of music and camaraderie at the Rock Under the Stars Festival – where the stars align for a rockin' good time!",
        date: "Wednesday, November 15, 2023",
        location: "LaSalle Street, Chicago, IL",
        cost: "$",
        image: "images/rock.jpg"
    },
        
];

    
function showEventDetails(eventId) {
    const event = events.find(e => e.id === eventId);

    if (event) {
        document.getElementById("eventImage").src = event.image;
        document.getElementById("eventName").innerText = event.name;
        document.getElementById("eventDescription").innerText = event.description;
        document.getElementById("eventDate").innerText = event.date;
        document.getElementById("eventLocation").innerText = event.location;
        document.getElementById("eventCost").innerText = event.cost;
    } else {
        alert("Event not found!");
    }
}

function redirectToEventDetails(eventId) {
    //const eventId = eventElement.getAttribute("data-event-id");
    window.location.href = `Event_details.html?eventId=${eventId}`;
  } 