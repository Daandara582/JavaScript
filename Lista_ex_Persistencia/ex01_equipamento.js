const equipamentos = [
    { 
      codigo:1,
      nome: "Impressora",
      setor: "adm" ,
      operacional:true 

    },

       { 
      codigo:2,
      nome: "Projetor",
      setor: "sala1" ,
      operacional:false

    },

       { 
      codigo:3,
      nome: "Computador",
      setor: "sala2" ,
      operacional:true 

    },
];

const jsonDados = JSON.stringify(equipamentos, null, 2);
fs.writeFileSync('equipamentos.json', jsonDados, 'utf-8');
console.log("Sucesso!! Os dados  foram salvos em 'equipamentos.json'!");