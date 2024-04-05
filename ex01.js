let base = prompt("Digite a base:");
let expoente = prompt("Digite o expoente:");
let resultado = 1;

for(let i = 0; i < expoente; i++) {
    resultado *= base;
}

console.log("O resultado de " + base + " elevado a " + expoente + " é: " + resultado);
