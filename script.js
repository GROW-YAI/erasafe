// Example JavaScript to show a message when the "Get Started" button is clicked
function showMessage() {
    alert(" We'll be excited to talk to you. call on 0249994944.");
}

// Form validation on submit
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("All fields are required.");
        event.preventDefault();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelector('.service-cards');
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        serviceCards.appendChild(clone);
    });

    const totalWidth = cards.length * 2 * (cards[0].offsetWidth + 10); // 10px gap
    serviceCards.style.width = `${totalWidth}px`;
});
