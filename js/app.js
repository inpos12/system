window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let color = document.querySelectorAll(".navbar li a");
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 5) {
    navbar.style.backgroundColor = "white";
    color.forEach((element) => {
      element.style.color = "black";
    });
  } else {
    navbar.style.backgroundColor = "transparent";
    color.forEach((element) => {
      element.style.color = "#black";
    });
  }
});
