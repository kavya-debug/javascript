{/* <div class="card card-vertical d-flex direction-column relative shadow">
<div class="card-image-container">
     <img class="card-image" src="/assets/shoes.jpg" alt="shoes">
</div>
<div class="card-details">
     <div class="card-title">Premium Collection</div>

     <div class="card-description">
          <p class="card-des">Men Sneakers</p>
          <p class="card-price">
             Rs. 1750
                <span class="price-strike-through">Rs. 2499</span>
             <span class="discount">(30% OFF)</span>
          </p>
     </div>
     
     <div class="cta-btn">
          <button class="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
          <img src="/assets/cart-white.png" alt="cart"> 
            Add To Cart
          </button>
     </div>
</div>
</div> */}


import { products } from './db/products.js';
const cartData = document.getElementById("cartData");
cartData.classList.add('d-flex');
for (let product of products) {

     const card = document.createElement('div');
     card.classList.add('card', 'card-vertical', 'd-flex', 'direction-column', 'relative', 'shadow');

     const cardImageContainer = document.createElement('div');
     card.classList.add('card-image-container');

     const image = document.createElement('img');
     image.classList.add('card-image');
     image.setAttribute("src", product.img);


     cardImageContainer.appendChild(image);


     const cardDetails = document.createElement('div');
     cardDetails.classList.add('card-details');

     const cardtitle = document.createElement('div');
     cardtitle.classList.add('card-title');
     cardtitle.innerHTML = product.brand;

     cardDetails.appendChild(cardtitle);


     const carddescription = document.createElement('div');
     carddescription.classList.add('card-description');

     const carddes = document.createElement('p');
     carddes.classList.add('card-des');
     carddes.innerHTML = product.name;
     carddescription.appendChild(carddes);


     const cardprice = document.createElement("p");
     cardprice.classList.add("card-price", "d-flex", "align-end", "gap-sm");
     cardprice.innerHTML = product.newPrice;
     carddescription.appendChild(cardprice);

     // <span class="price-strike-through">Rs. 2499</span>
     // <span class="discount">(30% OFF)</span>

     const priceStrike = document.createElement("span");
     priceStrike.classList.add("price-strike-through");
     priceStrike.innerHTML = `Rs. ${product.oldPrice}`;
     cardprice.appendChild(priceStrike);

     const discount = document.createElement("span");
     discount.classList.add("discount");
     discount.innerHTML = `(${product.discount}% OFF)`;
     cardprice.appendChild(discount);


     cardDetails.appendChild(carddescription);


     /** Rating Container */
     const ratings = document.createElement("p");
     ratings.classList.add("d-flex", "align-center");

     const rating = document.createElement("span");
     rating.innerText = product.rating;
     ratings.appendChild(rating);

     const star = document.createElement("span");
     star.classList.add("material-icons-outlined", "star");
     star.innerText = "star";
     ratings.appendChild(star);

     carddescription.appendChild(ratings);

     const ctabtn = document.createElement("div");
     ctabtn.classList.add("cta-btn");

     const button = document.createElement("button");
     button.classList.add("button", "btn-primary", "btn-icon", "cart-btn", "d-flex", "align-center", "justify-center", "gap", "cursor", "btn-margin");
     button.setAttribute("id", product._id);
     button.innerHTML = `Add To Cart`;

     // const img = document.createElement("img");
     // <span class="nav-icon material-icons-outlined">
     // shopping_cart
     // </span>

     const shoping = document.createElement("span");
     shoping.classList.add("nav-icon","material-icons-outlined");
     shoping.innerText = "shopping_cart";
     button.appendChild(shoping);

     // img.setAttribute("src", "/assets/cart-white.png");
     // button.appendChild(img);

     ctabtn.appendChild(button);
     cardDetails.appendChild(ctabtn);

     card.appendChild(cardImageContainer);
     card.appendChild(cardDetails);

     cartData.appendChild(card);
}

let cart = [];
const badgeNumber = document.querySelector(".badge-number");
 cart = JSON.parse(localStorage.getItem("cart")) || [];
 badgeNumber.innerHTML = cart.length;
function findItemIsinCart(id) {
   
     return cart.some(item => item._id === id);
}


cartData.addEventListener("click", (e) => {

     const isItemExistIncart = findItemIsinCart(e.target.id);
     console.log(isItemExistIncart);
     const button = document.getElementById(e.target.id);

     if (!isItemExistIncart) {
          let cartItem = products.filter(item => item._id === e.target.id);
          console.log(cartItem)
       
          cart = [...cart, ...cartItem];
          console.log(cart);
          badgeNumber.innerHTML = cart.length;
          localStorage.setItem("cart", JSON.stringify(cart));
        
          button.innerHTML = "Go to cart";
     } else {
          location.href = "http://localhost:3001/cartProduct.html";
     }
})