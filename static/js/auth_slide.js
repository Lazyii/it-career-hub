document.addEventListener("DOMContentLoaded", () => {

const authContainer =
    document.getElementById("authContainer");

const signUpBtn =
    document.getElementById("signUpBtn");

const signInBtn =
    document.getElementById("signInBtn");

/* =========================
   ANIMATION LOGIN / REGISTER
========================= */

if (signUpBtn) {

    signUpBtn.addEventListener(
        "click",
        () => {
            authContainer.classList.add(
                "right-panel-active"
            );
        }
    );

}

if (signInBtn) {

    signInBtn.addEventListener(
        "click",
        () => {
            authContainer.classList.remove(
                "right-panel-active"
            );
        }
    );

}

/* =========================
   PASSWORD CONFIRM CHECK
========================= */

const registerForm =
    document.querySelector(
        ".sign-up-container form"
    );

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            const password1 =
                registerForm.querySelector(
                    "input[name='password1']"
                );

            const password2 =
                registerForm.querySelector(
                    "input[name='password2']"
                );

            if (
                password1 &&
                password2 &&
                password1.value !== password2.value
            ) {

                event.preventDefault();

                alert(
                    "Mật khẩu xác nhận không khớp."
                );

                password2.focus();

                return;
            }

        }
    );

}

});
