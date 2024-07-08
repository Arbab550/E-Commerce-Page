let cart = []; // Initialize an empty cart array

function showProductDetails(imageSrc, title, price) {
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = `This is a detailed description of the ${title}. It comes in various sizes and colors to fit your style.`;
    document.getElementById('price').innerText = `$${price.toFixed(2)}`;
    document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function addToCart() {
    const title = document.getElementById('modal-title').innerText;
    const price = parseFloat(document.getElementById('price').innerText.substring(1));
    cart.push({ title, price });

    updateCartSidebar();
}

function updateCartSidebar() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerText = `${item.title}: $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = total.toFixed(2);
    cartSidebar.style.display = 'block';
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartSidebar();
    document.getElementById('cart-sidebar').style.display = 'none';
}
