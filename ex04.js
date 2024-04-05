let numero = prompt("Digite um número inteiro:");
let fatorial = 1;

for(let i = numero; i > 1; i--) {
    fatorial *= i;
}

console.log("O fatorial de " + numero + " é: " + fatorial);
