// Sample product data (replace with actual data from your backend)
const menProducts = [
    { id: 1, name: 'Men Product 1', price: 30, image: '../e comerce/Products/men_product1.jpg' },
    { id: 2, name: 'Men Product 2', price: 40, image: '../e comerce/Products/men_product2.jpg'},
    {id: 3, name: 'Men Product 2', price: 40, image: '../e comerce/Products/men_product2.jpg'},
    {id: 4, name: 'Men Product 2', price: 60, image: '../e comerce/Products/men_product2.jpg'},
    {id: 5, name: 'Men Product 2', price: 70, image: '../e comerce/Products/men_product2.jpg' },
    {id: 6, name: 'Men Product 2', price: 80, image: '../e comerce/Products/men_product2.jpg'},
    {id: 7, name: 'Men Product 2', price: 90, image: '../e comerce/Products/men_product2.jpg'},
    {id: 8, name: 'Men Product 2', price: 20, image: '../e comerce/Products/men_product2.jpg'},
    {id: 9, name: 'Men Product 2', price: 30, image: '../e comerce/Products/men_product2.jpg'},
    {id: 10, name: 'Men Product 2', price: 40, image: '../e comerce/Products/men_product2.jpg'},
    // Add more men's products as needed
];

const womenProducts = [
    { id: 11, name: 'Women Product 1', price: 25, image: '../e comerce/Products/women_product1.jpg' },
    { id: 12, name: 'Women Product 2', price: 35, image: '../e comerce/Products/women_product1.jpg' },
    {id: 13, name: 'Men Product 2', price: 40, image: '../e comerce/Products/ladki01.jpg'},
    {id: 14, name: 'Men Product 2', price: 40, image: '../e comerce/Products/ladki02.jpg'},
    {id: 15, name: 'Men Product 2', price: 40, image: '../e comerce/Products/ladki03.jpg'},
    {id: 16, name: 'Men Product 2', price: 40, image: '../e comerce/Products/ladki06.jpg'},
    {id: 17, name: 'Men Product 2', price: 40, image: '../e comerce/Products/ladki09.jpg'},
    {id: 18, name: 'Men Product 2', price: 40, image: '../e comerce/Products/ladki10.jpg'},
    {id: 19, name: 'Men Product 2', price: 40, image: '../e comerce/Products/ladki01.jpg'},
    {id: 20, name: 'Men Product 2', price: 40, image: '../e comerce/Products/ladki01.jpg'},
    // Add more women's products as needed
];

// Function to display products on the page
function displayProducts(products, sectionId) {
    const section = document.getElementById(sectionId);
    section.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" height=300 width=200>
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="openProductPage(${product.id})">View Details</button>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        section.appendChild(productCard);
    });
}
// smaple code here
function displayProducts(products, sectionId) {
    const section = document.getElementById(sectionId);
    section.innerHTML = '';

    const productGrid = document.createElement('div');
    productGrid.classList.add('product-grid'); // Add a class for styling purposes (optional)

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card'); // Add a class for styling purposes (optional)
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" height=300 width=200>
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="openProductPage(${product.id})">View Details</button>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);

        // Add a line break after every 4th product to create rows
        if ((index + 1) % 4 === 0 || index === products.length - 1) {
            const row = document.createElement('div');
            row.classList.add('product-row'); // Add a class for styling purposes (optional)
            row.appendChild(productGrid.cloneNode(true)); // Clone the product grid
            section.appendChild(row);
            productGrid.innerHTML = ''; // Clear the product grid for the next row
        }
    });
}





// Function to open the product details page
function openProductPage(productId) {
    window.location.href = `product_page.html?id=${productId}`;
}

// Function to add items to the cart
// Sample cart data (replace with actual data from your backend)
const cartItems = [];

// Function to add items to the cart
function addToCart(productId) {
    // Find the selected product from the menProducts or womenProducts array
    const selectedProduct = menProducts.concat(womenProducts).find(product => product.id == productId);

    if (selectedProduct) {
        // Check if the product is already in the cart
        const existingCartItem = cartItems.find(item => item.id === selectedProduct.id);

        if (existingCartItem) {
            // If the product is already in the cart, increment the quantity
            existingCartItem.quantity++;
        } else {
            // If the product is not in the cart, add it with quantity 1
            cartItems.push({
                id: selectedProduct.id,
                name: selectedProduct.name,
                price: selectedProduct.price,
                image: selectedProduct.image,
                quantity: 1,
            });
        }

        // Update the UI to reflect the changes in the cart
        //displayCartItems();
        alert(`${selectedProduct.name} added to the cart!`);
        console.log(cartItems);
    } else {
        console.error('Product not found');
    }
}

// Function to open the cart page
function openCartPage() {
    window.location.href = 'cart.html';
}

// Function to search for products
// Function to search for products
function searchProducts() {
    // Replace this with your actual search logic
    const searchTerm = document.querySelector('.search-bar input').value;
    const foundProduct = menProducts.concat(womenProducts).find(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (foundProduct) {
        // Product found, redirect to the product details page
        window.location.href = `product_page.html?id=${foundProduct.id}`;
    } else {
        // Product not found, redirect to the "searched_item.html" page
        window.location.href = 'searched_item.html';
    }
}


// Initial setup
displayProducts(menProducts, 'men-section');
displayProducts(womenProducts, 'women-section');
