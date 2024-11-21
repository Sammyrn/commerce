
/*const data = [
  { id: 1, image: "images/air.png", name: "Black Nike Air", price: "300£" },
  { id: 2, image: "images/air2.png", name: "Blue Nike Air", price: "300£" },
  { id: 3, image: "images/blazer.png", name: "White Blazer", price: "300£" },
  { id: 4, image: "images/blazer2.png", name: "Green Blazer", price: "300£" },
];

    const menu = document.querySelector('.menu-btn');
    const dropdown = document.querySelector('.hamburger');
    const search = document.querySelector('.search');
    const searchbar = document.querySelector('.searchbar');
    const sections = document.querySelectorAll('.section');
    const shoes = document.querySelectorAll('.shoes');
    const order = document.querySelectorAll('.order-btn')
   

function showProduct() {
  shoes.forEach((shoeWrap) => {
    shoeWrap.innerHTML = data.map((item) => `
      <div class="shoe">
        <img src="${item.image}" alt="">
        <p>${item.name}<br>${item.price}</p>
        <button class="order-btn">Order</button>
      </div>
    `).join("");
  });
}

function addtoCart(){

}

  
    function toggle(){
        menu.addEventListener('click', function(){
            dropdown.classList.toggle('active');
            sections.style.display = "none";
        });
        
        search.addEventListener('click', function(){
            searchbar.classList.toggle('searchbar-active');

        });
        
        
    };
    
showProduct();
    toggle();
*/
const data = [
      { id: 1, image: "https://via.placeholder.com/200?text=Black+Nike+Air", name: "Black Nike Air", price: "300£" },
      { id: 2, image: "https://via.placeholder.com/200?text=Blue+Nike+Air", name: "Blue Nike Air", price: "300£" },
      { id: 3, image: "https://via.placeholder.com/200?text=White+Blazer", name: "White Blazer", price: "300£" },
      { id: 4, image: "https://via.placeholder.com/200?text=Green+Blazer", name: "Green Blazer", price: "300£" },
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
      const cartContainer = document.getElementById('cart-items');
      if (cartContainer) {
        cartContainer.innerHTML = cart.map(item => `
          <li>${item.name} - ${item.price}</li>
        `).join("");
      }
    }

    // Initialize page
    document.addEventListener('DOMContentLoaded', () => {
      showProduct(); // Display products on page load
    });
