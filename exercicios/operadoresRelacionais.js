function maior(idade){

if(isNaN(idade)){
return "Idade inválida"
}

if(idade > 16){
return "Entrada liberada."
}
else if(idade == 16){
return "Entrada permitida com autorização."
}
else{
return "Entrada não permitida."
}

}


function igual(senha){

const senhaCorreta = 1408

if(senha == senhaCorreta){
return "Cofre aberto com sucesso!"
}else{
return "Senha incorreta. Acesso negado :("
}

}


function maiorOuIgual(nota){

if(isNaN(nota)){
return "Nota inválida"
}

if(nota >= 6){
return "Aluno aprovado! Glória :)"
}else{
return "Aluno reprovado :("
}

}


function menorOuigual(verificarNota) {

  let nota = 6;

  if (nota <= 5) {
    return "Precisa melhorar";
  } else {
    return {
      mensagem: "Nota suficiente"
    };
  }

}


function menor(verificarAprovacao) {

  let nota = 4;

  if (nota < 6) {
    return "Reprovado";
  } else {
    return {
      mensagem: "Aprovado"
    };
  }

}


function diferenteDe(verificarIdade) {

  let idade = 16;

  if (idade != 18) {
    return "A idade é diferente de 18";
  } else {
    return {
      mensagem: "A idade é 18"
    };
  }

}



export default {
maior,
igual,
maiorOuIgual,
menorOuigual,
menor,
diferenteDe
}