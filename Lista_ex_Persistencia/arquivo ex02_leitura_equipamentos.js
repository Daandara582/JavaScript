const fs = require('fs');
const caminhoArquivo = 'equipamentos.json';


if (!fs.existsSync(caminhoArquivo)) {
  console.log(`Erro: O arquivo '${caminhoArquivo}' não existe! Execute o ex01 primeiro.`);
  process.exit(1);
}

const conteudoTexto = fs.readFileSync(caminhoArquivo, 'utf-8');


const equipamentos = JSON.parse(conteudoTexto);

console.log("=== RELATÓRIO DE EQUIPAMENTOS ===");

equipamentos.forEach((eq) => {

  const status = eq.operacional ? "OPERACIONAL" : "PARADA";

  console.log(`Código: ${eq.codigo} | Equipamento: ${eq.nome} | Setor: ${eq.setor} | Status: ${status}`);
}); 