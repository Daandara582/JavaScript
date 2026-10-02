const entrada = require ('readline-sync');

const nivel_oleo= entrada.questionInt("Digite o nivel do oleo");

if (nivel_oleo >=40 && nivel_oleo <=80) {
    console.log(`Normal! o nivel foi de ${nivel_oleo}`);
}else {
    console.log(`Inspeção Necessária!!! O nivel foi de ${nivel_oleo}`);
}

