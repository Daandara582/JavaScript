
const readlineSync = require('readline-sync');

let ferramentas = [];

const totalFerramentas = 4;

for (let i = 1; i <= totalFerramentas; i++) {
    console.log(`\n Cadastro da ferramenta ${i} `);
    let nome = readlineSync.question("Nome da ferramenta: ");
    let quantidade = Number(readlineSync.question("Quantidade disponível: "));
    let minimo = Number(readlineSync.question("Quantidade mínima: "));
 
    let ferramenta = {
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    };

    ferramentas.push(ferramenta);
}

console.log("\n--- Situação do Estoque ---");
for (let i = 0; i < ferramentas.length; i++) {
    let situacao;

    if (ferramentas[i].quantidade < ferramentas[i].minimo) {
        situacao = "Repor!";
    } else {
        situacao = "Estoque insuficiente!!! ";
    }

    console.log(`Ferramenta ${ferramentas[i] .nome}`);
    console.log(`Quantidade ${ferramentas[i].quantidade}`);
    console.log(`Mínimo${ferramentas[i].minimo}`);
    console.log(`Situação ${situacao}`);
    
}