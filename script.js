let largura = 0
let altura = 0
let vidas = 1
let tempo = 10


//selecionar nivel
let criaTempoMosquito = 1500

let nivel = window.location.search  //procura o parametro nivel
nivel = (nivel.replace('?', ''))

if(nivel === 'normal'){
  criaTempoMosquito = 1500
} else if(nivel === 'dificil'){
  criaTempoMosquito = 900
} else if(nivel === 'dificil2'){
  criaTempoMosquito = 650
} //final selecionar nivel


function ajustarTamanhoPalcoJogo(){
  //inner.Width mede o tamanho da tela
  largura = window.innerWidth  
  altura = window.innerHeight
}
ajustarTamanhoPalcoJogo()


//----- cronometro
let cronometro = setInterval(function(){
  tempo -=1
  if(tempo < 0){
    clearInterval(cronometro)  //para de contar o tempo quando o jogo acaba
    clearInterval(criaMosquito)  //para de criar mosquitos quando o jogo acaba
    window.location.href = 'vitoria.html'
  } else {
    document.getElementById('cronometro').innerHTML = tempo
  }

}, 1000) //final cronometro


function posicaoAleatoria() {
  //remove mosquito anterior(caso exista)
  if(document.getElementById('mosquito')){
      document.getElementById('mosquito').remove()

      //logica de perder a vida
      if(vidas > 3){
        window.location.href = 'fimDeJogo.html'
      } else {
        document.getElementById('vida' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
      }
  } 
  //math.floor = arrendonda o valor tirando a virgula do numero
  //math.random = cria numeros aleatorios / -100 pro mosquito nao ser criado fora da janela, -
  let posicaoX = Math.floor(Math.random() * largura) - 100
  let posicaoY = Math.floor(Math.random() * altura) - 100

  //se a posicaox for < que 0 entao recebe 0 senao (:) recebe posicaX
  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY
  
  console.log(posicaoX, posicaoY)
  
  //criar mosquito no html de forma dinamica no js
  let mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosquito.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  //add mosquito nas posicoes aleatorias
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'
  mosquito.onclick = function(){
    this.remove()
  }
  
  document.body.appendChild(mosquito)

  tamanhoAleatorio()
  
}


//criar tamanhos aleatorios para o mosquito. A variavel tamanhoMosquito recebe um valor entre 1 e 3 gerado pela logica do math(). Depois com swtich escolhe entre os 3 tamanhos para mudar a classe (linha27).
function tamanhoAleatorio(){
  let tamanhoMosquito = Math.floor(Math.random() * 3)
  switch(tamanhoMosquito){
    case 0:
      return 'mosquito1'

    case 1:
      return 'mosquito2'

    case 2:
      return 'mosquito3'
  }
}


function ladoAleatorio(){
  let ladoMosquito = Math.floor(Math.random() * 2)

  switch(ladoMosquito){
    case 0:
      return 'ladoA'
    
    case 1:
      return 'ladoB'
  }
}
