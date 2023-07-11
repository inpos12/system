// window.addEventListener("scroll", function () {
//   let navbar = document.querySelector(".navbar");
//   let color = document.querySelectorAll(".navbar li a");
//   let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

//   if (scrollTop > 5) {
//     navbar.style.backgroundColor = "white";
//     color.forEach((element) => {
//       element.style.color = "black";
//       navbar.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
//     });
//   } else {
//     navbar.style.backgroundColor = "transparent";
//     color.forEach((element) => {
//       element.style.color = "#black";
//     });
//   }
// });

// 네비게이션바 스크롤감지끝
// 드롭다운 메뉴 나타나기 시작
let dropdown = document.getElementById("dropdown");
let navbarPC = document.getElementById("navbarSupportedContent");
// let navbarPC = document.querySelector(".navbar-nav");
dropdown.style.display = "none";

navbarPC.addEventListener("mouseover", function () {
  dropdown.style.display = "block";
});

navbarPC.addEventListener("mouseout", function () {
  dropdown.style.display = "none";
});

dropdown.addEventListener("mouseover", function () {
  dropdown.style.display = "block";
});

dropdown.addEventListener("mouseout", function () {
  dropdown.style.display = "none";
});
