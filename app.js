const hiddenElements = document.querySelectorAll(".hidden");
console.log(hiddenElements);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    rootMargin: "-0px 0px -320px 0px",
    threshold: 0,
  }
);

hiddenElements.forEach((section) => observer.observe(section));
