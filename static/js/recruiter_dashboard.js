/*==================================================
    IT CAREER HUB
    Recruiter Dashboard
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
        DARK MODE
    ==============================*/

    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {

            document.body.classList.add("dark");
            themeToggle.checked = true;

        }

        themeToggle.addEventListener("change", function () {

            if (this.checked) {

                document.body.classList.add("dark");
                localStorage.setItem("theme", "dark");

            } else {

                document.body.classList.remove("dark");
                localStorage.setItem("theme", "light");

            }

        });

    }

    /*==============================
        SIDEBAR ACTIVE
    ==============================*/

    const menuItems = document.querySelectorAll(".sidebar-item");

    menuItems.forEach(item => {

        item.addEventListener("click", function () {

            menuItems.forEach(menu => {

                menu.classList.remove("active");

            });

            this.classList.add("active");

        });

    });

    /*==============================
        BUTTON EFFECT
    ==============================*/

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("mousedown", function () {

            this.style.transform = "scale(.96)";

        });

        button.addEventListener("mouseup", function () {

            this.style.transform = "scale(1)";

        });

        button.addEventListener("mouseleave", function () {

            this.style.transform = "scale(1)";

        });

    });

    /*==============================
        CARD HOVER
    ==============================*/

    const cards = document.querySelectorAll(".stat-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-3px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

    /*==============================
        TOOL BUTTON
    ==============================*/

    const toolButtons = document.querySelectorAll(".tool-btn");

    toolButtons.forEach(button => {

        button.addEventListener("click", function () {

            console.log("Button clicked");

        });

    });

    /*==============================
        DOWNLOAD BUTTON
    ==============================*/

    document.querySelectorAll(".btn-download")

        .forEach(button => {

            button.addEventListener("click", () => {

                console.log("Download CV");

            });

        });

    /*==============================
        DELETE BUTTON
    ==============================*/

    document.querySelectorAll(".btn-delete")

        .forEach(button => {

            button.addEventListener("click", () => {

                const result = confirm(
                    "Bạn có chắc chắn muốn xóa CV này?"
                );

                if (result) {

                    console.log("Delete CV");

                }

            });

        });

    /*==============================
        HEADER ICON
    ==============================*/

    document.querySelectorAll(".header-icon")

        .forEach(icon => {

            icon.addEventListener("mouseenter", () => {

                icon.style.transform = "scale(1.08)";

            });

            icon.addEventListener("mouseleave", () => {

                icon.style.transform = "scale(1)";

            });

        });

    /*==============================
        PROGRESS BAR ANIMATION
    ==============================*/

    const progresses = document.querySelectorAll(".progress-value");

    progresses.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.transition = "width .8s ease";

            bar.style.width = width;

        }, 200);

    });

});

