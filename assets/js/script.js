"use strict";

// Add eventListener on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// PreLoader
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// Mobile Nav Toggle
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNavbar);

// Header - Active header when window scrolled to 50px
const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50
    ? header.classList.add("active")
    : header.classList.remove("active");
};

window.addEventListener("scroll", activeHeader);

// Opening up user's email client in contact form
function sendEmail(event) {
  event.preventDefault();

  const fullName = document.querySelector(".full-name").value;
  const emailAddress = document.querySelector(".email-address").value;
  const mobileNumber = document.querySelector(".mobile-number").value;
  const emailSubject = document.querySelector(".email-subject").value;
  const emailBody = document.querySelector(".email-body").value;

  // TEST FUNCTIONALITY W MY ADDY
  // the variables customize the mailto link
  const mailtoLink = `mailto:acnewell09@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  window.open(mailtoLink);

  // reset the form & clear its contents after submission
  event.target.reset();
}
