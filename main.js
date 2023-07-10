document.querySelector("#open-nav-menu").addEventListener("click", function () {
  document.querySelector("header nav .wrapper").classList.add("nav-open");
});


document.querySelector("#close-nav-menu").addEventListener("click", function () {
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




const greetingText = 'Bom dia!';
const weatherCondition = 'chuvoso';
const userLocation = 'São Paulo';
let temperature = 27.6;
let celsiusText = `O dia está ${weatherCondition} em ${userLocation} e com temperatura de ${temperature.toFixed(1)} °C.`;
let fahr = (temperature * 9 / 5) + 32;

let fahrText = `O dia está ${weatherCondition} em ${userLocation} e com temperatura de ${fahr.toFixed(1)} Fahr.`;

document.querySelector("#greeting").innerHTML = greetingText;

document.querySelector("#weather").innerHTML = celsiusText;

document.querySelector(".weather-group").addEventListener("click", function (e) {
  if (e.target.id === "celsius") {
    document.querySelector("#weather").innerHTML = celsiusText;
  } else if (e.target.id === "fahr") {
    document.querySelector("#weather").innerHTML = fahrText;
  }
});





console.log("fora timeout");
setInterval(function () {
  let localTime = new Date();
  document.querySelector("span[data-time=hours]").innerHTML = localTime.getHours().toString().padStart(2, '0');
  document.querySelector("span[data-time=minutes]").innerHTML = localTime.getMinutes().toString().padStart(2, '0');
  document.querySelector("span[data-time=seconds]").innerHTML = localTime.getSeconds().toString().padStart(2, '0');
}, 1000)

let animals = ['dog', 'cat', 'lion', 'fish'];

for (let a = 0; a < animals.length; a++) {
  console.log(animals[a]);
}


for (let a in animals) {
  console.log("animals: " + animals[a]);
}

const galleryImages = [
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Thimbail Image 1"
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thimbail Image 2"
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thimbail Image 3"
  },
]

/*    for(let i in galleryImages){
    console.log(galleryImages[i].src);
    console.log(galleryImages[i].alt);
   } */
let mainImage = document.querySelector("#gallery > img");
console.log(mainImage);

galleryImages.forEach(function (image, index) {
  console.log(image);
});


