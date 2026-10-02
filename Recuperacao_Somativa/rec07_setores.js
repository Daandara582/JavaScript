const entrada = require('readline-sync');

const setores = [];

const tsetores = 6;

for (let i =1; i <=6; i ++){
    const nome = entrada.question(`Digite o nome do setor ${i}`);
    setores.push(nome);
}

console.log("\n--- Lista de Setores ---");
for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}
