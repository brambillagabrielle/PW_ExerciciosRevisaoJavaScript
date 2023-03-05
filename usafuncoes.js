const funcoes = require('./funcoesarquivo.js')
const arquivo = "dados.txt"

console.log("Adicionar objeto no arquivo JSON:")
console.log(funcoes.adicionaObjeto(arquivo, `{ "nome": "CSS3", "ano": 2020 }`))

console.log("\nProcurar objeto no arquivo JSON:")
console.log(funcoes.encontraObjeto(arquivo, "CSS3"))

console.log("\nRemover objeto no arquivo JSON:")
console.log(funcoes.removeObjeto(arquivo, "CSS3"))

console.log("\nProcurar objeto no arquivo JSON:")
console.log(funcoes.encontraObjeto(arquivo, "CSS3"))