
const form = document.querySelector(".form");

// firstName
// lastName
// email
// passwordst

const input = document.querySelectorAll(".input");

let tfirstName = tlastname = temail = tpassword = "";
input[0].addEventListener("keyup", (e) => {
    tfirstName = e.target.value;
})
input[1].addEventListener("keyup", (e) => {
    tlastname = e.target.value;
})
input[2].addEventListener("keyup", (e) => {
    temail = e.target.value;
})
input[3].addEventListener("keyup", (e) => {
    tpassword = e.target.value;
})

const subButton = document.querySelector(".button");
let nameRegex = /^[A-Za-z]+$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])\S{8,16}$/;
subButton.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = false;
    let error = document.querySelectorAll(".error-message");
    let emptyError = document.querySelectorAll(".empty-field");

    if (tfirstName) {
        emptyError[0].classList.add("d-none");
        if (nameRegex.test(tfirstName)) {
            isValid = true;
            error[0].classList.add("d-none");
            input[0].classList.remove("error");
        } else {
            isValid = false;
            error[0].classList.remove("d-none");
            input[0].classList.add("error");
        }
    } else {
        isValid = false;
        input[0].classList.add("error");
        emptyError[0].classList.remove("d-none");
    }

    if (tlastname) {
        emptyError[1].classList.add("d-none");
        if (nameRegex.test(tlastname)) {
            isValid = true;
            input[1].classList.remove("error");
            error[1].classList.add("d-none");
        } else {
            isValid = false;
            input[1].classList.add("error");
            error[1].classList.remove("d-none");
        }
    } else {
        isValid = false;
        input[1].classList.add("error");
        emptyError[1].classList.remove("d-none");

    }

    if (temail) {
        emptyError[2].classList.add("d-none");
        if (emailRegex.test(temail)) {
            isValid = true;
            input[2].classList.remove("error");
            error[2].classList.add("d-none");
        } else {
            isValid = false;
            input[2].classList.add("error");
            error[2].classList.remove("d-none");
        }
    } else {
        isValid = false;
        input[2].classList.add("error");
        emptyError[2].classList.remove("d-none");

    }


    if (tpassword) {
        emptyError[3].classList.add("d-none");
        if (pwdRegex.test(tpassword)) {
            isValid = true;
            error[3].classList.add("d-none");
            input[3].classList.remove("error");
        } else {
            isValid = false;
            input[3].classList.add("error");
            error[3].classList.remove("d-none");
        }
    } else {
        isValid = false;
        input[3].classList.add("error");
        emptyError[3].classList.remove("d-none");
    }


if(isValid){
    form.reset();
    window.location.href = "https://www.geeksforgeeks.org/";
}

});
// form.addEventListener("click",(e)=>{

//    console.log(e.target.dataset.key);

//    console.log(e.target.value);



// })




