const calcularMedia = (notas) => {
    if (notas.length !== 3) {
        console.log('O array de notas deve conter exatamente 3 elementos.');
        return false;
    }
    
    //validar se ta no intervalo de 0 a 10
    for (const nota of notas) {
        if (nota < 0 || nota > 10) {
            console.log('As notas devem estar no intervalo de 0 a 10.');
            return false;
        }
    }

    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
};



console.log("Calculadora de média");
console.log("----------------------------------");

// Notas do ALUNO
let notas = [1,2,17];
let media = calcularMedia(notas);

//se for false, interrompe
if(!media){
    return;
}

console.log(`A média das notas é: ${media}`);