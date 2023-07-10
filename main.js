document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document
  .querySelector("#close-nav-menu")
  .addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

let linksA = document.querySelectorAll("a");
console.log(linksA[4].hash);

linksA.forEach(function (linksfunc) {
  linksfunc.addEventListener("click", function () {
    /*    alert(wrapper.hash); */
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });
});

let greetingText = "";

let currentHour = new Date().getHours();
console.log(currentHour);
if (currentHour < 12){
  greetingText = "Bom dia!";
}else if (currentHour < 19){
  greetingText = "Boa Tarde!";
}else if (currentHour <24 ){
  greetingText = "Boa Noite!";
}else {
  greetingText = "Bem vindo!";

}




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

console.log("fora timeout");
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

let animals = ["dog", "cat", "lion", "fish"];

for (let a = 0; a < animals.length; a++) {
  console.log(animals[a]);
}

for (let a in animals) {
  console.log("animals: " + animals[a]);
}

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

/*    for(let i in galleryImages){
    console.log(galleryImages[i].src);
    console.log(galleryImages[i].alt);
   } */
/*    <img
   src="./assets/gallery/image1.jpg"
   alt="Thumbnail Image 1"
   data-array-index="0"
   data-selected="true"
 /> */
let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery > .thumbnails");
mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

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
    thumbnails.querySelectorAll("img").forEach(function(img){
      img.dataset.selected = false;

    });
    e.target.dataset.selected = true;

    });
  thumbnails.appendChild(thumb);
});
