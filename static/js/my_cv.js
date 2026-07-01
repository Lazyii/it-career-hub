/* ======================================================
   MY CV PAGE
   IT Career Hub
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       DARK MODE
    ========================================== */

    const themeSwitch = document.getElementById("themeSwitch");

    // Đọc trạng thái đã lưu
    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

        if (themeSwitch) {
            themeSwitch.checked = true;
        }

    }

    // Chuyển đổi Dark Mode
    if (themeSwitch) {

        themeSwitch.addEventListener("change", function () {

            if (this.checked) {

                document.body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");

            } else {

                document.body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");

            }

        });

    }

    /* ==========================================
       DELETE CV
    ========================================== */

    const deleteButtons = document.querySelectorAll(".icon-btn.delete");

    deleteButtons.forEach(button => {

        button.addEventListener("click", function () {

            const confirmDelete = confirm(
                "Bạn có chắc chắn muốn xóa CV này không?"
            );

            if (!confirmDelete) return;

            const cvItem = this.closest(".cv-item");

            if (cvItem) {

                cvItem.style.opacity = "0";
                cvItem.style.transform = "translateX(30px)";

                setTimeout(() => {

                    cvItem.remove();

                }, 300);

            }

            // Khi tích hợp Django:
            // fetch(...)
            // axios(...)
            // hoặc submit form

        });

    });

    /* ==========================================
       VIEW CV
    ========================================== */

    const viewButtons = document.querySelectorAll(
        ".cv-actions .icon-btn:not(.delete)"
    );

    viewButtons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "scale(1.08)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "scale(1)";

        });

    });

    /* ==========================================
       SIDEBAR ACTIVE
    ========================================== */

    const menuItems = document.querySelectorAll(".sidebar-menu li");

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(i => i.classList.remove("active"));

            item.classList.add("active");

        });

    });

    /* ==========================================
       HEADER ICON EFFECT
    ========================================== */

    const headerIcons = document.querySelectorAll(".header-icon");

    headerIcons.forEach(icon => {

        icon.addEventListener("click", () => {

            icon.animate(

                [

                    { transform: "scale(1)" },

                    { transform: "scale(0.85)" },

                    { transform: "scale(1.05)" },

                    { transform: "scale(1)" }

                ],

                {

                    duration: 250

                }

            );

        });

    });

    /* ==========================================
       CV HOVER EFFECT
    ========================================== */

    const cvItems = document.querySelectorAll(".cv-item");

    cvItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            item.style.transition = ".3s";
            item.style.boxShadow = "0 12px 25px rgba(0,0,0,.12)";

        });

        item.addEventListener("mouseleave", () => {

            item.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";

        });

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll("a[href^='#']").forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

});