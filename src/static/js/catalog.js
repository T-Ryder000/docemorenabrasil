const createPageCatalog = ()=>{


  console.log("Funcionando!")

  
  const body = document.querySelector("#body")

  const main = document.createElement('main')
  main.className = "main-catalog pb-16"
  main.style.backgroundColor = "#F4F6F9"

  main.innerHTML = `
    <section class="banner overflow-hidden relative pb-10 " style=" min-height: 550px; ">

    <div class="bg-black">
        <div class="p-24 h-full w-full" style="background-image: url(./static/images/sorvetes.jpg); background-size: cover;  opacity: 0.3;"></div>
    </div>

    <div class="w-full flex justify-center">
        <img class="rounded-full w-24 h-24 md:w-24 md:h-24 mx-auto mb-10 absolute top-36" src="./static/images/logo.png" alt="logo da doce morena">
    </div>

    <div class="pt-20 pb-10 lg:mt-3 mt-0 rounded mx-auto  bg-black text-white" style="max-width: 1000px">

        <h1 class="text-6xl font-extrabold text-center text-yellow-400 my-6">NOSSO CATÁLOGO</h1>
        <p class="text-2xl font-bold mb-10 text-center text-blue-500">Categorias</p>

        <div class="body-category py-3">
        <div class="wrapper ">
            <i id="left" class="fa-solid fa-angle-left btn-category text-black"></i>
            <form class="carousel" data-category="carousel">
            <button class="card" data-category="card" data-toggle="portfilter"  name="submit" value="cozinha">
                <img src="./static/images/burguerCategory.jpeg" class="img">
                <h2 class="font-bold">Burguer</h2>
            </button>
            <button class="card" data-toggle="portfilter"  name="submit" >
                <img src="./static/images/coneCategory.jpeg" class="img">
                <h2 class="font-bold">Pizza Cone</h2>
            </button>
            <button class="card" data-toggle="portfilter"  name="submit" >
                <img src="./static/images/cafeCategory.jpeg" class="img">
                <h2 class="font-bold">Cafe</h2>
            </button>
            <button class="card" data-toggle="portfilter"  name="submit">
                <img src="./static/images/acaiCategory.jpeg" class="img">
                <h2 class="font-bold">Acai</h2>
            </button>
            <button class="card" data-toggle="portfilter"  name="submit" >
                <img src="./static/images/sanduicheCategory.jpeg" class="img">
                <h2 class="font-bold">Sanduiche</h2>
            </button>
            <button class="card" data-toggle="portfilter" name="submit" >
                <img src="./static/images/caldoCategory.jpeg" class="img">
                <h2 class="font-bold">Caldo</h2>
            </button>
            <button class="card" data-toggle="portfilter" name="submit" >
                <img src="./static/images/docesCategory.jpeg" class="img">
                <h2 class="font-bold">Doces</h2>
            </button>
            <button class="card" data-toggle="portfilter" name="submit" >
                <img src="./static/images/sucoCategory.jpeg" class="img">
                <h2 class="font-bold">Sucos</h2>
            </button>
            </form>
            <i id="right" class="fa-solid fa-angle-right btn-category text-black"></i>
        </div>
        </div>

    </div>
  
  </section>

<div class="catalog-products-list mx-auto gap-2" id="productContainer" style="max-width: 900px">

    <div class="catalog-product-stack product-item rounded p-2 flex-none transform transition duration-300 hover:rotate-3" 
        data-tags="" style="flex: 0 1 calc(20% - 10px); margin-bottom: 20px;">
        <div class="catalog-product-card bg_color1 color4 text-center rounded shadow-lg">
            <a href="#" class="catalog-product-body block">
                <div class="catalog-product-card-body">
                    <img src="./static/images/cafeexpresso.jpeg" class="catalog-product-img w-full h-40 object-cover rounded" alt="Imagem do produto">
                    <div class="catalog-product-body-text p-2">
                        <h5 class="catalog-product-card-title color4 text-lg font-semibold">Café Expresso</h5>
                        <p class="catalog-product-description text-sm mt-1 text-gray-600">Um café forte e encorpado, perfeito para começar o dia com energia.</p>
                    </div>
                </div>
            </a>
            <div class="mt-2">
                <a href="#" id="btn-product" class="catalog-btn bg-black w-full mx-auto text-yellow-400 rounded-full font-bold text-sm py-2 hover:bg-yellow-500 hover:text-white transition">Ver Produto</a>
            </div>
        </div>
    </div>


    <div class="catalog-product-stack product-item rounded p-2 flex-none transform transition duration-300 hover:rotate-3" 
        data-tags="" style="flex: 0 1 calc(20% - 10px); margin-bottom: 20px;">
        <div class="catalog-product-card bg_color1 color4 text-center rounded shadow-lg">
            <a href="#" class="catalog-product-body block">
                <div class="catalog-product-card-body">
                    <img src="./static/images/cafeexpresso.jpeg" class="catalog-product-img w-full h-40 object-cover rounded" alt="Imagem do produto">
                    <div class="catalog-product-body-text p-2">
                        <h5 class="catalog-product-card-title color4 text-lg font-semibold">Café Intenso</h5>
                        <p class="catalog-product-description text-sm mt-1 text-gray-600">Um café com sabor marcante, ideal para os amantes de intensidade.</p>
                    </div>
                </div>
            </a>
            <div class="mt-2">
                <a href="#" class="catalog-btn bg-black w-full mx-auto text-yellow-400 rounded-full font-bold text-sm py-2 hover:bg-yellow-500 hover:text-white transition">Ver Produto</a>
            </div>
        </div>
    </div>

    <div class="catalog-product-stack product-item rounded p-2 flex-none transform transition duration-300 hover:rotate-3" 
    data-tags="" style="flex: 0 1 calc(20% - 10px); margin-bottom: 20px;">
    <div class="catalog-product-card bg_color1 color4 text-center rounded shadow-lg">
        <a href="#" class="catalog-product-body block">
            <div class="catalog-product-card-body">
                  <img src="./static/images/cafeexpresso.jpeg" class="catalog-product-img w-full h-40 object-cover rounded" alt="Imagem do produto">
                <div class="catalog-product-body-text p-2">
                    <h5 class="catalog-product-card-title color4 text-lg font-semibold">Café Expresso</h5>
                    <p class="catalog-product-description text-sm mt-1 text-gray-600">Um café forte e encorpado, perfeito para começar o dia com energia.</p>
                </div>
            </div>
        </a>
        <div class="mt-2">
            <a href="#" class="catalog-btn bg-black w-full mx-auto text-yellow-400 rounded-full font-bold text-sm py-2 hover:bg-yellow-500 hover:text-white transition">Ver Produto</a>
        </div>
    </div>
    </div>


    <div class="catalog-product-stack product-item rounded p-2 flex-none transform transition duration-300 hover:rotate-3" 
        data-tags="" style="flex: 0 1 calc(20% - 10px); margin-bottom: 20px;">
        <div class="catalog-product-card bg_color1 color4 text-center rounded shadow-lg">
            <a href="#" class="catalog-product-body block">
                <div class="catalog-product-card-body">
                    <img src="./static/images/cafeexpresso.jpeg" class="catalog-product-img w-full h-40 object-cover rounded" alt="Imagem do produto">
                    <div class="catalog-product-body-text p-2">
                        <h5 class="catalog-product-card-title color4 text-lg font-semibold">Café Intenso</h5>
                        <p class="catalog-product-description text-sm mt-1 text-gray-600">Um café com sabor marcante, ideal para os amantes de intensidade.</p>
                    </div>
                </div>
            </a>
            <div class="mt-2">
                <a href="#" class="catalog-btn bg-black w-full mx-auto text-yellow-400 rounded-full font-bold text-sm py-2 hover:bg-yellow-500 hover:text-white transition">Ver Produto</a>
            </div>
        </div>
    </div>

    <div class="catalog-product-stack product-item rounded p-2 flex-none transform transition duration-300 hover:rotate-3" 
    data-tags="" style="flex: 0 1 calc(20% - 10px); margin-bottom: 20px;">
    <div class="catalog-product-card bg_color1 color4 text-center rounded shadow-lg">
        <a href="#" class="catalog-product-body block">
            <div class="catalog-product-card-body">
                  <img src="./static/images/cafeexpresso.jpeg" class="catalog-product-img w-full h-40 object-cover rounded" alt="Imagem do produto">
                <div class="catalog-product-body-text p-2">
                    <h5 class="catalog-product-card-title color4 text-lg font-semibold">Café Expresso</h5>
                    <p class="catalog-product-description text-sm mt-1 text-gray-600">Um café forte e encorpado, perfeito para começar o dia com energia.</p>
                </div>
            </div>
        </a>
        <div class="mt-2">
            <a href="#" class="catalog-btn bg-black w-full mx-auto text-yellow-400 rounded-full font-bold text-sm py-2 hover:bg-yellow-500 hover:text-white transition">Ver Produto</a>
        </div>
    </div>
    </div>


    <div class="catalog-product-stack product-item rounded p-2 flex-none transform transition duration-300 hover:rotate-3" 
        data-tags="" style="flex: 0 1 calc(20% - 10px); margin-bottom: 20px;">
        <div class="catalog-product-card bg_color1 color4 text-center rounded shadow-lg">
            <a href="#" class="catalog-product-body block">
                <div class="catalog-product-card-body">
                    <img src="./static/images/cafeexpresso.jpeg" class="catalog-product-img w-full h-40 object-cover rounded" alt="Imagem do produto">
                    <div class="catalog-product-body-text p-2">
                        <h5 class="catalog-product-card-title color4 text-lg font-semibold">Café Intenso</h5>
                        <p class="catalog-product-description text-sm mt-1 text-gray-600">Um café com sabor marcante, ideal para os amantes de intensidade.</p>
                    </div>
                </div>
            </a>
            <div class="mt-2">
                <a href="#" class="catalog-btn bg-black w-full mx-auto text-yellow-400 rounded-full font-bold text-sm py-2 hover:bg-yellow-500 hover:text-white transition">Ver Produto</a>
            </div>
        </div>
    </div>

    <div class="catalog-product-stack product-item rounded p-2 flex-none transform transition duration-300 hover:rotate-3" 
    data-tags="" style="flex: 0 1 calc(20% - 10px); margin-bottom: 20px;">
    <div class="catalog-product-card bg_color1 color4 text-center rounded shadow-lg">
        <a href="#" class="catalog-product-body block">
            <div class="catalog-product-card-body">
                  <img src="./static/images/cafeexpresso.jpeg" class="catalog-product-img w-full h-40 object-cover rounded" alt="Imagem do produto">
                <div class="catalog-product-body-text p-2">
                    <h5 class="catalog-product-card-title color4 text-lg font-semibold">Café Expresso</h5>
                    <p class="catalog-product-description text-sm mt-1 text-gray-600">Um café forte e encorpado, perfeito para começar o dia com energia.</p>
                </div>
            </div>
        </a>
        <div class="mt-2">
            <a href="#" class="catalog-btn bg-black w-full mx-auto text-yellow-400 rounded-full font-bold text-sm py-2 hover:bg-yellow-500 hover:text-white transition">Ver Produto</a>
        </div>
    </div>
</div>


<div class="catalog-product-stack product-item rounded p-2 flex-none transform transition duration-300 hover:rotate-3" 
    data-tags="" style="flex: 0 1 calc(20% - 10px); margin-bottom: 20px;">
    <div class="catalog-product-card bg_color1 color4 text-center rounded shadow-lg">
        <a href="#" class="catalog-product-body block">
            <div class="catalog-product-card-body">
                <img src="./static/images/cafeexpresso.jpeg" class="catalog-product-img w-full h-40 object-cover rounded" alt="Imagem do produto">
                <div class="catalog-product-body-text p-2">
                    <h5 class="catalog-product-card-title color4 text-lg font-semibold">Café Intenso</h5>
                    <p class="catalog-product-description text-sm mt-1 text-gray-600">Um café com sabor marcante, ideal para os amantes de intensidade.</p>
                </div>
            </div>
        </a>
        <div class="mt-2">
            <a href="#" class="catalog-btn bg-black w-full mx-auto text-yellow-400 rounded-full font-bold text-sm py-2 hover:bg-yellow-500 hover:text-white transition">Ver Produto</a>
        </div>
    </div>
</div>

</div>


  `

  body.appendChild(main)
}

export default createPageCatalog