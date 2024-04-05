let fib = [0, 1];
let i = 2;

while(fib[i - 1] <= 500) {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
}

console.log("A série de Fibonacci até que o valor seja maior que 500 é: " + fib.join(", "));
