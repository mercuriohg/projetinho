function carregar(){
      const msg = document.getElementById('msg')
      const img = document.getElementById('img')
      const tempoH = document.getElementById('hora')
      const tempoM = document.getElementById('minuto')
      const tempoS = document.getElementById('segundo')

      function atualizarRelogio() {
        const data = new Date()
        let hora = data.getHours()
        let minutos = data.getMinutes()
        let segundos = data.getSeconds()

        // Adiciona zero à esquerda
        if (hora < 10) hora = '0' + hora
        if (minutos < 10) minutos = '0' + minutos
        if (segundos < 10) segundos = '0' + segundos

        tempoH.textContent = hora
        tempoM.textContent = minutos
        tempoS.textContent = segundos

        // Muda o fundo e imagem conforme a hora
        if (data.getHours() >= 6 && data.getHours() < 12) {
          
          document.body.style.background = '#f6d55c'
          img.src = 'img/manha-redimensionado.jpg'
        } else if (data.getHours() >= 12 && data.getHours() < 18) {
          
          document.body.style.background = '#efb810'
          img.src = 'img/tarde-redimensionado.jpg'
        } else {
    
          document.body.style.background = '#03318c'
          img.src = 'img/noite-redimensionado.jpg'
        }
      }

      // Atualiza imediatamente e a cada segundo
      atualizarRelogio()
      setInterval(atualizarRelogio, 1000)
    }

