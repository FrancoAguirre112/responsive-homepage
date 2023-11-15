const MOBILE_MENU = document.querySelector("#mobile-navigation");
const MOBILE_MENU_LINKS = document.querySelector("#mobile-navigation-links");
const MOBILE_MENU_OPEN = document.querySelector("#open-menu");
const MOBILE_MENU_CLOSE = document.querySelector("#close-menu");

const NEWSLETTER = document.querySelector("#newsletter");
const NEWSLETTER_THANK = document.querySelector("#newsletter-thankYou");

const CONTENT = document.querySelectorAll("#content");

// Nav menu functionality

MOBILE_MENU_OPEN.addEventListener("click", () => {
  MOBILE_MENU.classList.remove("h-0");
  MOBILE_MENU.classList.remove("w-0");
  MOBILE_MENU.classList.remove("opacity-0");

  MOBILE_MENU_LINKS.classList.remove("hidden");
  MOBILE_MENU_LINKS.classList.add("flex");

  MOBILE_MENU.classList.add("h-full");
  MOBILE_MENU.classList.add("w-full");
  MOBILE_MENU.classList.add("opacity-100");
});

MOBILE_MENU_CLOSE.addEventListener("click", () => {
  MOBILE_MENU.classList.remove("opacity-100");
  MOBILE_MENU.classList.remove("h-full");
  MOBILE_MENU.classList.remove("w-full");

  MOBILE_MENU_LINKS.classList.add("hidden");
  MOBILE_MENU_LINKS.classList.remove("flex");

  MOBILE_MENU.classList.add("h-0");
  MOBILE_MENU.classList.add("w-0");
  MOBILE_MENU.classList.add("opacity-0");
});

// Newsletter functionality

NEWSLETTER.addEventListener("submit", (event) => {
  event.preventDefault();
  NEWSLETTER.classList.add("hidden");
  NEWSLETTER_THANK.classList.remove("hidden");
  NEWSLETTER_THANK.classList.add("block");
});

// Content entry animations with observer

/* The animateContent function adds and removes the required classes for the animation 
when the target enters the screen and then it stops observing */

const animateContent = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100");
      entry.target.classList.remove("opacity-0");
      observer.unobserve(entry.target);
    }
  });
};

// Create the observer
const contentObserver = new IntersectionObserver(animateContent, {
  root: null,
  threshold: 0.2,
});

// For all the content inside the page observe
CONTENT.forEach((content) => {
  contentObserver.observe(content);
});
