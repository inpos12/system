$.get("/Web/Common/Navbar/Navbar.html", function (data) {
  $("nav").html(data);
});
$.get("/Web/Common/Footer/Footer.html", function (data) {
  $("footer").html(data);
});
$.get(
  "/Web/Screen/SubPage_5/SubPage_5_6/Section_1/Section_1.html",
  function (data) {
    $("Section1").html(data);
  }
);
