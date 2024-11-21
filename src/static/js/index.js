import createPageAbout from "./about.js"


const body = document.querySelector("#body")
const main = document.querySelector("#main")

const btnAbout = document.querySelector("#btn-about")

btnAbout.addEventListener("click", function(){
    createPageAbout()
    main.style.display = "none"
})