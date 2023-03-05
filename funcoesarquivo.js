const fs = require('fs')

// Função para leitura de arquivo um JSON
const leDados = (arquivo) => (
    JSON.parse(fs.readFileSync(arquivo).toString('UTF8'))
)

// Função para adicionar objeto à um arquivo JSON
function adicionaObjeto(arquivo, objeto) {
    let conteudoNovo = leDados(arquivo)
    conteudoNovo.push(JSON.parse(objeto))
    fs.writeFileSync(arquivo, JSON.stringify(conteudoNovo))
    return `Objeto ${objeto} adicionado com sucesso ao arquivo!`
}

// Função para encontrar objeto usando o seu nome
function encontraObjeto(arquivo, nomeObjeto) {
    const objeto = leDados(arquivo).find(
        objeto => objeto.nome === nomeObjeto
    )
    return objeto === undefined ? `Objeto com o nome ${nomeObjeto} não existe no arquivo!` : objeto
}

// Função para remover um objeto usando o seu nome
function removeObjeto(arquivo, nomeObjeto) {
    const dados = leDados(arquivo)
    const conteudoNovo = dados.filter(
        (objeto) => objeto.nome != nomeObjeto
    )
    if (dados === conteudoNovo) 
        return `Objeto com o nome ${nomeObjeto} não existe no arquivo!`
    else {
        fs.writeFileSync(arquivo, 
            JSON.stringify(leDados(arquivo).filter(
                (objeto) => objeto.nome != nomeObjeto
            ))
        )
        return `Objeto com o nome ${nomeObjeto} foi removido com sucesso!`
    }
}

adicionaObjeto("dados.txt", `{ "nome": "CSS3", "ano": 2020 }`)

module.exports = {leDados, adicionaObjeto, encontraObjeto, removeObjeto}