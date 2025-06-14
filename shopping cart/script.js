// Sample product data
const products = [
    { id: 1, name: "macbook air", price: 1062.88, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-monthly-installments-202503?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=dmNtNCtodDJvQTBIQ0d3WHg4bUVxMzhEc29tTzFZcVJzWmpnd0dqTS82cUVoeEc1MlQxYXlqK0lIMGZORU9HYllEamZDVFNES0txdDcrN05FQnRVVWRvVzlVOG5Jc3BPRm5PbEpOUlZBcGlZUFhHSnpLZStWWXlKejF1Nlc4Y3E" },
    { id: 2, name: "iphone 16 pro max", price: 1589.01, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone16pro-digitalmat-gallery-2-202409?wid=728&hei=666&fmt=p-jpg&qlt=95&.v=VWJuckJvbkZqeTMwRFJZSHhSVnN1enBhZEVDYXdNalJLdkllSGFmNnBVVDBVMUIwNFV6MXNoZGhsYWgvZGlmdEJnNER5bEtzeFpoMTlNVnpVcXBTR0NDaXNCSFl3ajdkc3ZBMkZreEM2YjFMcENoQkE4dlByUzRnSkp0SGViTnk" },
    { id: 3, name: "airpords pro", price: 291.14, image: "https://www.apple.com/v/airpods-max/i/images/overview/contrast/airpods_max_midnight__ddy8oa1y3y4i_large.png" },
    { id: 4, name: "airtag", price: 169.57, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-single-select-202104?wid=890&hei=890&fmt=jpeg&qlt=90&.v=a2ZqcUtUS1VMaUZQNkl6T3JzY1ZmM2VtMnRWRDBsa0dSNys0czlzRGpsYlhOajVuSnR2cU1UV3JuVjlsci9JdUJkRlpCNVhYU3AwTldRQldlSnpRa09uQUloSkVKVkcwallkSU9VTjVpWVU" },

    { id: 5, name: "apple tv", price: 259.57, image: "https://www.apple.com/v/apple-tv-4k/ak/images/overview/hero/hero_tv_remote__da02803g5doy_large.png" },
    { id: 6, name: "apple watch", price: 259.57, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_IN?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=Yldjd2t3Ymo3YVZBc2hwblI4VFkzcFFVSXZmMGNDb2pYSUxNcWF2eFMwOFJEaFRaZGRBcFFiamlueDhBMTdzMFhHUkcvNmtpMGxDZTE1ejhaNlcyMHk1WEdlYWxPb2YwUU5QWmxFZ2NUUGtwbU95S3AxQlJUMWVvWGozd2lMQjA" },
    { id: 7, name: "apple home pod", price: 259.57, image: "https://www.apple.com/v/homepod/p/images/overview/hero__ernd10zm1dsi_large.jpg" },
];

let cart = [];

// Display products
function displayProducts() {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join("");
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update cart UI
function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const cartCountElement = document.getElementById("cart-count");

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name} (x${item.quantity})</span>
            <span>$${item.price * item.quantity}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join("");

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceElement.textContent = totalPrice;
    cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Initialize the app
displayProducts();