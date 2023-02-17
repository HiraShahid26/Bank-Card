const cardNumber = document.querySelector(".number");
const numberInp = document.querySelector(".cardNum");

const cardName = document.querySelector(".name");
const nameInp = document.querySelector(".crdName");

const cardMonth = document.querySelector(".month");
const monthInp = document.querySelector(".crdMonth");

const cardYear = document.querySelector(".year");
const yearInp = document.querySelector(".crdYear");

const cardCvc = document.querySelector(".cvc1");
const cvcInp = document.querySelector(".cvc");

const submitBtn = document.querySelector(".btn1");
const completed = document.querySelector(".thankyou");
// const c3 = document.querySelector(".c4")

const form = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}

function setCardName(e) {
    cardName.innerText = format(e.target.value);
}

function setCardMonth(e) {
    cardMonth.innerText = format(e.target.value);
}

function setCardYear(e) {
    cardYear.innerText = format(e.target.value);
}

function setCardCvc(e) {
    cardCvc.innerText = format(e.target.value);
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

function handleSubmit(e) {
    e.preventDefault();
    if (!nameInp.value){
        nameInp.classList.add("error");
        nameInp.parentElement.classList.add("error_message");
    }
    else {
        nameInp.classList.remove("error");
        nameInp.parentElement.classList.remove("error_message");
    }

    if (!numberInp.value){
        numberInp.classList.add("error");
        numberInp.parentElement.classList.add("error_message");
    }
    else {
        numberInp.classList.remove("error");
        numberInp.parentElement.classList.remove("error_message");
    }

    if (!monthInp.value){
        monthInp.classList.add("error");
        monthInp.parentElement.classList.add("error_message");
    }
    else {
        monthInp.classList.remove("error");
        monthInp.parentElement.classList.remove("error_message");
    }

    if (!yearInp.value){
        yearInp.classList.add("error");
        yearInp.parentElement.classList.add("error_message");
    }
    else {
        yearInp.classList.remove("error");
        yearInp.parentElement.classList.remove("error_message");
    }

    if (!cvcInp.value){
        cvcInp.classList.add("error");
        cvcInp.parentElement.classList.add("error_message");
        // c3.parentElement.classList.add("error_message");

    }
    else {
        cvcInp.classList.remove("error");
        cvcInp.parentElement.classList.remove("error_message");
    }

    if (nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value) {
        completed.classList.remove("hidden");
        form.classList.add("hidden");
    }

}


numberInp.addEventListener("keyup",setCardNumber);
nameInp.addEventListener("keyup",setCardName);
monthInp.addEventListener("keyup",setCardMonth);
yearInp.addEventListener("keyup",setCardYear);
cvcInp.addEventListener("keyup",setCardCvc);
submitBtn.addEventListener("click", handleSubmit)

