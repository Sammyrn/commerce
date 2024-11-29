const products = [
  { id: 1, image: "images/air.png", name: "Black Nike Air", price: 300 },
  { id: 2, image: "images/air2.png", name: "Blue Nike Air", price: 300 },
  { id: 3, image: "images/blazer.png", name: "White Blazer", price: 300 },
  { id: 4, image: "images/blazer2.png", name: "Green Blazer", price: 300 },
];

const shoesContainer = document.querySelector('.shoes');
const cartBtn = document.querySelector('.cart-btn');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');
const cartContainer = document.querySelector('.cart');
const totalElement = document.getElementById('total');
const countElement = document.querySelector('.cart-btn .count');
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

  
  });
});



let cart = [];

// Display products
function displayProducts() {
  shoesContainer.innerHTML = products.map(product => `
      <div class="shoe">
          <img src="${product.image}" alt="${product.name}">
          <p>${product.name}<br>£${product.price}</p>
          <button class="order-btn" onclick="addToCart(${product.id})">Order</button>
      </div>
  `).join('');
}

// Add to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (product) {
      cart.push(product);
      updateCart();
  }
}

// Remove from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Update cart
function updateCart() {
  
  if(cart.length > 0) {
    cartContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="name">${item.name}</div>
            <div class="price">£${item.price}</div>
            <button onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = `£${total}`;
    countElement.textContent = cart.length;
  } else{
    cartContainer.innerHTML = "<p>Your Cart is empty!</p>";
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.textContent = `£${total}`;
    countElement.textContent = cart.length;
  }
}

// Toggle sidebar
cartBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
close.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});


// Initialize
displayProducts();
