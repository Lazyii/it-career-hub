/* ==========================================
    MY PROFILE PAGE
    IT Career Hub
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =============================
        DARK MODE
    ============================== */

    const themeSwitch = document.getElementById("themeSwitch");

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        if (themeSwitch) {

            themeSwitch.checked = true;

        }

    }

    if (themeSwitch) {

        themeSwitch.addEventListener("change", function () {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {

                localStorage.setItem("theme", "dark");

            } else {

                localStorage.setItem("theme", "light");

            }

        });

    }

    /* =============================
        ADD SKILL
    ============================== */

    const addSkillBtn = document.querySelector(".add-btn");
    const skillContainer = document.getElementById("skillContainer");

    if (addSkillBtn && skillContainer) {

        addSkillBtn.addEventListener("click", function () {

            const div = document.createElement("div");

            div.className = "skill-item";

            div.innerHTML = `
                <input
                    type="text"
                    placeholder="Nhập kỹ năng">
            `;

            skillContainer.appendChild(div);

        });

    }

    /* =============================
        EXPERIENCE
    ============================== */

    const experienceContainer =
        document.getElementById("experienceContainer");

    if (experienceContainer) {

        const addExperience = document.createElement("button");

        addExperience.type = "button";

        addExperience.className = "add-btn";

        addExperience.style.marginTop = "15px";

        addExperience.innerHTML = "Thêm kinh nghiệm";

        experienceContainer.after(addExperience);

        addExperience.addEventListener("click", function () {

            const item = document.createElement("div");

            item.className = "experience-item";

            item.innerHTML = `

            <div class="experience-grid">

                <div class="form-group large">

                    <label>Công việc</label>

                    <input type="text">

                </div>

                <div class="form-group small">

                    <label>Từ năm</label>

                    <input type="text">

                </div>

                <div class="form-group small">

                    <label>Đến năm</label>

                    <input type="text">

                </div>

            </div>

            <div class="form-group">

                <label>Tên công ty</label>

                <input type="text">

            </div>

            <div class="form-group">

                <label>Mô tả</label>

                <textarea rows="4"></textarea>

            </div>

            `;

            experienceContainer.appendChild(item);

        });

    }

    /* =============================
        EDUCATION
    ============================== */

    const educationContainer =
        document.getElementById("educationContainer");

    if (educationContainer) {

        const addEducation = document.createElement("button");

        addEducation.type = "button";

        addEducation.className = "add-btn";

        addEducation.style.marginTop = "15px";

        addEducation.innerHTML = "Thêm học vấn";

        educationContainer.after(addEducation);

        addEducation.addEventListener("click", function () {

            const item = document.createElement("div");

            item.className = "education-item";

            item.innerHTML = `

            <div class="education-grid">

                <div class="form-group large">

                    <label>Tên ngành</label>

                    <input type="text">

                </div>

                <div class="form-group small">

                    <label>Từ năm</label>

                    <input type="text">

                </div>

                <div class="form-group small">

                    <label>Đến năm</label>

                    <input type="text">

                </div>

            </div>

            <div class="form-group">

                <label>Tên trường</label>

                <input type="text">

            </div>

            `;

            educationContainer.appendChild(item);

        });

    }

    /* =============================
        LINK
    ============================== */

    const linkContainer =
        document.getElementById("linkContainer");

    if (linkContainer) {

        const addLink = document.createElement("button");

        addLink.type = "button";

        addLink.className = "add-btn";

        addLink.style.marginTop = "15px";

        addLink.innerHTML = "Thêm liên kết";

        linkContainer.after(addLink);

        addLink.addEventListener("click", function () {

            const item = document.createElement("div");

            item.className = "link-item";

            item.innerHTML = `

                <div class="form-group">

                    <label>Tên liên kết</label>

                    <input
                        type="text"
                        placeholder="Github">

                </div>

                <div class="form-group">

                    <label>Link</label>

                    <input
                        type="url"
                        placeholder="https://">

                </div>

            `;

            linkContainer.appendChild(item);

        });

    }

    /* =============================
        SAVE PROFILE
    ============================== */

    const profileForm =
        document.getElementById("profileForm");

    if (profileForm) {

        profileForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const fullName =
                document.querySelector("input[name='fullname']");

            const email =
                document.querySelector("input[name='email']");

            if (fullName && fullName.value.trim() === "") {

                alert("Vui lòng nhập họ tên.");

                fullName.focus();

                return;

            }

            if (email && email.value.trim() === "") {

                alert("Vui lòng nhập Email.");

                email.focus();

                return;

            }

            alert("Lưu hồ sơ thành công!");

            /*
            Django sau này:

            fetch('/profile/update/',{
                method:'POST',
                headers:{
                    'X-CSRFToken':csrftoken
                },
                body:new FormData(profileForm)
            })

            */

        });

    }

    /* =============================
        INPUT EFFECT
    ============================== */

    const inputs =
        document.querySelectorAll("input, textarea");

    inputs.forEach(function (item) {

        item.addEventListener("focus", function () {

            item.parentElement.style.transition = ".25s";

            item.parentElement.style.transform =
                "translateY(-2px)";

        });

        item.addEventListener("blur", function () {

            item.parentElement.style.transform =
                "translateY(0px)";

        });

    });

});