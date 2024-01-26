let numMax = 10;
let numSorteados = [];
let secretNumber = geraNum();
let tentativas = 0;
let chutarBtn = document.getElementById('chutarBtn');
let novoJogoBtn = document.getElementById('reiniciar');
console.log("Número:" + secretNumber);

function escreveMsg( tag, msg ){
  let element = document.querySelector(tag);
  element.innerHTML = msg;
}

function geraNum(){
    let numSort = parseInt(Math.random() * numMax + 1);
    let elementosNaLista = numSorteados.length;

    if(elementosNaLista == numMax){
      numSorteados = [];
    }

    if(numSorteados.includes(numSort)){
      return geraNum();
    }else{
      numSorteados.push(numSort);
      console.log(numSorteados);
      return numSort;
    }
}

function limpaCampo (){
  chute.value = '';
}

function resetaJogo(){
  secretNumber = geraNum();
  console.log("Número:" + secretNumber);
  chutarBtn.removeAttribute('disabled');
  novoJogoBtn.disabled = true;
  limpaCampo();
  tentativas = 0;
  escreveMsg('#titulo', 'Adivinhe o numero secreto');
  escreveMsg('#paragrafo', `Escolha um número entre 1 a ${numMax}`);
}

function verificaChute(){
    let chute = document.querySelector("#chute");
    tentativas++;

    //Verificar se o número foi digitado e > 0;
    if(chute.value == ''){
      alert('Infome um número!');
    }

  //Verifica o acerto do número
  if (chute.value == secretNumber){
    escreveMsg('h1', `Acertou! O número secreto é ${secretNumber}`);
    if(tentativas => 1){
      escreveMsg('p', `Em ${tentativas} Tentativa `);
    }else{
      escreveMsg('p', `Em ${tentativas} Tentativas `);
    }
    //Desabilita botão chutar
    chutarBtn.disabled = true;
    //Habilita o botão Novo Jogo
    novoJogoBtn.removeAttribute('disabled');
  }else{
    limpaCampo();
    if (chute.value < secretNumber){
      escreveMsg('p', `O número secreto é maior!`);
    }else{
      escreveMsg('p', `O número secreto é menor!`);
    }
  }

}
