/* ===========================================
   PROFILE.JS
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       AVATAR PREVIEW
    =============================== */

    const avatarInput = document.getElementById("avatarUpload");
    const avatarPreview = document.getElementById("profileAvatar");

    if (avatarInput && avatarPreview) {

        avatarInput.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = function (e) {

                avatarPreview.src = e.target.result;

                const sidebarAvatar = document.querySelector("#avatarPreview");

                if (sidebarAvatar) {
                    sidebarAvatar.src = e.target.result;
                }

            };

            reader.readAsDataURL(file);

        });

    }

    /* ===============================
       CV Upload
    =============================== */

    const cvUpload = document.getElementById("cvUpload");

    if (cvUpload) {

        cvUpload.addEventListener("change", function () {

            if (!this.files.length) return;

            const file = this.files[0];

            if (file.type !== "application/pdf") {

                alert("Vui lòng chọn file PDF.");

                this.value = "";

                return;

            }

            const uploadArea = document.querySelector(".upload-area");

            if (uploadArea) {

                uploadArea.innerHTML = `
                    <i class="fa-regular fa-file-pdf"></i>
                    <span>${file.name}</span>
                `;

            }

        });

    }

    /* ===============================
       ADD SKILL
    =============================== */

    const skillContainer = document.getElementById("skillContainer");

    const addSkillBtn = document.querySelector(".add-skill-btn");

    if (skillContainer && addSkillBtn) {

        addSkillBtn.addEventListener("click", () => {

            const skill = prompt("Nhập kỹ năng:");

            if (!skill) return;

            const div = document.createElement("div");

            div.className = "skill-item";

            div.innerHTML = `
                ${skill}
                <button type="button">&times;</button>
            `;

            skillContainer.appendChild(div);

        });

        skillContainer.addEventListener("click", function (e) {

            if (e.target.tagName === "BUTTON") {

                e.target.parentElement.remove();

            }

        });

    }

    /* ===============================
       SAVE BUTTON
    =============================== */

    const form = document.getElementById("profileForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Lưu thông tin thành công!");

        });

    }

    /* ===============================
       SIDEBAR ACTIVE
    =============================== */

    const menuItems = document.querySelectorAll(".sidebar-menu a");

    menuItems.forEach(item => {

        item.addEventListener("click", function () {

            menuItems.forEach(i => i.classList.remove("active"));

            this.classList.add("active");

        });

    });

    /* ===============================
       INPUT FOCUS EFFECT
    =============================== */

    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(input => {

        input.addEventListener("focus", function () {

            this.parentElement.classList.add("focus");

        });

        input.addEventListener("blur", function () {

            this.parentElement.classList.remove("focus");

        });

    });

    /* ===============================
       COLLAPSE SIDEBAR
    =============================== */

    const collapseBtn = document.querySelector(".collapse-menu");

    const sidebar = document.querySelector(".sidebar");

    if (collapseBtn && sidebar) {

        collapseBtn.addEventListener("click", () => {

            sidebar.classList.toggle("sidebar-hide");

        });

    }

});