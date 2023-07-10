window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let color = document.querySelectorAll(".navbar li a");
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 5) {
    navbar.style.backgroundColor = "white";
    color.forEach((element) => {
      element.style.color = "black";
      navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    });
  } else {
    navbar.style.backgroundColor = "transparent";
    color.forEach((element) => {
      element.style.color = "#black";
    });
  }
});
