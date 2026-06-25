const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){

    const role =
    document.getElementById("role").value;

    if(!role){
        e.preventDefault();
        alert("Vui lòng chọn vai trò.");
        return;
    }

    console.log("Role:", role);

});