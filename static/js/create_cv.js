// ======================================================
// create_cv.js
// IT Career Hub
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================================
    // Avatar Preview
    // ======================================================

    const avatarInput = document.getElementById("avatarInput");
    const avatarPreview = document.getElementById("avatarPreview");
    const changeAvatarBtn = document.getElementById("changeAvatarBtn");

    if (changeAvatarBtn && avatarInput) {

        changeAvatarBtn.addEventListener("click", () => {
            avatarInput.click();
        });

        avatarInput.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            if (!file.type.startsWith("image/")) {
                alert("Vui lòng chọn file ảnh.");
                this.value = "";
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                alert("Ảnh không được vượt quá 5MB.");
                this.value = "";
                return;
            }

            const reader = new FileReader();

            reader.onload = function (e) {
                avatarPreview.src = e.target.result;
            };

            reader.readAsDataURL(file);

        });

    }

    // ======================================================
    // Upload CV
    // ======================================================

    const cvInput = document.getElementById("cvUpload");
    const cvName = document.getElementById("cvFileName");

    if (cvInput) {

        cvInput.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            if (file.type !== "application/pdf") {

                alert("CV phải là file PDF.");

                this.value = "";

                cvName.textContent = "Chưa chọn file";

                return;

            }

            if (file.size > 5 * 1024 * 1024) {

                alert("CV tối đa 5MB.");

                this.value = "";

                cvName.textContent = "Chưa chọn file";

                return;

            }

            cvName.textContent = file.name;

        });

    }

    // ======================================================
    // Upload Certificate
    // ======================================================

    const certificateInput =
        document.getElementById("certificateFile");

    if (certificateInput) {

        certificateInput.addEventListener("change", function () {

            const file = this.files[0];

            if (!file) return;

            const allow = [

                "application/pdf",

                "image/png",

                "image/jpeg"

            ];

            if (!allow.includes(file.type)) {

                alert(
                    "Chứng chỉ chỉ chấp nhận PDF, JPG hoặc PNG."
                );

                this.value = "";

                return;

            }

            if (file.size > 5 * 1024 * 1024) {

                alert("Dung lượng tối đa là 5MB.");

                this.value = "";

                return;

            }

        });

    }

    // ======================================================
    // Save Draft
    // ======================================================

    const saveDraftBtn =
        document.getElementById("saveDraftBtn");

    if (saveDraftBtn) {

        saveDraftBtn.addEventListener("click", () => {

            const form = document.getElementById("createCVForm");

            const formData = {};

            const inputs = form.querySelectorAll(
                "input, textarea"
            );

            inputs.forEach(input => {

                if (
                    input.type !== "file"
                ) {

                    formData[input.name] = input.value;

                }

            });

            localStorage.setItem(
                "draft_cv",
                JSON.stringify(formData)
            );

            alert("Đã lưu nháp thành công.");

        });

    }

    // ======================================================
    // Load Draft
    // ======================================================

    const draft = localStorage.getItem("draft_cv");

    if (draft) {

        const data = JSON.parse(draft);

        Object.keys(data).forEach(key => {

            const input = document.querySelector(
                `[name="${key}"]`
            );

            if (input) {

                input.value = data[key];

            }

        });

    }

    // ======================================================
    // Form Validation
    // ======================================================

    const form =
        document.getElementById("createCVForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const fullName =
                document.getElementById("fullName").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            if (fullName === "") {

                alert("Vui lòng nhập họ tên.");

                return;

            }

            if (phone === "") {

                alert("Vui lòng nhập số điện thoại.");

                return;

            }

            if (email === "") {

                alert("Vui lòng nhập Email.");

                return;

            }

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {

                alert("Email không hợp lệ.");

                return;

            }

            alert("Kiểm tra thông tin thành công.");

            // ============================
            // Sau này kết nối Django
            // ============================
            // form.submit();

        });

    }

    // ======================================================
    // Auto Resize Textarea
    // ======================================================

    document
        .querySelectorAll("textarea")
        .forEach(textarea => {

            textarea.addEventListener("input", () => {

                textarea.style.height = "auto";

                textarea.style.height =
                    textarea.scrollHeight + "px";

            });

        });

    // ======================================================
    // Character Counter (Giới thiệu)
    // ======================================================

    const about =
        document.getElementById("about");

    if (about) {

        const counter = document.createElement("small");

        counter.style.display = "block";
        counter.style.textAlign = "right";
        counter.style.color = "#64748B";
        counter.style.marginTop = "8px";

        about.parentElement.appendChild(counter);

        function updateCounter() {

            counter.textContent =
                about.value.length + " ký tự";

        }

        updateCounter();

        about.addEventListener(
            "input",
            updateCounter
        );

    }

});