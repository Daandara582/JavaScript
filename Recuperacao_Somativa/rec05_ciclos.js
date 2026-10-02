
const entrada = require ('readline-sync');

const qtdproduzidaporciclo = entrada.questionInt("qual a quantidade por ciclo?");

let acumulador = 0;

for (let i = 1; i<=12; i++) {
    qtdproduzidaporciclo += acumulador;
    console.log (`No ciclo ${i} : producao acumulado ${qtdproduzidaporciclo}`);
}