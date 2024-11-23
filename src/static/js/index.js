import createPageAbout from "./about.js"
import createPageCatalog from "./catalog.js"
import carrousel from "./carrouselCategory.js"


const body = document.querySelector("#body")
const main = document.querySelector("#main")

const btnAbout = document.querySelector("#btn-about")
const btnCatalog = document.querySelector("#btn-catalog")

btnAbout.addEventListener("click", function(){
    createPageAbout()
    main.style.display = "none"

    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
})

btnCatalog.addEventListener("click", function(){
  createPageCatalog()
  main.style.display = "none"

  carrousel()

  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
})