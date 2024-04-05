function fatorial(n) {
    let resultado = 1;
    for(let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

while(true) {
    let numero = parseInt(prompt("Digite um número inteiro positivo menor que 16 para calcular o fatorial:"));
    if(numero >= 0 && numero < 16) {
        console.log("O fatorial de " + numero + " é: " + fatorial(numero));
    } else {
        console.log("Número inválido. Por favor, insira um número inteiro positivo menor que 16.");
    }
    let continuar = prompt("Deseja calcular outro fatorial? (s/n)");
    if(continuar.toLowerCase() !== 's') {
        break;
    }
}
