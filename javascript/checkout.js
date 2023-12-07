function loadCart() {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    let totalPrice = 0;

    const cartItems = cart.map((item) => {
        totalPrice += item.amt;
        return `<li><img src="${item.img}" alt="${item.name}" width="70" height="70"> ${item.name} - R${item.amt}
            <button onclick="removeItem(${item.id})">Remove</button>
        </li>`;
    }).join("");

    document.querySelector(".cart-items").innerHTML = cartItems;
    document.getElementById("total-price").textContent = "Total Price: R" + totalPrice.toFixed(2);
}

// Call the function to load the cart items when the page loads
loadCart();

// Clear the cart
function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

// Function to remove an item from the cart
function removeItem(id) {
    const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    loadCart();
}

