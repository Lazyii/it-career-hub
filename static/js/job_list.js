// ==========================================
// DOM READY
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    initDarkMode();

    initSearch();

    initFilter();

    initNotification();

    initCardAnimation();

});


// ==========================================
// DARK MODE
// ==========================================

function initDarkMode() {

    const toggle = document.getElementById("darkModeToggle");

    if (!toggle) return;

    // Khôi phục trạng thái

    if (localStorage.getItem("darkMode") === "true") {

        document.body.classList.add("dark");

        toggle.checked = true;

    }

    toggle.addEventListener("change", function () {

        if (this.checked) {

            document.body.classList.add("dark");

            localStorage.setItem("darkMode", "true");

        } else {

            document.body.classList.remove("dark");

            localStorage.setItem("darkMode", "false");

        }

    });

}


// ==========================================
// SEARCH
// ==========================================

function initSearch() {

    const inputs = document.querySelectorAll(".search-item input");

    inputs.forEach(input => {

        input.addEventListener("keyup", function (e) {

            if (e.key === "Enter") {

                console.log("Search:", this.value);

                // TODO:
                // Django:
                // window.location = `/jobs/?keyword=${this.value}`;

            }

        });

    });

}


// ==========================================
// FILTER
// ==========================================

function initFilter() {

    const selects = document.querySelectorAll(".filter-group select");

    selects.forEach(select => {

        select.addEventListener("change", function () {

            console.log(this.id, this.value);

            // TODO:
            // Django Filter
            // submit form

        });

    });

}


// ==========================================
// NOTIFICATION
// ==========================================

function initNotification() {

    const btn = document.querySelector(".notification-btn");

    if (!btn) return;

    btn.addEventListener("click", function () {

        alert("Hiện chưa có thông báo mới.");

    });

}


// ==========================================
// JOB CARD
// ==========================================

function initCardAnimation() {

    const cards = document.querySelectorAll(".job-card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px)";

        });

        card.addEventListener("click", function () {

            // TODO
            // Django:
            // const slug = this.dataset.slug;
            // window.location.href = "/jobs/" + slug + "/";

            console.log("Open Job Detail");

        });

    });

}


// ==========================================
// HEADER ACTIVE MENU
// ==========================================

const menus = document.querySelectorAll(".navbar a");

menus.forEach(menu => {

    menu.addEventListener("click", function () {

        menus.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==========================================
// HEADER SHADOW
// ==========================================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.05)";

    }

});


// ==========================================
// IMAGE FALLBACK
// ==========================================

document.querySelectorAll(".company-logo img").forEach(img => {

    img.addEventListener("error", function () {

        this.src = "/static/img/company-default.png";

    });

});


// ==========================================
// LOADING EFFECT
// ==========================================

window.addEventListener("load", function () {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = "opacity .4s";


// ==========================================
// DEMO DATA
// ==========================================

console.log("================================");

console.log(" IT Career Hub");

console.log(" Job List Loaded");

console.log(" HTML5 + CSS3 + JavaScript");

console.log(" Ready for Django Backend");

console.log("================================");