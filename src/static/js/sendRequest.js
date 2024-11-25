function sendRequest() {
  
  const btnSend = document.getElementById('btn-send')

  btnSend.addEventListener('click', function(){

      const form = document.getElementById('pedidoForm');
      const tamanho = form.tamanho.value;
      const sabor = form.sabor.value;
      const massa = form.massa.value;
      const adicional = form.adicional.value;
      const laco = form.laco.value;
      const pedidoEspecial = document.getElementById('special-requests').value || "Nenhum";
    
      const telefone = "557592085485"; 
    
    
      const mensagem = `Olá! Gostaria de fazer um pedido:
      - Tamanho: ${tamanho}
      - Sabor: ${sabor}
      - Massa: ${massa}
      - Adicional: ${adicional}
      - Laço: ${laco}
      - Pedido Especial: ${pedidoEspecial}`;
    
     
          const mensagemCodificada = encodeURIComponent(mensagem);
    
    
          const urlWhatsApp = `https://wa.me/${telefone}?text=${mensagemCodificada}`;
    
          window.open(urlWhatsApp, "_blank");

  })


  }


  export default sendRequest