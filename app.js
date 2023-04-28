const hiddenElements = document.querySelectorAll(".hidden");
console.log(hiddenElements);

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

hamburger.addEventListener("click", () => {
  stripe1.classList.toggle("open");
  stripe2.classList.toggle("open2");
});
