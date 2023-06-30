document.querySelector("#open-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
  });


document.querySelector("#close-nav-menu").addEventListener("click", function() {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
  });

  let linksA = document.querySelectorAll("a");
  console.log(linksA[4].hash);

  linksA.forEach(function(linksfunc) {
    linksfunc.addEventListener("click", function() {
   /*    alert(wrapper.hash); */
      document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
  });

  