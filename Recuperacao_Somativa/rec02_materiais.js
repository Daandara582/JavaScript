const entrada = require ('readline-sync');

const nome_peca = entrada.question ("Qual o nome da peça?");
const qtdcomprada = entrada.questionInt ("Qual foi a Quantidade Comprada?");
const preco_unitario = entrada.questionInt ("Qual o valor Unitário?");

const total = qtdcomprada * preco_unitario 

console.log(`A peca comprada é ${nome_peca}`);
console.log(`À Quantidade Comprada é de ${qtdcomprada}`);
console.log(`O valor unitario é de ${preco_unitario}`);
console.log(`O total da compra foi de ${total}`);
