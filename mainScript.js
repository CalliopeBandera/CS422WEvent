const saveButtons = document.querySelectorAll('.save-button');

// Add a click event listener to each button
saveButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the "full-heart" class on the heart icon
        const heartIcon = button.querySelector('.heart-icon');
        if (heartIcon.textContent === '♡') {
            heartIcon.textContent = '♥'; // Full heart character
        } else {
            heartIcon.textContent = '♡'; // Outline heart character
        }
    });
});