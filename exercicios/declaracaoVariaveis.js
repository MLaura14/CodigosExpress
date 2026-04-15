function var1(estoque, vendida){

var restante = estoque - vendida

if(isNaN(restante)){
return "Valor inválido"
}

if(restante < 10){
return {
restante: restante,
situacao: "Estoque baixo"
}
}else{
return {
restante: restante,
situacao: "Estoque normal"
}
}

}


function const1(dadosPessoa) {

  const nome = "João";
  const idade = 17;
  const altura = 1.70;

  return {
    nome: nome,
    idade: idade,
    altura: altura
  };

}



function let1(mostrarNome) {

  let nome = "Ana";

  return {
    nome: nome
  };

}


export default {
var1,
const1,
let1
}