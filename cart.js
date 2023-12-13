// Sample cart data (replace with actual data from your backend)
const cartItems = [
    { id: 1, name: 'Men Product 1', price: 30, image: '../e comerce/Products/men_product1.jpg' },
    {id: 15, name: 'Men Product 2', price: 40, image: '../e comerce/Products/ladki03.jpg'},
];

// Function to display cart items on the page
function displayCartItems() {
    const cartItemsSection = document.getElementById('cart-items');
    cartItemsSection.innerHTML = '';

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartItemsSection.appendChild(cartItem);
    });

    // Calculate and display the total amount
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

// Function to open the checkout page
function openCheckoutPage() {
    window.location.href = 'checkout.html';
}

// Initial setup
displayCartItems();
