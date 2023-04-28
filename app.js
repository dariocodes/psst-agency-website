const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    rootMargin: "-100px 0px -210px 0px",
    threshold: 0,
  }
);

hiddenElements.forEach((section) => observer.observe(section));

const hamburger = document.querySelector(".menu");
const stripe1 = document.querySelector(".stripe1");
const stripe2 = document.querySelector(".stripe2");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");

hamburger.addEventListener("click", () => {
  stripe1.classList.toggle("open");
  stripe2.classList.toggle("open2");
  ul.classList.toggle("openmobile");
  li.forEach((li) => li.classList.toggle("mobile"));
});
