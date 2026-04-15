import express from "express"
import pagina from "./template.js"

import operacoes from "./exercicios/operacoesAritmeticas.js"
import lacos from "./exercicios/lacosRepeticao.js"
import variaveis from "./exercicios/declaracaoVariaveis.js"
import operadores from "./exercicios/operadoresLogicos.js"
import vetor from "./exercicios/vetor.js"
import relacionais from "./exercicios/operadoresRelacionais.js"
import decisao from "./exercicios/tomadaDecisao.js"

const app = express()

//OPERAÇÕES ARITMÉTICASS

// ===============================
// 🟢 PARAMS (2 primeiros)
// ===============================

// DIVISÃO 1
/*Neste código o usuário digita dois números e vê ao final 
a divisão de ambos e o resto da divisão!*/
app.get("/divisao1/:a/:b", (req, res) => {

  let a = Number(req.params.a)
  let b = Number(req.params.b)

  let resultado = operacoes.divisao1(a, b)

  res.send({ msg: "Resultado da divisão", ...resultado })

})


// DIVISÃO 2
/*Neste código o usuário digita a quantidade de brindes e de clientes,
para assim o programa calcular quantos brindes vão ser distribuidos e
quantos sobram!*/
app.get("/divisao2/:brindes/:clientes", (req, res) => {

  let brindes = Number(req.params.brindes)
  let clientes = Number(req.params.clientes)

  let resultado = operacoes.divisao2(brindes, clientes)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Distribuição de brindes", ...resultado }
  )

})


// ===============================
// 🔵 QUERY (restante)
// ===============================

// MULTIPLICAÇÃO 1
/*Neste código o usuário digita dois números e vê ao final 
a multiplicação de ambos!*/
app.get("/multiplicacao1", (req, res) => {

  let a = Number(req.query.a)
  let b = Number(req.query.b)

  let resultado = operacoes.multiplicacao1(a, b)

  res.send({ msg: "Resultado da multiplicação", valor: resultado })

})


// MULTIPLICAÇÃO 2
/*Neste código o usuário digita o preço do produtos e a quantidade,
e assim ele vê se sua compra é grande ou pequena!*/
app.get("/multiplicacao2", (req, res) => {

  let preco = Number(req.query.preco)
  let qtd = Number(req.query.qtd)

  let resultado = operacoes.multiplicacao2(preco, qtd)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resumo da compra", ...resultado }
  )

})


// POTÊNCIA 1
/*Neste código o usuário digita uma base, e ao final vê
a potenciação elevada ao quadrado dessa base digitada pelo mesmo!*/
app.get("/potencia1", (req, res) => {

  let base = Number(req.query.base)

  let resultado = operacoes.potencia1(base)

  res.send({ msg: "Potência ao quadrado", valor: resultado })

})


// POTÊNCIA 2
/*Neste código o usuário digita uma base, e ao final vê
a potenciação elevada ao expoente que ele define e vê se o resultado,
é um valor alto ou baixo!*/
app.get("/potencia2", (req, res) => {

  let base = Number(req.query.base)
  let expoente = Number(req.query.expoente)

  let resultado = operacoes.potencia2(base, expoente)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da potência", ...resultado }
  )

})


// RAIZ 1
/*Neste programa o usuário coloca o valor do volume de sua caixa e 
vê quais são os cm cúbicos, e se sua caixa é grande ou pequena!*/
app.get("/raiz1", (req, res) => {

  let valor = Number(req.query.valor)

  let resultado = operacoes.raiz1(valor)

  res.send({ msg: "Raiz quadrada", valor: resultado })

})


// RAIZ 2
/*Neste código o usuário digita um número e vê informações sobre a caixa!*/
app.get("/raiz2", (req, res) => {

  let valor = Number(req.query.valor)

  let resultado = operacoes.raiz2(valor)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Dimensão da caixa", ...resultado }
  )

})


// SOMA 1
/*Neste código o usuário digita dois números e vê ao final a soma de ambos!*/
app.get("/soma1", (req, res) => {

  let a = Number(req.query.a)
  let b = Number(req.query.b)

  let resultado = operacoes.soma1(a, b)

  res.send({ msg: "Resultado da soma", valor: resultado })

})


// SOMA 2
/*Neste código o usuário digita dois valores de sua compra, o programa faz 
a soma, e diz ao usuário se ele pode ou não efetuar a compra!*/
app.get("/soma2", (req, res) => {

  let a = Number(req.query.a)
  let b = Number(req.query.b)

  let resultado = operacoes.soma2(a, b)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resumo da compra", ...resultado }
  )

})


// SUBTRAÇÃO 1
/*Neste código o usuário digita dois números e vê ao final a subtração de ambos!*/
app.get("/subtracao1", (req, res) => {

  let a = Number(req.query.a)
  let b = Number(req.query.b)

  let resultado = operacoes.subtracao1(a, b)

  res.send({ msg: "Resultado da subtração", ...resultado })

})


// SUBTRAÇÃO 2
/*Neste código o usuário digita 2 números, e assim o programa faz a 
subtração e diz se o resultado é válido ou inválido!*/
app.get("/subtracao2", (req, res) => {

  let a = Number(req.query.a)
  let b = Number(req.query.b)

  let resultado = operacoes.subtracao2(a, b)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da subtração", ...resultado }
  )

})

/*SOMA 1 COM CSS TURBINADO

app.get("/soma1", (req, res) => {

    const resultado = operacoes.soma1(20, 15)

    res.send(
        pagina(
            "Exercício de Soma",
            "Resultado da soma: " + resultado
        )
    )

})
*/

// LAÇOS DE REPETIÇÃOOO

// ===============================
// 🟢 PARAMS (2 primeiros)
// ===============================

// DO WHILE 1
/*O código abaixo pede ao usuário que digite 5 números inteiros, 
assim ao final ele mostra, dos números digitados pelo usuário, o total de negativos, positivos,
zeros, ímpares e pares!*/
app.get("/dowhile1/:n1/:n2/:n3/:n4/:n5", (req, res) => {

  let numeros = [
    Number(req.params.n1),
    Number(req.params.n2),
    Number(req.params.n3),
    Number(req.params.n4),
    Number(req.params.n5)
  ]

  let resultado = lacos.doWhile1(numeros)

  res.send({ msg: "Resumo dos números", ...resultado })

})


// DO WHILE 2
/*Este código faz a impressão na tela dos números de 1 a 100!*/
app.get("/dowhile2", (req, res) => {

  let resultado = lacos.doWhile2()

  res.send({ msg: "Números de 1 a 100", numeros: resultado })

})


// ===============================
// 🔵 QUERY (restante)
// ===============================

// WHILE 1
/*Neste código o usuário digita idade de 5 pessoas, e vê ao final o total de 
menores e maiores de idade!*/
app.get("/while1", (req, res) => {

  let idades = [
    Number(req.query.i1),
    Number(req.query.i2),
    Number(req.query.i3),
    Number(req.query.i4),
    Number(req.query.i5)
  ]

  let resultado = lacos.while1(idades)

  res.send({ msg: "Classificação por idade", ...resultado })

})


// WHILE 2
/*O código abaixo mostra os números pares de 1 até 500!*/
app.get("/while2", (req, res) => {

  let resultado = lacos.while2()

  res.send({ msg: "Números pares de 1 até 500", numeros: resultado })

})


// MAP
/*Neste programa o professor digita notas de aluno e adiciona um bônus de um ponto!*/
app.get("/map1", (req, res) => {

  let notas = [
    Number(req.query.n1),
    Number(req.query.n2),
    Number(req.query.n3)
  ]

  let resultado = lacos.map1(notas)

  res.send({ msg: "Notas com bônus", notas: resultado })

})


// FOR 1
/*A função cria e retorna um vetor com números pares de 0 a 100.*/
app.get("/for1", (req, res) => {

  let resultado = lacos.For1()

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Números pares", ...resultado }
  )

})


// FOREACH 1
/*A função usa forEach para percorrer um vetor e retornar os nomes em formato de texto.*/
app.get("/foreach1", (req, res) => {

  let resultado = lacos.forEach1()

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Lista de nomes", ...resultado }
  )

})

// DECLARAÇÃO DE VARIAVEISSS

// ===============================
// 🟢 PARAMS (2 primeiros)
// ===============================

// VAR 1
/*Neste código o usuário coloca a quantidade de seu estoque e quantidade vendida 
assim o programa mostra a situação do estoque e os produtos restantes! */
app.get("/var1/:estoque/:vendida", (req, res) => {

  let estoque = Number(req.params.estoque)
  let vendida = Number(req.params.vendida)

  let resultado = variaveis.var1(estoque, vendida)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Status do estoque", ...resultado }
  )

})


// CONST 1
/*Neste programa a função retorna informações de uma pessoa para serem exibidas*/
app.get("/const1/:nome/:idade/:altura", (req, res) => {

  let nome = req.params.nome
  let idade = Number(req.params.idade)
  let altura = Number(req.params.altura)

  let resultado = variaveis.const1(nome, idade, altura)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Dados da pessoa", ...resultado }
  )

})


// ===============================
// 🔵 QUERY (restante)
// ===============================

// LET 1
/*Neste programa a função retorna um nome para ser exibido*/
app.get("/let1", (req, res) => {

  let nome = req.query.nome

  let resultado = variaveis.let1(nome)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Nome retornado", ...resultado }
  )

})

// OPERADORES LÓGICOS

// ===============================
// 🟢 PARAMS (2 primeiros)
// ===============================

// OU 1
/*Neste programa estamos dentro de um sistema de cinema
e o usuário informa idade e se é estudante para saber
o tipo de entrada*/
app.get("/ou1/:idade/:estudante", (req, res) => {

  let idade = Number(req.params.idade)
  let estudante = Number(req.params.estudante)

  let resultado = operadores.ou1(idade, estudante)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Tipo de entrada", ...resultado }
  )

})


// NOT 1
/*A função verifica e retorna se a pessoa pode dirigir ou não.*/
app.get("/not1/:idade", (req, res) => {

  let idade = Number(req.params.idade)

  let resultado = operadores.not1(idade)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Verificação de direção", ...resultado }
  )

})


// ===============================
// 🔵 QUERY (restante)
// ===============================

// E 1
/*O código usa a função verifica duas condições ao mesmo tempo para decidir se a pessoa pode dirigir.*/
app.get("/e1", (req, res) => {

  let idade = Number(req.query.idade)
  let habilitado = Number(req.query.habilitado)

  let resultado = operadores.E1(idade, habilitado)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da verificação", ...resultado }
  )

})

// VETORESSS

// ===============================
// 🟢 PARAMS (2 primeiros)
// ===============================

// VETOR - ACUMULAÇÃO
/*Neste programa simulamos um caixa de supermercado
onde somamos os valores dos produtos*/
app.get("/acumulacao/:v1/:v2/:v3/:v4/:v5", (req, res) => {

  let valores = [
    Number(req.params.v1),
    Number(req.params.v2),
    Number(req.params.v3),
    Number(req.params.v4),
    Number(req.params.v5)
  ]

  let resultado = vetor.acumulacao(valores)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Total da compra", ...resultado }
  )

})


// VETOR - REMOÇÃO
/*Neste programa a função busca um valor, remove se existir e retorna o resultado*/
app.get("/removerVetor/:v1/:v2/:v3/:v4/:v5/:remover", (req, res) => {

  let valores = [
    Number(req.params.v1),
    Number(req.params.v2),
    Number(req.params.v3),
    Number(req.params.v4),
    Number(req.params.v5)
  ]

  let remover = Number(req.params.remover)

  let resultado = vetor.removerVetor(valores, remover)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da remoção", ...resultado }
  )

})


// ===============================
// 🔵 QUERY (restante)
// ===============================

// VETOR - BUSCA
/*Neste programa a função busca um número no vetor e retorna sua posição ou uma mensagem de erro caso não exista*/
app.get("/buscarNumero", (req, res) => {

  let valores = [
    Number(req.query.v1),
    Number(req.query.v2),
    Number(req.query.v3),
    Number(req.query.v4),
    Number(req.query.v5)
  ]

  let buscar = Number(req.query.buscar)

  let resultado = vetor.buscarNumero(valores, buscar)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da busca", ...resultado }
  )

})


// VETOR - ADIÇÃO
/*O programa abaixo soma dois vetores e retorna um novo vetor com os resultados.*/
app.get("/somarVetores", (req, res) => {

  let vetor1 = [
    Number(req.query.v1),
    Number(req.query.v2),
    Number(req.query.v3)
  ]

  let vetor2 = [
    Number(req.query.v4),
    Number(req.query.v5),
    Number(req.query.v6)
  ]

  let resultado = vetor.somarVetores(vetor1, vetor2)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da soma dos vetores", ...resultado }
  )

})

// OPERADORES RELACIONAIS

// ===============================
// 🟢 PARAMS (2 primeiros)
// ===============================

// MAIOR
/*O código abaixo mostra um controle de evento baseado na idade para entrada
de convidados*/
app.get("/maior/:idade", (req, res) => {

  let idade = Number(req.params.idade)

  let resultado = relacionais.maior(idade)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Verificação de idade", valor: resultado }
  )

})


// IGUAL
/*Neste programa, estamos dentro de um sistema de um cofre que só abre com
a senha correta!*/
app.get("/igual/:senha", (req, res) => {

  let senha = Number(req.params.senha)

  let resultado = relacionais.igual(senha)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Verificação de senha", valor: resultado }
  )

})


// ===============================
// 🔵 QUERY (restante)
// ===============================

// MAIOR OU IGUAL
/*O código abaixo diz se o aluno, baseado em sua nota está aprovado ou reprovado!*/
app.get("/maiorOuIgual", (req, res) => {

  let nota = Number(req.query.nota)

  let resultado = relacionais.maiorOuIgual(nota)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado do aluno", valor: resultado }
  )

})


// MENOR OU IGUAL
/*O programa abaixo avalia a nota e retorna se está suficiente ou não.*/
app.get("/menorOuigual", (req, res) => {

  let nota = Number(req.query.nota)

  let resultado = relacionais.menorOuigual(nota)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Avaliação da nota", ...resultado }
  )

})


// MENOR
/*O código abaixo avalia a nota e informa se o aluno foi aprovado ou reprovado.*/
app.get("/menor", (req, res) => {

  let nota = Number(req.query.nota)

  let resultado = relacionais.menor(nota)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da avaliação", ...resultado }
  )

})


// DIFERENTE
/*O programa abaixo compara a idade com 18 e informa se é igual ou diferente.*/
app.get("/diferenteDe", (req, res) => {

  let idade = Number(req.query.idade)

  let resultado = relacionais.diferenteDe(idade)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Comparação de idade", ...resultado }
  )

})

// TOMADA DE DECISÃO

// ===============================
// 🟢 PARAMS (2 primeiros)
// ===============================

// IF ELSE 1
/*O Código abaixo mostra um sistema de desconto, onde o usuário coloca o valor da sua compra e vê
se há possibilidade de desconto em sua compra!*/
app.get("/ifElse1/:valor", (req, res) => {

  let valor = Number(req.params.valor)

  let resultado = decisao.ifElse1(valor)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da compra", valor: resultado }
  )

})


// TERNÁRIO
/*Neste código o usuário digita como está o sinal de trânsito e vê os comandos que deve seguir!*/
app.get("/ternario/:sinal", (req, res) => {

  let sinal = Number(req.params.sinal)

  let resultado = decisao.ternario(sinal)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Situação do trânsito", valor: resultado }
  )

})


// ===============================
// 🔵 QUERY (restante)
// ===============================

// IF ELSE 2
/*Este código mostra o valor total em Kg da compra do usuário em uma pescaria, 
com base nos valores por quilos pré-estabelecidos!*/
app.get("/ifElse2", (req, res) => {

  let kilos = Number(req.query.kilos)

  let resultado = decisao.ifElse2(kilos)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da pescaria", valor: resultado }
  )

})


// SWITCH CASE
/*A função simula um menu, retornando mensagens conforme a opção escolhida.*/
app.get("/switchCase", (req, res) => {

  let opcao = Number(req.query.opcao)

  let resultado = decisao.switchCase(opcao)

  res.send(typeof resultado === "string"
    ? { msg: resultado }
    : { msg: "Resultado da opção escolhida", ...resultado }
  )

})


// SERVIDOR
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})