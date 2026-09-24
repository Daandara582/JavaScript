const entrada = require ('readline-sync');

let acumulador = 0;

for(let i = 1;  i <=6; i++){
    const inspecoes = entrada.questionInt("Digite a quantidade de pecas com defeitos ");
    acumulador += inspecoes;
}

const media = acumulador / 6; 

