let numero = parseInt(prompt("Digite um número inteiro:"));
let divisores = [];

if (numero < 2) {
    console.log(numero + " não é um número primo.");
} else {
    for(let i = 2; i < numero; i++) {
        if(numero % i === 0) {
            divisores.push(i);
        }
    }
}

if(divisores.length === 0) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo. Ele é divisível por: " + divisores.join(", "));
}
