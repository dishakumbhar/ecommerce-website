// Sample product details data (replace with actual data from your backend)
const productDetails = {
    id: 1,
    name: 'Men Product 1',
    price: 30,
    image: '../e comerce/Products/ladki03.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ex vel nunc lobortis mattis vel et ex.',
};

// Function to display product details on the page
function displayProductDetails() {
    const productDetailsSection = document.getElementById('product-details');
    productDetailsSection.innerHTML = `
        <h2>${productDetails.name}</h2>
        <img src="${productDetails.image}" alt="${productDetails.name}">
        <p>Description: ${productDetails.description}</p>
        <p>Price: $${productDetails.price}</p>
        <label for="size">Size:</label>
        <select id="size">
            ${generateSizeOptions(productDetails.sizes)}
        </select>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" min="1" value="1">
        <button onclick="addToCart(${productDetails.id})">Add to Cart</button>
    `;
}

// Function to generate size options
function generateSizeOptions(sizes) {
    return sizes.map(size => `<option value="${size}">${size}</option>`).join('');
}

// Function to add items to the cart
const cartItems = []
function addToCart(productId) {
    const selectedSize = document.getElementById('size').value;
    const selectedQuantity = document.getElementById('quantity').value;

    cartItems.push({
        id: productDetails.id,
        name: productDetails.name,
        price: productDetails.price,
        image: productDetails.image,
        size: selectedSize,
        quantity: parseInt(selectedQuantity, 10),
    });

    alert(`${productDetails.name} added to the cart!`);

    // Logic to add the selected product with size and quantity to the shopping cart
    // Update the UI to reflect the changes in the cart
    // Calculate and update the total price
}

// Initial setup
displayProductDetails();
