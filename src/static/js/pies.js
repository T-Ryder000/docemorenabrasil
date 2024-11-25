const createPagePies = ()=>{


  console.log("Funcionando!")

  
  const body = document.querySelector("#body")

  const main = document.createElement('main')
  main.className = "main-pies pb-16"
  main.style.backgroundColor = "#F4F6F9"

  main.innerHTML = `
     <section class="banner overflow-hidden relative pb-10 bg-black rounded" style=" min-height: 550px; ">

    <div class="bg-black rounded">
        <div class="p-24 h-full w-full rounded" style="background-image: url(./static/images/tortafundo.PNG); background-size: cover;  opacity: 0.3;"></div>
    </div>

    <div class="w-full flex justify-center">
        <img class="rounded-full w-24 h-24 md:w-24 md:h-24 mx-auto mb-10 absolute top-36" src="./static/images/logo.png" alt="logo da doce morena">
    </div>

    <h1 class="text-6xl font-extrabold text-center text-yellow-400 mt-16">Catálogo de Tortas</h1>
    <p class="text-center my-6 text-2xl  text-blue-500 font-bold">Faça agora sua encomenda!</p>

    <div class="w-full text-center mt-12">
        <a class="mt-3 px-6 py-3 bg-yellow-300 rounded-lg hover:bg-yellow-900 font-bold shadow transition animate__animated animate__pulse animate__infinite"
        href="#assemble">
            Monte sua torta agora
        </a>
    </div>
    </section>
    <div class="max-w-5xl mx-auto p-0 md:p-8">
        <br>
        <hr>

        <section class="max-w-5xl mx-auto p-3 md:p-8" bg-white shadow-md rounded-lg">
            <h2 class="text-3xl font-bold text-gray-950 mb-8 text-center">Tabela de Preços</h2>
            <br>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-blue-500">
                <div class="p-6 bg-black shadow-sm rounded-lg text-center">
                    <h3 class="text-2xl font-semibold  mb-4 text-yellow-400">P</h3>
                    <hr>
                    <br>
                    <p class="text-xl font-bold mb-4">R$ 80,00</p>
                    <p class="text-lg text-yellow-400 mb-4">Aumento por Sabor Especial:</p>
                    <p class="text-xl font-bold ">R$ 5,00</p>
                </div>
                <div class="p-6 bg-black shadow-sm rounded-lg text-center">
                    <h3 class="text-2xl font-semibold  mb-4 text-yellow-400">M</h3>
                    <hr>
                    <br>
                    <p class="text-xl font-bold  mb-4">R$ 120,00</p>
                    <p class="text-lg text-yellow-400 mb-4">Aumento por Sabor Especial:</p>
                    <p class="text-xl font-bold ">R$ 10,00</p>
                </div>
                <div class="p-6 bg-black shadow-sm rounded-lg text-center">
                    <h3 class="text-2xl font-semibold  mb-4 text-yellow-400">G</h3>
                    <hr>
                    <br>
                    <p class="text-xl font-bold  mb-4">R$ 150,00</p>
                    <p class="text-lg text-yellow-400 mb-4">Aumento por Sabor Especial:</p>
                    <p class="text-xl font-bold ">R$ 15,00</p>
                </div>
                <div class="p-6 bg-black shadow-sm rounded-lg text-center">
                    <h3 class="text-2xl font-semibold  mb-4 text-yellow-400">GG</h3>
                    <hr>
                    <br>
                    <p class="text-xl font-bold  mb-4">R$ 190,00</p>
                    <p class="text-lg text-yellow-400 mb-4">Aumento por Sabor Especial:</p>
                    <p class="text-xl font-bold ">R$ 20,00</p>
                </div>
            </div>
        </section>
        

            <!-- Sessão 5: Massas -->
            <section class="max-w-5xl mx-auto p-3 md:p-8 mt-10">
            <h2 class="text-2xl font-semibold text-gray-950 mb-6">Opções de Massas</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div class="bg-white p-4 rounded-lg shadow-lg text-center">
                    
                    <img src="./static/images/massatradicional.PNG" alt="imagem da massa tradicional">
                    <h3 class="text-lg font-bold text-gray-800 mt-5">Massa Tradicional</h3>
                    
                </div>
            
                <div class="bg-white p-4 rounded-lg shadow-lg text-center">
                    
                    <img src="./static/images/massachocolate.PNG" alt="imagem da massa de chocolate">
                    <h3 class="text-lg font-bold text-gray-800 mt-5">Massa de Chocolate</h3>
                </div>

                <div class="bg-white p-4 rounded-lg shadow-lg text-center">
            
                    <img src="./static/images/massamesclada.PNG" alt="imagem da massa mesclada">
                    
                    <h3 class="text-lg font-bold text-gray-800 mt-5">Massa Mesclada</h3>
                </div>
            </div>
            </section>


        <section class="max-w-5xl mx-auto p-3 md:p-8 mt-10">
            <!-- Sabores -->
            <h2 class="text-2xl font-semibold text-gray-950 mb-4">Sabores Disponíveis</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg ">
                <div class="p-4 border border-gray-300 rounded-lg bg-white">
                    <h3 class="font-bold text-lg text-gray-900 mb-4">Sabores que não alteram o valor:</h3>
                    <ul class="list-disc list-inside text-gray-800 font-bold space-y-2">
                        <li>Beijinho</li>
                        <li>Prestígio</li>
                        <li>Bem Casado</li>
                        <li>Brigadeiro</li>
                    </ul>
                </div>
                <div class="p-4 border border-gray-300 rounded-lg bg-white">
                    <h3 class="font-bold text-lg text-gray-900 mb-4">Sabores que alteram o valor:</h3>
                    <ul class="list-disc list-inside text-gray-800 font-bold space-y-2">
                        <li>Castanha com Brigadeiro Branco</li>
                        <li>Cappuccino com Brigadeiro</li>
                        <li>Doce de Leite com Brigadeiro Branco</li>
                        <li>Doce de Leite com Coco</li>
                        <li>Mousse de Maracujá com Brigadeiro Branco</li>
                        <li>Ninho com Brigadeiro e Morango</li>
                        <li>Brigadeiro Trufado</li>
                    </ul>
                </div>
            </div>
            
            
        </section>

        <section class="max-w-5xl mx-auto p-3 md:p-8 mt-10">
        <h2 class="text-2xl font-semibold text-gray-950 mb-6">Doces Disponíveis</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/brigadeiro.PNG" alt="imagem do brigadeiro">
                <h3 class="text-xl font-bold text-gray-800 mt-5">Brigadeiro</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/beijinho.PNG" alt="imagem do Beijinho">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Beijinho</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/ninho.PNG" alt="imagem do Ninho">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Ninho</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/bem casado.PNG" alt="imagem do Bem-casado">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Bem-casado</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/floquinho.PNG" alt="imagem do Floquinho">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Floquinho</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/ferreiro.PNG" alt="imagem do Ferreiro">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Ferreiro</h3>
            </div>
                
        </div>
    </section>

    <section class="max-w-5xl mx-auto p-3 md:p-8 mt-10">
        <h2 class="text-2xl font-semibold text-gray-950 mb-6">Adicionais Disponíveis</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/morango.PNG" alt="imagem do Morango">
                <h3 class="text-xl font-bold text-gray-800 mt-5">Morango</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/uva.PNG" alt="imagem do Uva">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Uva</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/cereja.PNG" alt="imagem do Cereja">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Cereja</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/raspasbranco.PNG" alt="imagem do BRaspas de chocolate branco">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Raspas de chocolate branco</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/raspas.PNG" alt="imagem do Raspas de chocolate">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Raspas de chocolate</h3>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src="./static/images/cascasbombom.PNG" alt="imagem do Cascas de bombom">
                <h3 class="text-xl text-center font-bold text-gray-800 mt-5">Cascas de bombom</h3>
            </div>
            
        </div>
    </section>


    <section class="max-w-5xl mx-auto p-3 md:p-8 mt-10">
        <h2 class="text-2xl font-semibold text-gray-950 mb-6">Opções de Laço Decorativo</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src="./static/images/marrom.PNG" alt="Laço Marrom" class="w-full h-40 object-cover rounded-lg mb-2">
                <h3 class="text-lg font-bold text-gray-800">Marrom</h3>
                <p class="text-gray-600"><small>(Tom ilustrativo)</small></p>
            </div>
        
            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src="./static/images/dourado.PNG" alt="Laço Dourado" class="w-full h-40 object-cover rounded-lg mb-2">
                <h3 class="text-lg font-bold text-gray-800">Dourado</h3>
                <p class="text-gray-600"><small>(Tom ilustrativo)</small></p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src="./static/images/offwhite.PNG" alt="Laço Off white" class="w-full h-40 object-cover rounded-lg mb-2">
                <h3 class="text-lg font-bold text-gray-800">Off white</h3>
                <p class="text-gray-600"><small>(Tom ilustrativo)</small></p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src="./static/images/rosegold.PNG" alt="Laço Rosê gold" class="w-full h-40 object-cover rounded-lg mb-2">
                <h3 class="text-lg font-bold text-gray-800">Rosê gold</h3>
                <p class="text-gray-600"><small>(Tom ilustrativo)</small></p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src="./static/images/Perolado.PNG" alt="Laço Perolado" class="w-full h-40 object-cover rounded-lg mb-2">
                <h3 class="text-lg font-bold text-gray-800">Perolado</h3>
                <p class="text-gray-600"><small>(Tom ilustrativo)</small></p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-lg text-center">
                <img src="./static/images/vermelho.PNG" alt="Laço Vermelho" class="w-full h-40 object-cover rounded-lg mb-2">
                <h3 class="text-lg font-bold text-gray-800">Vermelho</h3>
                <p class="text-gray-600"><small>(Tom ilustrativo)</small></p>
            </div>
        </div>
    </section>


        <section class="max-w-5xl mx-auto p-3 md:p-8 mt-10">
            <h2 class="text-3xl font-semibold text-gray-950 mb-6">Galeria de Tortas</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img class="w-full" src="../static/images/torta1.PNG" alt="Torta 1" class="rounded-lg shadow-lg">
                <img class="w-full" src="../static/images/torta2.PNG" alt="Torta 2" class="rounded-lg shadow-lg">
                <img class="w-full" src="../static/images/torta3.PNG" alt="Torta 3" class="rounded-lg shadow-lg">
                <img class="w-full" src="../static/images/torta4.PNG" alt="Torta 4" class="rounded-lg shadow-lg">
                <img class="w-full" src="../static/images/torta5.PNG" alt="Torta 5" class="rounded-lg shadow-lg">
                <img class="w-full" src="../static/images/torta6.PNG" alt="Torta 6" class="rounded-lg shadow-lg">
                <img class="w-full" src="../static/images/torta7.PNG" alt="Torta 7" class="rounded-lg shadow-lg">
                <img class="w-full" src="../static/images/torta8.PNG" alt="Torta 8" class="rounded-lg shadow-lg">
                <img class="w-full" src="../static/images/torta9.PNG" alt="Torta 9" class="rounded-lg shadow-lg">
            </div>
        </section>

        
        
        <section class="max-w-5xl mx-auto p-3 md:p-8 mt-10" id="assemble">
            <h2 class="text-3xl font-semibold text-gray-950 mb-6 text-center">Monte sua Torta</h2>
            <hr>
            <br>
            <form id="pedidoForm" class="space-y-6">
                <!-- Primeira Linha: Tamanho e Sabor -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-black font-bold">Tamanho</label>
                        <select name="tamanho" class="block w-full bg-gray-300 mt-2 border-gray-300 rounded-lg px-4 py-2">
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                            <option value="GG">GG</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-black font-bold">Sabor</label>
                        <select name="sabor" class="block w-full bg-gray-300 mt-2 border-gray-300 rounded-lg px-4 py-2">
                            <option value="Brigadeiro">Brigadeiro</option>
                            <option value="Castanha com Brigadeiro Branco">Castanha com Brigadeiro Branco</option>
                            <!-- Adicione outros sabores aqui -->
                        </select>
                    </div>
                </div>
                
                <!-- Segunda Linha: Massa e Adicional -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-black font-bold">Massa</label>
                        <select name="massa" class="block w-full bg-gray-300 mt-2 border-gray-300 rounded-lg px-4 py-2">
                            <option value="Chocolate">Chocolate</option>
                            <option value="Tradicional">Tradicional</option>
                            <option value="Mesclada">Mesclada</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-black font-bold">Adicional</label>
                        <select name="adicional" class="block w-full bg-gray-300 mt-2 border-gray-300 rounded-lg px-4 py-2">
                            <option value="Morango">Morango</option>
                            <option value="Uva">Uva</option>
                            <option value="Cereja">Cereja</option>
                        </select>
                    </div>
                </div>
                
                <!-- Terceira Linha: Laço -->
                <div>
                    <label class="block text-black font-bold">Laço</label>
                    <select name="laco" class="block w-full bg-gray-300 mt-2 border-gray-300 rounded-lg px-4 py-2">
                        <option value="Marrom">Marrom</option>
                        <option value="Dourado">Dourado</option>
                        <option value="Off White">Off White</option>
                    </select>
                </div>
                
                <!-- Quarta Linha: Pedido Especial -->
                <div>
                    <label for="special-requests" class="block font-bold mb-2">Algum pedido especial?</label>
                    <textarea id="special-requests" rows="4" class="w-full border border-gray-300 bg-gray-300 rounded-lg px-4 py-2" placeholder="Escreva aqui..."></textarea>
                </div>
        
                <!-- Botão Enviar -->
                <div class="w-full text-center">
                    <button type="button" id="btn-send" class="mt-3 px-6 py-3 bg-yellow-300 rounded-lg hover:bg-yellow-500 font-bold transition">
                        Enviar Pedido
                    </button>
                </div>
            </form>
        </section>
        
    </div>
  `

  body.appendChild(main)
}

export default createPagePies