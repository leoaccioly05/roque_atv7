let numeros = prompt("Digite um conjunto de números separados por vírgula:").split(",");
let menor = Number(numeros[0]);
let maior = Number(numeros[0]);
let soma = 0;

for(let i = 0; i < numeros.length; i++) {
    let numero = Number(numeros[i]);
    if(numero >= 0 && numero <= 1000) {
        soma += numero;
        if(numero < menor) {
            menor = numero;
        }
        if(numero > maior) {
            maior = numero;
        }
    } else {
        console.log("Número inválido: " + numero);
    }
}

console.log("O menor valor é: " + menor);
console.log("O maior valor é: " + maior);
console.log("A soma dos valores é: " + soma);
