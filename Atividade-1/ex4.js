const entrada = require ('readline-sync');

const temperatura = entrada.questionFloat("Digite a Temperatura:");

if (temperatura <=60) {
    console.log("Situacao Normal!");
}else if (temperatura >=61 && temperatura <= 80) {
    console.log("Atencao");
}else  {
    console.log("Critico!");
}
