import createPageAbout from "./about.js";
import createPageCatalog from "./catalog.js";
import createPageProduct from "./product.js";
import carrousel from "./carrouselCategory.js";

const body = document.querySelector("#body");
const main = document.querySelector("#main");

const btnAbout = document.querySelector("#btn-about");
const btnCatalog = document.querySelector("#btn-catalog");

// Função para criar página "Sobre"
btnAbout.addEventListener("click", function () {
  createPageAbout();
  main.style.display = "none";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Função para criar página "Catálogo"
btnCatalog.addEventListener("click", function () {
  createPageCatalog();
  main.style.display = "none";

  carrousel();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Certifique-se de que `mainCatalog` e `btnProduct` existem
  const mainCatalog = document.querySelector(".main-catalog");
  if (mainCatalog) {
    const btnProduct = mainCatalog.querySelector("#btn-product");
    if (btnProduct) {
      btnProduct.addEventListener("click", function () {
        createPageProduct();
        main.style.display = "none";
        mainCatalog.style.display = "none";

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    } else {
      console.error("Elemento #btn-product não encontrado dentro de .main-catalog!");
    }
  } else {
    console.error("Elemento .main-catalog não encontrado!");
  }
});
