/*
====================================
IT Career Hub - Home Page
JavaScript cơ bản
Sẵn sàng tích hợp Django Backend
====================================
*/

document.addEventListener("DOMContentLoaded", function () {

    initializeSearch();

    initializeSuggestionButtons();

    initializeApplyButtons();

    initializeCompanyCards();

    initializeCategoryCards();

    initializeReviewSlider();

});


/* ===============================
   SEARCH
================================ */

function initializeSearch() {

    const form = document.getElementById("jobSearchForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const keyword =
            document
                .getElementById("keyword")
                .value
                .trim();

        const location =
            document
                .getElementById("location")
                .value
                .trim();

        if (keyword === "" && location === "") {

            alert("Vui lòng nhập công việc hoặc địa điểm.");

            return;
        }

        console.log("Keyword:", keyword);
        console.log("Location:", location);

        /*
        ============================
        Sau này thay bằng Django

        window.location.href =
        `/jobs/?keyword=${keyword}&location=${location}`;

        hoặc gọi API fetch()

        ============================
        */

        alert(
            "Đang tìm kiếm:\n\n" +
            "Công việc: " + keyword +
            "\nĐịa điểm: " + location
        );

    });

}


/* ===============================
   SUGGESTION BUTTONS
================================ */

function initializeSuggestionButtons() {

    const buttons =
        document.querySelectorAll(".suggestions button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const keyword =
                document.getElementById("keyword");

            keyword.value = this.innerText;

            keyword.focus();

        });

    });

}


/* ===============================
   APPLY BUTTON
================================ */

function initializeApplyButtons() {

    const buttons =
        document.querySelectorAll(".apply-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            alert(
                "Chức năng ứng tuyển sẽ được kết nối với Django Backend."
            );

        });

    });

}


/* ===============================
   COMPANY CARD
================================ */

function initializeCompanyCards() {

    const companies =
        document.querySelectorAll(".company-card");

    companies.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.cursor = "pointer";

        });

        card.addEventListener("click", function () {

            console.log("Company clicked");

            /*
            Sau này:

            window.location.href="/company/1/";

            */

        });

    });

}


/* ===============================
   CATEGORY
================================ */

function initializeCategoryCards() {

    const categories =
        document.querySelectorAll(".category-grid a");

    categories.forEach(function (item) {

        item.addEventListener("click", function (event) {

            event.preventDefault();

            const category = this.innerText;

            console.log(category);

            /*
            Django

            window.location.href =
            `/jobs/?category=${category}`;

            */

            alert(
                "Danh mục: " + category
            );

        });

    });

}


/* ===============================
   REVIEW SLIDER
================================ */

function initializeReviewSlider() {

    const dots =
        document.querySelectorAll(".dot");

    if (dots.length === 0) return;

    let current = 0;

    setInterval(function () {

        dots[current].classList.remove("active");

        current++;

        if (current >= dots.length) {

            current = 0;

        }

        dots[current].classList.add("active");

    }, 3000);

}


/* ===============================
   FUTURE DJANGO
================================ */

/*

Sau này chỉ cần thay các alert bằng:

fetch("/api/jobs/")
fetch("/api/company/")
fetch("/api/category/")

hoặc

window.location.href="/jobs"

không cần sửa HTML.

*/

