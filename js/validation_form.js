const usernameValue = document.getElementById("username");
const emailValue = document.getElementById("email");
const passwordValue = document.getElementById("password");

const checkBoxStatus = document.getElementById("checkbox_btn");

const submitBtn = document.getElementById("submit_btn");

//Fails div 
const usernameFail = document.getElementById("username_fail");
const emailFail = document.getElementById("email_fail");
const passwordFail = document.getElementById("password_fail");

const checkbox_text = document.getElementById("checkbox_text");


/*
        Checking 
                #Username 
                        #min length > 0
                        #max length <= 32
                #Email
                        #Min length > 0
                        #Max length <= 32
                        # email chars and schema
                #Password
                        #min length > 0
                        #max length <= 32

*/
const checkUsername = () => {
        if (usernameValue.value.length > 0 && usernameValue.value.length <= 32) {
                usernameValue.style.borderBottom = "solid 2px green";
                usernameValue.style.boxShadow = "0px 2px green";
                return true;
        } else if (usernameValue.value.length == 0 ) {
                usernameValue.style.border = "solid 1px red";
                usernameFail.innerHTML = "Input failed.";
                return false;
        }
}

const checkEmail = () => {
        if (emailValue.value.length > 0 && emailValue.value.length <= 32 &&  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue.value) == true  ) {
                emailValue.style.borderBottom = "solid 2px green";
                emailValue.style.boxShadow = "0px 2px green";
                return true;
        } else if (emailValue.value.length == 0 ||  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue.value) == false) {
                emailValue.style.border = "solid 1px red";
                emailFail.innerHTML = "Input failed.";
                return false;
        }
}

const checkPassword = () => {
        if (passwordValue.value.length > 0 && passwordValue.value.length <= 32) {
                passwordValue.style.borderBottom = "solid 2px green";
                passwordValue.style.boxShadow = "0px 2px green";
                return true;
        } else if (passwordValue.value.length == 0 ||  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue.value) == false) {
                passwordValue.style.border = "solid 1px red";
                passwordFail.innerHTML = "Input failed.";
                return false;
        }
}


const checkAll = () => {
        checkUsername();
        checkPassword();
        checkEmail();

        if (checkBoxStatus.checked == true) {
                if (checkUsername() == true && checkPassword() == true && checkEmail() == true) {
                        alert("OK!");
                } else {
                        alert("Wrong!");
                }
        } else if (checkBoxStatus.checked == false) {
                checkbox_text.style.color = "red";
        }
}



submitBtn.onclick = function() {checkAll()};




/*
        RESET INPUTS 
        button onClick
*/
const reset = document.getElementById("reset_button");

const  resetInputs = () => {
        if (usernameValue.value == '') {
                console.log("Username clear");
        } else if (usernameValue.value != '') {
                usernameValue.value = "";
        }

        if (emailValue.value == '') {
                console.log("Email clear");
        } else if (emailValue.value != '') {
                emailValue.value = "";
        }

        if (passwordValue.value == '') {
                console.log("password clear");
        } else if (passwordValue.value != '') {
                passwordValue.value = "";
        }
        if (checkBoxStatus.checked == false) {
                console.log("Checkbox false");
        } else if (checkBoxStatus.checked == true) {
                checkBoxStatus.checked = false;
        }
        window.location.reload();
}

reset.onclick = function() { resetInputs()};