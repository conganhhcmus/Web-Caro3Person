let socket = io();
function login() {
    var body = {
        userName: document.getElementById("loginUsername").value,
        passWord: document.getElementById("loginPassword").value,
    };
    // alert(body.passWord);
    axios({
        method: "post",
        url: "/login",
        data: body,
    })
        .then(function (response) {
            // change view
            console.log(response);
        })
        .catch(function (error) {
            // show error
            console.log(error);
        });
}

var password = document.getElementById("registerPassword"),
    confirm_password = document.getElementById("registerConfirmPassword"),
    username = document.getElementById("registerUsername");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity("");
    }
}

async function checkUser() {
    var body = {
        userName: username.value
    };
    // let isExist = true;
    axios({
        method: "post",
        url: "/checkUser",
        data: body,
    })
        .then(function (response) {
            // change view
            console.log(response);
            if(response != "") return true;
            else return false;
        })
        .catch(function (error) {
            // show error
            console.log(error);
            return false;
        });
    // return isExist;
}

function validateUsername() {
    console.log(checkUser());
    if (checkUser()) {
        username.setCustomValidity("Username Already Exists");
    } else {
        username.setCustomValidity("");
    }
    
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
username.onkeyup = validateUsername;

function register() {
    var body = {
        userName: document.getElementById("registerUsername").value,
        passWord: document.getElementById("registerPassword").value,
    };
    alert(body.passWord);
    // axios({
    //     method: "post",
    //     url: "/register",
    //     data: body,
    // })
    //     .then(function (response) {
    //         // change view
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         // show error
    //         console.log(error);
    //     });
}
