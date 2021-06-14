const form = document.querySelector("form")
const body = document.querySelector("body")
body.addEventListener("click" , showForm)
function showForm(){
    form.style.display = "flex"
}