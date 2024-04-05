function calcularMedia(notas) {
    var soma = 0;
    for(var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    var media = soma / notas.length;
    return media;
}

var notas = [90, 85, 78, 92, 88]; // Insira suas notas aqui
var media = calcularMedia(notas);

console.log("A média aritmética é: " + media);
