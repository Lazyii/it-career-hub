/* ==========================================
            HOME.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
            PROFILE DROPDOWN
    ====================================== */

    const profileBtn = document.getElementById("profileBtn");
    const profileMenu = document.getElementById("profileMenu");

    if (profileBtn && profileMenu) {

        profileBtn.addEventListener("click", (e) => {

            e.stopPropagation();

            profileMenu.classList.toggle("active");

        });

        document.addEventListener("click", (e) => {

            if (!profileMenu.contains(e.target)) {

                profileMenu.classList.remove("active");

            }

        });

    }

    /* =====================================
            STICKY HEADER
    ====================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

            header.style.background = "#ffffff";

        } else {

            header.style.boxShadow = "0 2px 8px rgba(0,0,0,.05)";

        }

    });

    /* =====================================
            BACK TO TOP
    ====================================== */

    const backBtn = document.getElementById("backToTop");

    if (backBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                backBtn.classList.add("show");

            } else {

                backBtn.classList.remove("show");

            }

        });

        backBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* =====================================
        SEARCH SUGGESTION
    ====================================== */

    const keywordInput = document.getElementById("keywordInput");

    const suggestionButtons = document.querySelectorAll(".suggestion-item");

    suggestionButtons.forEach(button => {

        button.addEventListener("click", () => {

            if (keywordInput) {

                keywordInput.value = button.innerText;

                keywordInput.focus();

            }

        });

    });

});

/* ==========================================
        BOOKMARK BUTTON
========================================== */

const bookmarkButtons = document.querySelectorAll(".bookmark-btn");

bookmarkButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const icon = this.querySelector("i");

        if (icon.classList.contains("fa-regular")) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            this.style.background = "#2563eb";
            this.style.color = "#ffffff";

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            this.style.background = "";
            this.style.color = "";

        }

    });

});

/* ==========================================
        NOTIFICATION
========================================== */

const notificationBtn = document.getElementById("notificationBtn");

if (notificationBtn) {

    notificationBtn.addEventListener("click", () => {

        const dot = notificationBtn.querySelector(".notify-dot");

        if (dot) {

            dot.style.display = "none";

        }

        alert("Bạn hiện không có thông báo mới.");

    });

}

/* ==========================================
        ACTIVE NAVIGATION
========================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

/* ==========================================
        SEARCH VALIDATION
========================================== */

const searchForm = document.querySelector(".search-form");

if (searchForm) {

    searchForm.addEventListener("submit", function (e) {

        const keyword = document
            .getElementById("keywordInput")
            .value
            .trim();

        if (keyword.length === 0) {

            e.preventDefault();

            alert("Vui lòng nhập công việc cần tìm.");

        }

    });

}

/* ==========================================
        APPLY BUTTON
========================================== */

const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach((button) => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        this.innerHTML = "Đã ứng tuyển";

        this.style.background = "#10b981";

        this.style.pointerEvents = "none";

    });

});

/* ==========================================
        REVIEW SLIDER
========================================== */

const reviewSlider = document.querySelector(".review-slider");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

if (reviewSlider && prevBtn && nextBtn) {

    nextBtn.addEventListener("click", () => {

        reviewSlider.scrollBy({

            left: 380,

            behavior: "smooth"

        });

    });

    prevBtn.addEventListener("click", () => {

        reviewSlider.scrollBy({

            left: -380,

            behavior: "smooth"

        });

    });

}

/* ==========================================
        SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

    ".job-card, .company-card, .category-card, .career-card, .review-card"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach((item) => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = ".6s ease";

    observer.observe(item);

});

/* ==========================================
        NUMBER COUNTER
========================================== */

const counters = document.querySelectorAll("[data-counter]");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.dataset.counter);

        let current = 0;

        const step = Math.ceil(target / 100);

        const timer = setInterval(() => {

            current += step;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.innerText = current.toLocaleString();

        }, 20);

        counterObserver.unobserve(counter);

    });

});

counters.forEach((counter) => {

    counterObserver.observe(counter);

});

/* ==========================================
        SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

/* ==========================================
        IMAGE FADE IN
========================================== */

const images = document.querySelectorAll("img");

images.forEach((img) => {

    img.addEventListener("load", () => {

        img.style.opacity = "1";

    });

    img.style.opacity = "0";

    img.style.transition = ".5s";

});

/* ==========================================
        WINDOW LOADED
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================
        MOBILE MENU (Future Support)
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("show");

        menuToggle.classList.toggle("active");

    });

}

/* ==========================================
        DEBOUNCE FUNCTION
========================================== */

function debounce(callback, delay = 100) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/* ==========================================
        WINDOW RESIZE
========================================== */

window.addEventListener(

    "resize",

    debounce(() => {

        if (window.innerWidth > 992) {

            if (navbar) {

                navbar.classList.remove("show");

            }

        }

    })

);

/* ==========================================
        HEADER SHADOW
========================================== */

const updateHeader = () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

};

window.addEventListener("scroll", debounce(updateHeader));

updateHeader();

/* ==========================================
        PREVENT DOUBLE CLICK
========================================== */

document.querySelectorAll("button").forEach((button) => {

    button.addEventListener("dblclick", (e) => {

        e.preventDefault();

    });

});

/* ==========================================
        ACTIVE BUTTON EFFECT
========================================== */

document.querySelectorAll(".career-btn, .view-more-btn").forEach((button) => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(.96)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/* ==========================================
        PAGE LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".page-loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 500);

    }

});

/* ==========================================
        CURRENT YEAR
========================================== */

const year = document.querySelector("#currentYear");

if (year) {

    year.textContent = new Date().getFullYear();

}

/* ==========================================
        KEYBOARD SHORTCUT
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "/") {

        const input = document.getElementById("keywordInput");

        if (input) {

            event.preventDefault();

            input.focus();

        }

    }

});

/* ==========================================
        CONSOLE MESSAGE
========================================== */

console.log(

    "%cIT Career Hub",

    "color:#2563eb;font-size:20px;font-weight:bold;"

);

console.log(

    "%cFrontend loaded successfully.",

    "color:#10b981;font-size:14px;"

);

/* ==========================================
        END OF FILE
========================================== */
