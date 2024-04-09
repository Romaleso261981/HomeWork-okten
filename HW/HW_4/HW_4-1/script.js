const formWrapperForm = document.getElementById("formWrapper")
const registerForm = document.getElementById("register")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    formWrapperForm.classList.remove("hide")
    registerForm.classList.add("hide")
})
btn1.addEventListener("click", () => {
    formWrapperForm.classList.add("hide")
    registerForm.classList.remove("hide")
})