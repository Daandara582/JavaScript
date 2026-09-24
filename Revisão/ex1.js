const entrada = require ('readline-sync');

const temperatura = entrada.questionFloat("Digite a temeperatura:");

if (temperatura <=60) {
    console.log(`A temperatura ${temperatura} C está normal`);
}else if(temperatura <= 80) {
    console.log(`A temperatura ${temperatura} C precisa de atenção`);
}else{
    console.log(`A temperatura ${temperatura} C é Crítica`);
};