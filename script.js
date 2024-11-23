
const data = [
  { id: 1, image: "images/air.png", name: "Black Nike Air", price: "300£" },
  { id: 2, image: "images/air2.png", name: "Blue Nike Air", price: "300£" },
  { id: 3, image: "images/blazer.png", name: "White Blazer", price: "300£" },
  { id: 4, image: "images/blazer2.png", name: "Green Blazer", price: "300£" },
];


const shoesContainer = document.querySelector('.shoes');
let cart = []; // Array to hold cart items

// Function to display products
function showProduct() {
  shoesContainer.innerHTML = data.map((item) => `
    <div class="shoe">
      <img src="${item.image}" alt="${item.name}">
      <p>${item.name}<br>${item.price}</p>
      <button class="order-btn" onclick="addtoCart(${item.id})">Order</button>
    </div>
  `).join("");
}

// Function to add items to the cart
function addtoCart(productId) {
  const product = data.find(item => item.id === productId); // Find product by ID
  if (product) {
    cart.push(product); // Add product to cart array
    alert(`${product.name} has been added to your cart!`);
    updateCartUI(); // Update cart display
  }
}

// Function to update cart UI
function updateCartUI() {
  const cartContainer = document.querySelector('.table-item');
  console.log(cartContainer)
  if (cartContainer) {
    cartContainer.innerHTML = cart.map(item => ` <tr>
                <td class="image-cont">
                    <img src="${item.image}" alt="">
                    ${item.name}
                </th>
                <td></td>
                <td><input type="number"></td>
                <td>${item.price}</td>
                <td></th>
            </tr>`).join("");
  } else {
    cartContainer.innerHTML = "Your cart is empty"
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  showProduct(); // Display products on page load
});

function toggle() {
  menu.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });
  search.addEventListener('click', () => {
    searchbar.classList.toggle('searchbar-active');
  });
}

toggle();
