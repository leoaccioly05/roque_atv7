let N = parseInt(prompt("Digite um número inteiro:"));
let divisoes = 0;

function ehPrimo(n) {
    if (n < 2) return false;
    for(let i = 2; i < n; i++) {
        divisoes++;
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Números primos entre 1 e " + N + ":");
for(let i = 1; i <= N; i++) {
    if(ehPrimo(i)) {
        console.log(i);
    }
}

console.log("Número de divisões executadas: " + divisoes);