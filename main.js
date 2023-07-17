function menuHandler() {
  document.querySelector("#open-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
  });

  document
    .querySelector("#close-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });

  var linksA = document.querySelectorAll("a");

  linksA.forEach(function (linksfunc) {
    linksfunc.addEventListener("click", function () {
      /*    alert(wrapper.hash); */
      document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
  });
}
let greetingText = "";
function dateAtt() {
  let currentHour = new Date().getHours();
  if (currentHour < 12) {
    greetingText = "Bom dia!";
  } else if (currentHour < 19) {
    greetingText = "Boa Tarde!";
  } else if (currentHour < 24) {
    greetingText = "Boa Noite!";
  } else {
    greetingText = "Bem vindo!";

  }
  //data
  setInterval(function () {
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").innerHTML = localTime
      .getHours()
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=minutes]").innerHTML = localTime
      .getMinutes()
      .toString()
      .padStart(2, "0");
    document.querySelector("span[data-time=seconds]").innerHTML = localTime
      .getSeconds()
      .toString()
      .padStart(2, "0");
  }, 1000);

}
function temperatureDisplay() {
  const weatherCondition = "chuvoso";
  const userLocation = "São Paulo";
  let temperature = 27.6;
  let celsiusText = `O dia está ${weatherCondition} em ${userLocation} e com temperatura de ${temperature.toFixed(
    1
  )} °C.`;
  let fahr = (temperature * 9) / 5 + 32;

  let fahrText = `O dia está ${weatherCondition} em ${userLocation} e com temperatura de ${fahr.toFixed(
    1
  )} Fahr.`;

  document.querySelector("#greeting").innerHTML = greetingText;

  document.querySelector("#weather").innerHTML = celsiusText;

  document
    .querySelector(".weather-group")
    .addEventListener("click", function (e) {
      if (e.target.id === "celsius") {
        document.querySelector("#weather").innerHTML = celsiusText;
      } else if (e.target.id === "fahr") {
        document.querySelector("#weather").innerHTML = fahrText;
      }
    });
}
//gallery
const galleryImages = [
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thimbail Image 3",
  },
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Thimbail Image 1",
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thimbail Image 2",
  },

];
const products = [
  {
    title: 'AstroFiction',
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png",
  },
  {
    title: 'Space Odissey',
    author: "Marie Anne",
    price: 35,
    image: "./assets/products/img1.png",
  },
  {
    title: 'Doomed City',
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png",
  },
  {
    title: 'Black Dog',
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png",
  },
  {
    title: 'My Little Robot',
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png",
  },
  {
    title: 'Garden Girl',
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png",
  },
]
function thumbnailDisplay() {
  let mainImage = document.querySelector("#gallery > img");
  let thumbnails = document.querySelector("#gallery > .thumbnails");
  mainImage.src = galleryImages[0].src;
  mainImage.alt = galleryImages[0].alt;

  //selecionar gallery images
  galleryImages.forEach(function (image, index) {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false;
    thumb.addEventListener("click", function (e) {
      let selectIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImages[selectIndex];
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;
      thumbnails.querySelectorAll("img").forEach(function (img) {
        img.dataset.selected = false;

      });
      e.target.dataset.selected = true;

    });
    thumbnails.appendChild(thumb);
  });
}


function populateProducts(productList){
  
  let productsSection = document.querySelector(".products-area");
  productsSection.textContent = "";
  productList.forEach(function (product, index) {
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");
    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = "Image for product " + product.title;

    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    
    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;
  
    let priceTitle = document.createElement("p");
    priceTitle.classList.add("price-title");
    priceTitle.textContent = "Preço";

    let productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = product.price > 0 ? "R$ "+product.price.toFixed(2) : "Grátis";


    productDetails.appendChild(productTitle);
    productDetails.appendChild(productAuthor);
    productDetails.appendChild(priceTitle);
    productDetails.appendChild(productPrice);

    productElm.append(productImage);

    productElm.append(productDetails);
    
    productsSection.append(productElm);
  });
}




function productsHandler() {
let freeProducts = products.filter(function(item){
  return !item.price || item.price <= 0;
});

let paidProducts = products.filter(function(item){
  return item.price > 0;
});
console.log("free", freeProducts)
console.log("paid", paidProducts)

populateProducts(products);

let productsFilter = document.querySelector('.products-filter');
productsFilter.addEventListener("click", function(e){
if (e.target.id == 'all'){
  populateProducts(products);
}else if(e.target.id == 'paid'){
  populateProducts(paidProducts);
}else if (e.target.id == 'free'){
  populateProducts(freeProducts);

}
});
document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;
};

function footerHandler(){
  let ano = new Date().getFullYear();
document.querySelector("footer").textContent = `® ${ano}- Todos diretiso reservados`;
}
//page load
menuHandler();
dateAtt();
productsHandler();
temperatureDisplay();
thumbnailDisplay();
footerHandler();
//products section
/* <div class="product-item">
<img src="./assets/products/img6.png" alt="AstroFiction" />
<div class="product-details">
  <h3 class="product-title">AstroFiction</h3>
  <p class="product-author">John Doe</p>
  <p class="price-title">PREÇO</p>
  <p class="product-price">R$ 49.90</p>
</div>
</div> */