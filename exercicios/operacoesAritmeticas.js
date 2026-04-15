function divisao1(a, b) {
    let quociente = a / b
    let resto = a % b

    return {
        quociente: quociente,
        resto: resto
    }
}

function divisao2(brindes, clientes) {

    if (isNaN(brindes) || isNaN(clientes) || brindes <= 0 || clientes <= 0) {
        return "Informação inválida"
    }

    let porCliente = Math.floor(brindes / clientes)
    let sobra = brindes % clientes

    return {
        porCliente: porCliente,
        sobra: sobra
    }
}

function multiplicacao1(a, b) {
    let resultado = a * b
    return resultado
}

function multiplicacao2(preco, quantidade) {

    if (isNaN(preco) || isNaN(quantidade) || preco <= 0 || quantidade <= 0) {
        return "Informação inválida"
    }

    let total = preco * quantidade

    if (total >= 300) {
        return {
            total: total,
            tipo: "Compra grande!"
        }
    } else {
        return {
            total: total,
            tipo: "Compra simples!"
        }
    }
}

function potencia1(base) {
    let resultado = Math.pow(base, 2)
    return resultado
}

function potencia2(base, expo) {

    if (isNaN(base) || isNaN(expo)) {
        return "Informação inválida"
    }

    let resultado = Math.pow(base, expo)

    if (resultado > 50) {
        return {
            resultado: resultado,
            classificacao: "Valor considerado: Alto!"
        }
    } else {
        return {
            resultado: resultado,
            classificacao: "Valor considerado: Baixo!"
        }
    }
}

function raiz1(numero) {
    let resultado = Math.sqrt(numero)
    return resultado
}

function raiz2(volume) {

    if (isNaN(volume) || volume <= 0) {
        return "Volume inválido"
    }

    let lado = Math.cbrt(volume)

    if (lado >= 10) {
        return {
            lado: lado,
            classificacao: "Sua Caixa é grande!"
        }
    } else {
        return {
            lado: lado,
            classificacao: "Sua Caixa é pequena!"
        }
    }
}

function soma1(a, b) {
    let resultado = a + b
    return resultado
}

function soma2(a, b) {

    if (isNaN(a) || isNaN(b)) {
        return "Valor inválido"
    }

    let soma = a + b

    if (soma > 100) {
        return {
            soma: soma,
            mensagem: "Limite ultrapassado, compre na próxima vez :("
        }
    } else {
        return {
            soma: soma,
            mensagem: "Dentro do limite, pode comprar! :)"
        }
    }
}

function subtracao1(a, b) {
    let resultado = a - b
    let resposta = {
        resultado: resultado
    }
    return resposta
}

function subtracao2(x, y) {

    if (isNaN(x) || isNaN(y)) {
        return "Valor inválido"
    }

    let resultado = x - y

    if (resultado < 0) {
        return {
            resultado: resultado,
            status: "Resultado inválido"
        }
    } else {
        return {
            resultado: resultado,
            status: "Resultado válido"
        }
    }
}

export default {
    divisao1,
    divisao2,
    multiplicacao1,
    multiplicacao2,
    potencia1,
    potencia2,
    raiz1,
    raiz2,
    soma1,
    soma2,
    subtracao1,
    subtracao2
}
