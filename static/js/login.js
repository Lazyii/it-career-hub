const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    const email =
        document.querySelector(
            "input[name='email']"
        ).value.trim();

    const password =
        document.querySelector(
            "input[name='password']"
        ).value.trim();

    if(email === "" || password === ""){
        e.preventDefault();
        alert("Vui lòng nhập đầy đủ thông tin.");
    }

});