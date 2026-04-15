function doWhile1(numeros){

let totalPares = 0
let totalImpares = 0
let totalPositivos = 0
let totalNegativos = 0
let totalZero = 0

let i = 0

do{

let numero = numeros[i]

if(numero % 2 === 0){
totalPares++
}else{
totalImpares++
}

if(numero > 0){
totalPositivos++
}else if(numero < 0){
totalNegativos++
}else{
totalZero++
}

i++

}while(i < numeros.length)

return {
pares: totalPares,
impares: totalImpares,
positivos: totalPositivos,
negativos: totalNegativos,
zeros: totalZero
}

}


function doWhile2(){

let numero = 1
let lista = []

do{
lista.push(numero)
numero++
}while(numero <= 100)

return lista.join(" - ")

}


function map1(notas){

let notasComBonus = notas.map(nota => nota + 1)

return notasComBonus.join(" | ")

}


function while1(idades){

let totalMenor = 0
let totalMaior = 0

let i = 0

while(i < idades.length){

let idade = idades[i]

if(idade >= 18){
totalMaior++
}else{
totalMenor++
}

i++

}

return {
maiores: totalMaior,
menores: totalMenor
}

}


function while2(){

let i = 1
let pares = []

while(i <= 500){

if(i % 2 === 0){
pares.push(i)
}

i++

}

return pares.join(", ")

}



function For1 (mostrarPares) {

  let pares = [];

  for (let i = 0; i <= 100; i += 2) {
    pares.push(i);
  }

  return {
    numeros: pares
  };

}

function forEach1(listarNomes) {

  let nomes = ["Ana", "Carlos", "João"];
  let resultado = "";

  nomes.forEach((nome) => {
    resultado += nome + " ";
  });

  return {
    lista: resultado
  };
}


export default {
doWhile1,
doWhile2,
map1,
while1,
while2,
For1,
forEach1
}