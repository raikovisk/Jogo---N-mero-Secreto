let secretNumber = geraNum();
let tentativas = 0;
console.log("Número:" + secretNumber);

function escreveMsg( tag, msg ){
  let element = document.querySelector(tag);
  element.innerHTML = msg;
}

function geraNum(){
    return parseInt(Math.random() * 10) + 1;
}

function verificaChute(){
    let chute = document.querySelector("#chute").value;
    tentativas++;
  if (chute == secretNumber){
    escreveMsg('h1', `Acertou! O número secreto é ${secretNumber}`);
    if(tentativas => 1){
      escreveMsg('p', `Em ${tentativas} Tentativa `);
    }else{
      escreveMsg('p', `Em ${tentativas} Tentativas `);
    }
  }else{
      if (chute < secretNumber){
        escreveMsg('p', `O número secreto é maior!`);
      }else{
        escreveMsg('p', `O número secreto é menor!`);
      }
    }
}

function resetaJogo(){
  
}