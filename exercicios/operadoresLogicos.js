function ou1(idade, estudante){

if(isNaN(idade) || isNaN(estudante)){
return "Informação inválida"
}

if(idade >= 60 || estudante == 1){
return {
tipo: "Entrada gratuita"
}
}else{
return {
tipo: "Entrada paga"
}
}

}


function not1(verificarCarteira) {

  let temCarteira = true;

  if (!temCarteira) {
    return "Não pode dirigir";
  } else {
    return {
      mensagem: "Pode dirigir"
    };
  }

}


function E1 (verificarDirecao) {

  let idade = 20;
  let temCarteira = true;

  if (idade >= 18 && temCarteira) {
    return {
      mensagem: "Pode dirigir"
    };
  } else {
    return "Não pode dirigir";
  }

}



export default {
ou1,
not1,
E1
}