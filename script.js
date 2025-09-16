let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("تمت الإضافة إلى السلة!");
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - JD ${item.price}`;
    cartItems.appendChild(li);
  });

  totalElement.textContent = `الإجمالي: JD ${total}`;
}

function sendToWhatsApp() {
  let message = "مرحبا، بدي أطلب المنتجات التالية:\n";
  cart.forEach((item) => {
    message += `- ${item.name} (${item.price} JD)\n`;
  });

  let phoneNumber = "962776661237"; // رقمك مع كود الأردن
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

window.onload = displayCart;
