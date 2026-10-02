
const entrada = require('readline-sync');

let acumuladora = 0;

const totalAtendimentos = 6;

for (let tempo = 1; tempo <= totalAtendimentos; tempo++){
    const tempoAtual = Number(entrada.question(`Digite o tempo ${tempo}: `));
    acumuladora += tempoAtual;
}

const media_final = acumuladora / totalAtendimentos;

console.log(`Soma dos tempos: ${acumuladora} minutos`);
console.log(`Média dos atendimentos é de ${media_final.toFixed(2)}`);