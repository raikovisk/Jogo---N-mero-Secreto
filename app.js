let numMax = 10;
let numSorteados = [];
let secretNumber = geraNum();
let tentativas = 0;
console.log("Número:" + secretNumber);

function escreveMsg( tag, msg ){
  let element = document.querySelector(tag);
  element.innerHTML = msg;
}

function geraNum(){
    let numSort = parseInt(Math.random() * numMax + 1);
    if(numSorteados.includes(numSort)){
      numSort = parseInt(Math.random() * numMax + 1);
    }else{
      numSorteados.push(numSort);
      return numSort;
    }
    console.log(numSorteados);
}

function limpaCampo (){
  chute.value = '';
}

function resetaJogo(){
  secretNumber = geraNum();
  limpaCampo();
  tentativas = 0;
  escreveMsg('#titulo', 'Adivinhe o numero secreto');
  escreveMsg('#paragrafo', `Escolha um número entre 1 a ${numMax}`);
}

function verificaChute(){
    let chute = document.querySelector("#chute");
    tentativas++;

  if (chute.value == secretNumber){
    escreveMsg('h1', `Acertou! O número secreto é ${secretNumber}`);
    if(tentativas => 1){
      escreveMsg('p', `Em ${tentativas} Tentativa `);
    }else{
      escreveMsg('p', `Em ${tentativas} Tentativas `);
    }
    //Habilita o botão Novo Jogo
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    limpaCampo();
    if (chute.value < secretNumber){
      escreveMsg('p', `O número secreto é maior!`);
    }else{
      escreveMsg('p', `O número secreto é menor!`);
    }
  }

}
