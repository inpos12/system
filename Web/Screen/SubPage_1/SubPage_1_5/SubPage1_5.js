$.get("/system/Web/Common/Navbar/Navbar.html", function (data) {
  $("nav").html(data);
});
$.get("/system/Web/Common/Footer/Footer.html", function (data) {
  $("footer").html(data);
});
$.get("/system/Web/Common/Comming/Comming.html", function (data) {
  $("Loading").html(data);
});
$.get(
  "/system/Web/Screen/SubPage_1/SubPage_1_5/Section_1/Section_1.html",
  function (data) {
    $("Section1").html(data);
  }
);
