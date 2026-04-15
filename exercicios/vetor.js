function acumulacao(precos){ 
    let total = 0
    let i = 0

    while(i < precos.length){
        let preco = precos[i]

        if(isNaN(preco)){
            return "Valor inválido. Use números como 10.50"
        }

        total += preco
        i++
    }

    return {
        total: total.toFixed(2)
    }
}


function removerVetor(numeros, valorRemover) {
    let indice = numeros.indexOf(valorRemover);

    if (indice !== -1) {
        numeros.splice(indice, 1);

        return {
            mensagem: "Elemento removido com sucesso",
            vetor: numeros
        };
    } else {
        return "Elemento não encontrado";
    }
}


function buscarNumero(numeros, procurado) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === procurado) {
            return {
                mensagem: "Valor encontrado",
                posicao: i
            };
        }
    }

    return "Valor não encontrado";
}


function somarVetores() {
    const a = [1, 2, 3, 4, 5];
    const b = [5, 4, 3, 2, 1];
    let c = [];

    for (let i = 0; i < a.length; i++) {
        c[i] = a[i] + b[i];
    }

    return {
        vetorA: a,
        vetorB: b,
        vetorC: c
    };
}


export default {
    acumulacao,
    removerVetor,
    buscarNumero,
    somarVetores
}