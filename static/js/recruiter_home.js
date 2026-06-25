/* ======================================================
    Recruiter Home JavaScript
    IT Career Hub
====================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
        Floating Menu
    ========================================== */

    const floatingBtn = document.getElementById("floatingToggle");
    const floatingMenu = document.getElementById("floatingDropdown");

    if (floatingBtn && floatingMenu) {

        floatingBtn.addEventListener("click", function (e) {

            e.stopPropagation();

            floatingMenu.classList.toggle("active");

        });

        document.addEventListener("click", function () {

            floatingMenu.classList.remove("active");

        });

    }


    /* ==========================================
        Profile Dropdown
    ========================================== */

    const profileBtn = document.querySelector(".profile-btn");
    const profileDropdown = document.querySelector(".dropdown-content");

    if (profileBtn && profileDropdown) {

        profileBtn.addEventListener("click", function (e) {

            e.stopPropagation();

            profileDropdown.classList.toggle("show");

        });

        document.addEventListener("click", function () {

            profileDropdown.classList.remove("show");

        });

    }


    /* ==========================================
        Back To Top
    ========================================== */

    const backTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {

        if (!backTop) return;

        if (window.scrollY > 400) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });

    if (backTop) {

        backTop.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* ==========================================
        Sticky Header Shadow
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 20) {

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "0 2px 10px rgba(0,0,0,.05)";

        }

    });


    /* ==========================================
        Fade Animation
    ========================================== */

    const fadeItems = document.querySelectorAll(".fade-in");

    function showItems() {

        fadeItems.forEach(function (item) {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                item.classList.add("show");

            }

        });

    }

    showItems();

    window.addEventListener("scroll", showItems);


    /* ==========================================
        Counter Animation
    ========================================== */

    const counters = document.querySelectorAll(".stat-card h3");

    let counterStarted = false;

    function runCounter() {

        if (counterStarted) return;

        const section = document.querySelector(".statistics");

        if (!section) return;

        const top = section.getBoundingClientRect().top;

        if (top > window.innerHeight) return;

        counterStarted = true;

        counters.forEach(function (counter) {

            let target = parseInt(counter.innerText.replace(/\D/g, ""));

            if (isNaN(target)) return;

            let value = 0;

            const speed = target / 60;

            const update = function () {

                value += speed;

                if (value < target) {

                    counter.innerText = Math.floor(value);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target.toLocaleString();

                }

            };

            update();

        });

    }

    runCounter();

    window.addEventListener("scroll", runCounter);


    /* ==========================================
        Testimonial Slider
    ========================================== */

    const slider = document.querySelector(".testimonial-slider");

    if (slider) {

        let scrollPosition = 0;

        setInterval(function () {

            const maxScroll = slider.scrollWidth - slider.clientWidth;

            scrollPosition += 380;

            if (scrollPosition >= maxScroll) {

                scrollPosition = 0;

            }

            slider.scrollTo({

                left: scrollPosition,

                behavior: "smooth"

            });

        }, 5000);

    }


    /* ==========================================
        Search Validation
    ========================================== */

    const searchForm = document.querySelector(".search-box");

    if (searchForm) {

        searchForm.addEventListener("submit", function (e) {

            const keyword = searchForm.querySelector("input[name='keyword']");

            const location = searchForm.querySelector("input[name='location']");

            if (

                keyword.value.trim() === "" &&

                location.value.trim() === ""

            ) {

                e.preventDefault();

                alert("Vui lòng nhập từ khóa hoặc địa điểm.");

            }

        });

    }


    /* ==========================================
        Card Hover Effect
    ========================================== */

    const cards = document.querySelectorAll(

        ".job-card, .candidate-card, .stat-card"

    );

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0)";

        });

    });


    /* ==========================================
        Loading Screen
    ========================================== */

    const loading = document.querySelector(".loading");

    if (loading) {

        window.addEventListener("load", function () {

            loading.style.opacity = "0";

            setTimeout(function () {

                loading.style.display = "none";

            }, 500);

        });

    }

});


/* ======================================================
    Helper Functions
====================================================== */

function showSuccess(message) {

    alert(message);

}

function showError(message) {

    alert(message);

}

function confirmDelete(message = "Bạn có chắc chắn muốn thực hiện?") {

    return confirm(message);

}