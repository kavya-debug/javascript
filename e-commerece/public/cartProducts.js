

let cartItems =JSON.parse(localStorage.getItem("cart")) || [];

const badgeCount = document.querySelector(".badge-number");
badgeCount.innerHTML = cartItems.length;

const cartData = document.getElementById("cartData");
cartData.classList.add('d-flex');
loadaProducts(cartItems);
function loadaProducts(cartItems){
    cartData.innerHTML = "";
    for (let product of cartItems) {

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
        button.innerHTML = `Remove`;
   
        const img = document.createElement("img");
        img.setAttribute("src", "/assets/cart-white.png");
        button.appendChild(img);
   
        ctabtn.appendChild(button);
        cardDetails.appendChild(ctabtn);
   
        card.appendChild(cardImageContainer);
        card.appendChild(cardDetails);
   
        cartData.appendChild(card);
   }
   
}


cartData.addEventListener("click",(e)=>{

    cartItems = cartItems.filter(item => item._id != e.target.id);
    localStorage.setItem("cart",JSON.stringify(cartItems));
    badgeCount.innerHTML = cartItems.length;
    loadaProducts(cartItems);

});

