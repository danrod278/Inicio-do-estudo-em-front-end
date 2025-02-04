function apagarProjeto(id, atualizarProjetos){
    const stringProjetos = localStorage.getItem("projetos")
    try {
        const projetosJson = JSON.parse(stringProjetos)
        const novosProjetos = projetosJson.filter(projeto => projeto._id !==id)

        localStorage.setItem('projetos', JSON.stringify(novosProjetos))
        console.log('apagou')
        atualizarProjetos(novosProjetos)
    } catch (error) {
        console.log("Erro ao tentar apagar projeto")
    }
}

export default apagarProjeto