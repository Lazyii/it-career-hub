/*=====================================
        SETTINGS.JS
======================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=====================================
            ELEMENTS
    ======================================*/

    const languageBtn = document.getElementById("languageBtn");
    const languageModal = document.getElementById("languageModal");

    const changePasswordBtn = document.getElementById("changePasswordBtn");
    const passwordModal = document.getElementById("passwordModal");

    const logoutBtn = document.getElementById("logoutBtn");
    const logoutSidebar = document.getElementById("logoutSidebar");
    const logoutModal = document.getElementById("logoutModal");

    const themeSwitch = document.getElementById("themeSwitch");

    const passwordForm = document.getElementById("changePasswordForm");

    /*=====================================
            OPEN MODALS
    ======================================*/

    if (languageBtn) {

        languageBtn.addEventListener("click", function () {

            languageModal.classList.add("show");

        });

    }

    if (changePasswordBtn) {

        changePasswordBtn.addEventListener("click", function () {

            passwordModal.classList.add("show");

        });

    }

    if (logoutBtn) {

        logoutBtn.addEventListener("click", function () {

            logoutModal.classList.add("show");

        });

    }

    if (logoutSidebar) {

        logoutSidebar.addEventListener("click", function (e) {

            e.preventDefault();

            logoutModal.classList.add("show");

        });

    }

    /*=====================================
            CLOSE MODALS
    ======================================*/

    const modals = document.querySelectorAll(".modal");

    modals.forEach(function (modal) {

        modal.addEventListener("click", function (e) {

            if (e.target === modal) {

                modal.classList.remove("show");

            }

        });

    });

    document.querySelectorAll(".cancel-btn").forEach(function (button) {

        button.addEventListener("click", function () {

            modals.forEach(function (modal) {

                modal.classList.remove("show");

            });

        });

    });

    /*=====================================
            ESC CLOSE
    ======================================*/

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            modals.forEach(function (modal) {

                modal.classList.remove("show");

            });

        }

    });

    /*=====================================
        LANGUAGE CHANGE
    ======================================*/

    document.querySelectorAll(".language-option").forEach(function (button) {

        button.addEventListener("click", function () {

            document.querySelectorAll(".language-option").forEach(function (item) {

                item.classList.remove("active");

            });

            this.classList.add("active");

            languageBtn.innerHTML =
                this.textContent.trim() +
                ' <i class="fa-solid fa-angle-down"></i>';

            languageModal.classList.remove("show");

        });

    });

    /*=====================================
        CHANGE PASSWORD
    ======================================*/

    if (passwordForm) {

        passwordForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const oldPassword =
                document.getElementById("oldPassword").value.trim();

            const newPassword =
                document.getElementById("newPassword").value.trim();

            const confirmPassword =
                document.getElementById("confirmPassword").value.trim();

            if (
                oldPassword === "" ||
                newPassword === "" ||
                confirmPassword === ""
            ) {

                alert("Vui lòng nhập đầy đủ thông tin.");

                return;

            }

            if (newPassword.length < 6) {

                alert("Mật khẩu mới phải có ít nhất 6 ký tự.");

                return;

            }

            if (newPassword !== confirmPassword) {

                alert("Xác nhận mật khẩu không khớp.");

                return;

            }

            alert("Đổi mật khẩu thành công.");

            passwordForm.reset();

            passwordModal.classList.remove("show");

            /*
            Django:

            fetch("/users/change-password/",{
                method:"POST",
                body:formData
            })

            */

        });

    }

    /*=====================================
            LOGOUT
    ======================================*/

    const confirmLogout =
        document.getElementById("confirmLogout");

    if (confirmLogout) {

        if (confirmLogout) {
    confirmLogout.addEventListener("click", function () {
        document.getElementById("logoutForm").submit();
    });
}

    }

    /*=====================================
            DARK MODE
    ======================================*/

    if (themeSwitch) {

        if (localStorage.getItem("theme") === "dark") {

            document.body.classList.add("dark");

            themeSwitch.checked = true;

        }

        themeSwitch.addEventListener("change", function () {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {

                localStorage.setItem("theme", "dark");

            } else {

                localStorage.setItem("theme", "light");

            }

        });

    }

});