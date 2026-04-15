function ifElse1(valorCompra){

if(isNaN(valorCompra) || valorCompra <= 0){
return "Valor inválido"
}

if(valorCompra <= 100){
return "Sem desconto. Valor final: R$ " + valorCompra.toFixed(2)
}

else if(valorCompra <= 300){
let total = valorCompra * 0.90
return "Desconto de 10%. Valor final: R$ " + total.toFixed(2)
}

else{
let total = valorCompra * 0.80
return "Desconto de 20%. Valor final: R$ " + total.toFixed(2)
}

}



function ternario(sinal){

let mensagem = (sinal == 1) ? "Pode passar! :)" : "Pare!!!!"

return mensagem

}



function ifElse2(pesoPeixe){

let precoKg
let total

if(isNaN(pesoPeixe) || pesoPeixe <= 0){
return "Peso inválido"
}

else if(pesoPeixe <= 3){
precoKg = 25
total = pesoPeixe * precoKg
}

else if(pesoPeixe <= 5){
precoKg = 24
total = pesoPeixe * precoKg
}

else if(pesoPeixe <= 10){
precoKg = 23
total = pesoPeixe * precoKg
}

else{
precoKg = 20
total = (pesoPeixe * precoKg) + 30
}

return "Valor total da compra: R$ " + total.toFixed(2)

}


function switchCase(opcao) {

  switch (parseInt(opcao)) {
    case 1:
      return { mensagem: "Olá, seja bem-vindo!" };

    case 2:
      return { mensagem: "Espero que você esteja bem!" };

    case 3:
      return { mensagem: "Saindo do programa..." };

    default:
      return "Opção inválida!";
  }

}

export default {
ifElse1,
ternario,
ifElse2,
switchCase
}