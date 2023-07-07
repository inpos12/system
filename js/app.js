const nav = document.querySelector("nav");
const section1 = document.querySelector("#section-1");

const navobserver = new IntersectionObserver((entries, observer) => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    nav.classList.add("on-scroll");
  }
}, {});
navobserver.observe(section1);
