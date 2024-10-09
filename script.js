
const data = [
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