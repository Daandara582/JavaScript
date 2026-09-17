
const entrada = require ('readlie-sync');

const qtdPorHora = entrada.questionInt("Digite a quantidade de peca produzida por hora:");
const horasPorTurno = entrada.questionInt("Digite as horas trabalhadas por turno:");
const prodTotal = qtdPorHora * horasPorTurno 

console.log("Relatório de Produção");
console.log(`Pecas produzidas por hora ${qtdPorHora}`);
console.log(`Horas do turno: ${horasPorTurno}`);
console.log(`Total Produzido: ${prodTotal} pecas`);





