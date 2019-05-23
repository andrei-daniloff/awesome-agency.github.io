document.addEventListener("DOMContentLoaded", function() {
  const burgerWrapper = document.querySelector(".burger-wrapper");
  const burger = document.querySelectorAll(".burger");
  const mobileNav = document.querySelector(".mobile-nav");
  let toggle = false;
  burgerWrapper.addEventListener("click", function() {
    if (!toggle) {
      toggle = true;
      mobileNav.style.background = "black";
      mobileNav.style.right = "0%";
      burgerWrapper.classList.remove("initial-rotate");
      burgerWrapper.style.marginLeft = "15px";
      burgerWrapper.classList.add("rotate");
      burger[0].classList.add("first");
      burger[1].classList.add("opacity-margin");
      burger[2].classList.add("second");
    } else {
      toggle = false;
      mobileNav.style.background = "transparent";
      mobileNav.style.right = "-70%";
      burgerWrapper.style.marginLeft = "-72px";
      burgerWrapper.classList.add("initial-rotate");
      burgerWrapper.classList.remove("rotate");
      burger[0].classList.remove("first");
      burger[1].classList.remove("opacity-margin");
      burger[2].classList.remove("second");
    }
  });
});
