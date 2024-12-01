// Navigate to the booking page for a specific movie
function bookTickets(movieId) {
    window.location.href = `${movieId}.html`;
}

// Function to handle time slot selection and redirect to the seat selection page
function selectSlot(slot) {
    console.log(`Slot selected: ${slot}`);
    window.location.href = "select-seat.html";
}

// Handle seat selection
function selectSeat(seat) {
    if (!seat.classList.contains('booked')) {
        seat.classList.toggle('selected');
        console.log(`Seat ${seat.textContent} selected`);
    }
}

// Proceed to payment
function proceedToPayment() {
    console.log("Proceeding to payment...");
    window.location.href = "payment.html";
}

// Submit payment form
document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    const successMessage = document.getElementById('success-message');

    if (paymentForm) {
        paymentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            successMessage.style.display = 'block';

            paymentForm.style.display = 'none';

            console.log("Payment information submitted.");
        });
    }
});