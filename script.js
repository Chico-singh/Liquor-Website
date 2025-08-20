// Add to Cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

// Display Cart
if (document.getElementById("cart-items")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-items");
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>Your cart is empty!</p>";
  } else {
    cart.forEach((item, index) => {
      total += item.price;
      container.innerHTML += `
        <div class="bottle">
          <h3>${item.name}</h3>
          <div class="price">₹${item.price}</div>
          <button onclick="removeFromCart(${index})">Remove</button>
        </div>
      `;
    });
    document.getElementById("total").innerText = "Total: ₹" + total;
  }
}

// Remove Item
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
