// Pathname titles for each page
const PATHNAME_TITLES = {
    "/": "Välkommen",
    "/index.html": "Välkommen",
    "/book.html": "Boka",
    "/find.html": "Hitta",
    "/activities.html": "Aktiviteter",
};

const getPathnameTitle = (pathname) =>
    PATHNAME_TITLES[pathname] || "Okänd sida";

// Get the current URL path (e.g., "/index.html")
const currentPath = window.location.pathname;

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Select all links in the nav
const navLinks = document.querySelectorAll('.navbar-link');

// Mobile current page header
const mobileCurrentPageHeader = document.getElementById('mobile-current-page-header');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the menu and the hamburger icon
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {    
    // Close menu when a link is clicked
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });

    // If the link's href matches the current path
    if (link.getAttribute('href') === currentPath || link.href === window.location.href) {
        link.setAttribute("aria-current", "page");
        // Set mobile current page header
        mobileCurrentPageHeader.innerText = getPathnameTitle(currentPath);
    }
});
