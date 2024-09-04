$.get("/system/Web/Common/Navbar/Navbar.html", function (data) {
  $("nav").html(data);
});
$.get("/system/Web/Common/Footer/Footer.html", function (data) {
  $("footer").html(data);
});

$.get("/system/Web/Screen/Home/Slide/Slide.html", function (data) {
  $("Slide").html(data);
});
$.get("/system/Web/Screen/Home/Section_1/Section_1.html", function (data) {
  $("Section1").html(data);
});
$.get("/system/Web/Screen/Home/Section_2/Section_2.html", function (data) {
  $("Section2").html(data);
});
$.get("/system/Web/Screen/Home/Section_3/Section_3.html", function (data) {
  $("Section3").html(data);
});
$.get("/system/Web/Screen/Home/Section_4/Section_4.html", function (data) {
  $("Section4").html(data);
});

// SubPage1-1
// $.get(
//   "/Web/Screen/SubPage_1/SubPage_1_1/Section_1/Section_1.html",
//   function (data) {
//     $("Section1").html(data);
//   }
// );

// $.get("/Web/screen/home/Section4/Section4.html", function (data) {
//   $("#Section4").html(data);
// });
// $.get("/Web/screen/home/Section5/Section5.html", function (data) {
//   $("#Section5").html(data);
// });
// $.get("/Web/screen/home/Section6/Section6.html", function (data) {
//   $("#Section6").html(data);
// });
//공통
