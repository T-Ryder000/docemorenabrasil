const createPageAbout = ()=>{


  console.log("Funcionando!")

  
  const body = document.querySelector("#body")

  const main = document.createElement('main')
  main.className = "main-about bg-white"

  main.innerHTML = `
   <section class="banner overflow-hidden relative bg-black" style="min-height: 550px; ">
    <!-- Imagem de fundo -->
    <div 
      class="w-full h-full absolute bg-cover bg-fixed" 
      style="background-image:url(./static/images/sorvetes.jpg); background-attachment: fixed; opacity: 0.3;">
    </div>

    <!-- Conteúdo -->
    <div class="z-10 absolute top-0 w-full h-full flex flex-col justify-end items-center text-center gap-5 ">


      <img class="rounded-full w-16 h-16 md:w-16 md:h-16 mx-auto mb-10" src="./static/images/logo.png" alt="logo da doce morena">

      <!-- Título -->
      <h1 class="text-5xl text-white lg:text-6xl font-extrabold leading-none">
        NOSSA HISTÓRIA
      </h1>

      <!-- Slogan -->
      <p class="text-lg md:text-2xl font-semibold leading-tight text-white">
        Nós simplesmente, <span class="text-yellow-500">Amamos sorvete!</span>
      </p>

      <img class="" src="./static/images/3casquinhas.png" alt="imagem de tres casquinhas" style="max-width: 400px;">


    </div>
  </section>

  <div class="max-w-4xl lg:max-w-5xl mx-auto flex flex-col-reverse lg:flex-row lg:items-start items-center gap-8 px-3 py-16 lg:text-left ">
    <div class="lg:w-1/2 bg-white  shadow-lg overflow-hidden transition-transform transform cursor-pointer">
      <img src="./static/images/sobre.PNG" alt="Sobre" class="w-full object-cover ">
    </div>
    <div class="lg:w-1/2 h-full flex flex-col justify-between">
      <p class="text-4xl font-semibold tracking-wide text-gray-800">SOMOS UMA DAQUELAS EMPRESAS "DE PAI PARA FILHO"</p>
      <p class="text-xl text-gray-700 mt-3 leading-relaxed">
        Com mais de 37 anos de fábrica e apenas 8 anos de loja, firmamos a nossa visão em um crescimento sustentável; multiplicar nossos resultados sem perder a nossa qualidade é a nossa missão. A parceria com os nossos clientes, parceiros, franqueados e colaboradores nos impulsiona e mantém nossos valores ativos e nunca altivos.
      </p>
    </div>
  </div>

  <div class="max-w-4xl lg:max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-start items-center gap-8 px-3 py-16 lg:text-left">
    <!-- Texto -->
    <div class="lg:w-1/2 h-full flex flex-col justify-between">
      <p class="text-4xl font-semibold tracking-wide text-gray-800">O COMEÇO</p>
      <p class="text-xl text-gray-700 mt-3 leading-relaxed">
        Fundamos nossa fábrica em 1985 como um dos pioneiros na produção de sorvetes artesanais do interior da Bahia (região sisaleira). 
        Há mais de 37 anos aperfeiçoando receitas e criando sabores, fomos considerados por muitos como os melhores da região no seguimento. 
        Ao longo da história tivemos outros nomes, mas preservamos nossa receita e a gestão familiar, até chegarmos na então Doce Morena.
      </p>
    </div>
  
    <div class="lg:w-1/2 overflow-hidden transition-transform transform cursor-pointer">
      <img src="./static/images/about2.jpg" alt="Sobre" class="w-full object-cover ">
    </div>
  </div>

  <div class="max-w-4xl lg:max-w-5xl mx-auto flex flex-col lg:items-start items-center gap-8 px-3 pt-20 pb-32 lg:text-left">
    <!-- Texto -->
    <div class=" h-full flex flex-col justify-between">
      <p class="text-4xl font-semibold tracking-wide text-gray-800 lg:text-center">EXPANSÃO</p>
      <p class="text-xl text-gray-700 mt-3 leading-relaxed lg:text-center">
        Hoje ampliamos a nossa visão, acompanhamos as tendências do mercado investido na produção de cremes de Açaí e Criando a Franquiadora "Doce Morena" com o intuito de melhor apresentar a nossa empresa e a nossa história ao consumidor final.
      </p>
    </div>
  
    <div class="flex justify-center flex-wrap gap-10 mt-5">
      <img src="./static/images/burguer.PNG" alt="Sobre" class="rounded-full object-cover aspect-square shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-3 w-1/3 lg:w-1/6">
      <img src="./static/images/cafe.PNG" alt="Sobre" class="rounded-full object-cover aspect-square shadow-lg transform transition duration-500 hover:scale-105 hover:-rotate-3 w-1/3 lg:w-1/6">
      <img src="./static/images/cone.PNG" alt="Sobre" class="rounded-full object-cover aspect-square shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-6 w-1/3 lg:w-1/6">
      <img src="./static/images/sucos.PNG" alt="Sobre" class="rounded-full object-cover aspect-square shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-6 w-1/3 lg:w-1/6">
    </div>
  </div>

  <section class="w-full mb-16 pb-16 animate__animated animate__fadeInLeft">
    <img class="mx-auto rounded-l-full" src="./static/images/imagemdebaixo2.png" alt="imagem de homem com sorvete">
  </section>
    
  `

  body.appendChild(main)
}

export default createPageAbout