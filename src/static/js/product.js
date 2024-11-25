const createPageProduct = ()=>{


  console.log("Funcionando!")

  
  const body = document.querySelector("#body")

  const main = document.createElement('main')
  main.className = "main-product py-8"
  main.style.backgroundColor = "#F4F6F9"

  main.innerHTML = `
     <div class="container mx-auto pt-2 pb-10 px-4 rounded bg-white">
  
      <div class="mx-auto text-center p-2 rounded-full ">
        <img class="rounded-full w-16 h-16 mx-auto" src="./static/images/logo.png" alt="logo da doce morena">
        <h1 class="font-extrabold mt-2 text-gray-900">DOCE MORENA</h1>
      </div>

      <div class="mt-10 mb-16 rounded-lg max-w-4xl mx-auto flex flex-col lg:flex-row gap-8">
        
        <!-- Imagem do produto -->
        <div class="flex-1">
          <div class="overflow-hidden rounded-lg shadow-md">
            <img 
              src="./static/images/cafeexpresso.jpeg" 
              alt="Imagem do produto" 
              class="w-full h-auto max-h-[500px] object-cover transition-transform transform hover:scale-105"
              loading="lazy" 
              decoding="async">
          </div>
        </div>
        
  
        <!-- Texto do produto -->
        <div class="flex-1 space-y-6">
          <h1 class="text-3xl font-extrabold text-gray-900">Café Expresso</h1>
          <h3 class="text-xl text-gray-600 ">Um café forte e encorpado, perfeito para começar o dia com energia.</h3>
          
          <div class="border-t border-gray-200 pt-4">
            <h2 class="text-lg font-semibold text-gray-800 mb-4">Ingredientes:</h2>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Café 100% arábica</li>
              <li>Água filtrada</li>
            </ul>
          </div>
        </div>
      </div>

  
   
      <div class=" rounded-lg max-w-4xl mx-auto p-8 text-center text-gray-900">
        <h2 class="text-xl mb-10 font-semibold ">Fale Conosco pelo WhatsApp</h2>
        <a href="https://wa.me/5575992085485?text=Olá Doce morena, tudo bem?" 
           target="_blank" 
           class=" px-6 py-3 bg-green-500 rounded-full text-white font-bold hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105">
          <i class="fab fa-whatsapp"></i> Converse pelo WhatsApp
        </a>
      </div>
  
      <!-- Plataformas de Delivery -->
      <div class=" rounded-lg max-w-4xl mx-auto px-4 py-16">
        <h2 class="mb-16 text-xl font-semibold  text-center text-gray-900">Compre Agora nas Melhores Plataformas de Delivery</h2>
        <div class="flex justify-center gap-10 text-center">
          <!-- Quero Delivery -->
          <a href="https://querodelivery.com.br/" target="_blank" class="flex flex-col items-center">
            <img src="./static/images/querodelivery.png" alt="Quero Delivery" class="w-24 h-24 object-contain transition-transform transform hover:scale-110 rounded-full">
            <p class="mt-3 text-gray-700 font-semibold">Quero Delivery</p>
          </a>
          <!-- Pede.ai -->
          <a href="https://pede.ai/" target="_blank" class="flex flex-col items-center">
            <img src="./static/images/pedeai.png" alt="Pede.ai" class="w-24 h-24 object-contain transition-transform transform hover:scale-110 rounded-full">
            <p class="mt-3 text-gray-700 font-semibold">Pede.ai</p>
          </a>
          <!-- iFood -->
          <a href="https://www.ifood.com.br/" target="_blank" class="flex flex-col items-center">
            <img src="./static/images/ifood.png" alt="iFood" class="w-24 h-24 object-contain transition-transform transform hover:scale-110 rounded-full">
            <p class="mt-3 text-gray-700 font-semibold">iFood</p>
          </a>
        </div>
      </div>
  
    </div>


  `

  body.appendChild(main)
}

export default createPageProduct