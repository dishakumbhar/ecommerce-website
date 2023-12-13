// Function to open the checkout page
function openCheckoutPage() {
    window.location.href = 'checkout.html';
}

// Function to display the checkout form
function displayCheckoutForm() {
    const checkoutFormSection = document.getElementById('checkout-form');
    checkoutFormSection.innerHTML = `
        <h2>Checkout</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            
            <label for="contact">Contact Number:</label>
            <input type="tel" id="contact" required>
            
            <label for="email">Email Address:</label>
            <input type="email" id="email" required>
            
            <label for="postal-code">Postal Code:</label>
            <input type="text" id="postal-code" required>
            
            <label for="shipping-address">Shipping Address:</label>
            <textarea id="shipping-address" required></textarea>
            
            <button type="button" onclick="processPayment()">Proceed to Payment</button>
        </form>
    `;
}

// Function to process payment (replace with actual payment processing logic)
function processPayment() {
    // Dummy logic for demonstration purposes
    alert('Payment processed successfully!');
}

// Initial setup
displayCheckoutForm();
