$.get("/Web/Common/Navbar/Navbar.html", function (data) {
  $("nav").html(data);
});
$.get("/Web/Common/Footer/Footer.html", function (data) {
  $("footer").html(data);
});

$.get("/Web/Common/Header/Header.html", function (data) {
  $("header").html(data);
});
$.get(
  "/Web/Screen/SubPage_1/SubPage_1_3/Section_1/Section_1.html",
  function (data) {
    $("Section1").html(data);
  }
);
$.get(
  "/Web/Screen/SubPage_1/SubPage_1_3/Section_2/Section_2.html",
  function (data) {
    $("Section2").html(data);
  }
);
$.get(
  "/Web/Screen/SubPage_1/SubPage_1_3/Section_3/Section_3.html",
  function (data) {
    $("Section3").html(data);
  }
);
