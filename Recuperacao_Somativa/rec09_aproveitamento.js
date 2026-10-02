function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "Exelente!!";
    } else if (percentual >= 75) {
        return "Adequado!";
    } else {
        return "Revisar Processo";
    }
}

const total = Number (entrada.question("Digite a quantidade total de matéria-prima:"));
const util = Number (entrada.question("Digite a quantidade útil aproveitada:"));

const percentual = calcularAproveitamento(util, total);
const classificacao = classificarAproveitamento(percentual);

console.log(`Total: ${total}`);
console.log(`Quantidade Útil: ${util}`);
console.log(`Percentual: ${percentual.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);