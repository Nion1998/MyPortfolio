let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector("header nav a[href*='" + id + "']")
        .classList.add("active");
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// typed animation
var Typed = new Typed(".text-animation", {
  strings: ["Frontend Developer", "Web Developer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
// scroll up button
let scrollUp = document.querySelector(".scroll-up-btn");

scrollUp.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
  });
});


// Nion
function showPopup(event, element) {
  event.preventDefault();
  
  // Fetch description text
  const description = element.parentNode.querySelector(".description").innerText;
  document.getElementById("popup-text").innerText = description;
  
  // Fetch card's background color and apply it to the popup
  const cardBackgroundColor = getComputedStyle(element.parentNode).backgroundColor;
  document.getElementById("popup").style.backgroundColor = cardBackgroundColor;
  
  // Show and animate the popup
  const popup = document.getElementById("popup");
  popup.classList.add("active");
}

function closePopup() {
  const popup = document.getElementById("popup");
  
  // Add animation before closing
  popup.classList.remove("active");
  
  // Delay hiding for the animation
  setTimeout(() => {
    popup.style.display = "none";
  }, 300);
}

