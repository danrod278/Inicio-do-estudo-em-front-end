export const buscaDados = (_id)=>{
    const stringJSON = localStorage.getItem("projetos") || "{}"
    try{
        const projetosJson = JSON.parse(stringJSON)
        const projeto = projetosJson.filter(projeto => projeto._id==_id)
        return projeto[0] || false
    }catch (err){
        console.log("Erro ao passar String de dados para JSON")
    }
}

export const editaProjeto = (nome, orcamento, tipo, _id)=>{
    const stringJSON = localStorage.getItem("projetos") || "{}"
    try{

        var codeCor;
        const projetosJson = JSON.parse(stringJSON)
        
        const projeto = projetosJson.filter(projeto => projeto._id==_id)
        var projetosSemVelho = projetosJson.filter(projeto => projeto._id!==_id)

        if(projeto[0].tipoPj=="Infra"){
            codeCor="#ffb800"
        }else if(projeto[0].tipoPj=="Desenvolvimento"){
            codeCor="#0f7bcd"
        }
        else if(projeto[0].tipoPj=="Design"){
            codeCor="#807bcd"
        }
        else if(projeto[0].tipoPj=="Planejamento"){
            codeCor="#dadcd7"
        }

        const novoProjeto = {...projeto[0], nomePj:nome, orcamentoPj:orcamento, tipoPj:tipo}
        console.log(novoProjeto)
        projetosSemVelho.push(novoProjeto)
        localStorage.setItem("projetos", JSON.stringify(projetosSemVelho))
        return true
    }catch (err){
        console.log("Erro ao passar String de dados para JSON")
    }
}

export const carregaOrcAp = (_id)=>{
    const stringJSON = localStorage.getItem("projetos") 
    try{
        var projetosJson = JSON.parse(stringJSON)
    }catch (err){
        console.log("Erro ao passar String de dados para JSON",err)
    }
    var projeto = projetosJson.filter(projeto => projeto._id==_id)
    projeto = projeto[0]
    if("servicos" in projeto){
        //verifica se é cabivel ao orçamento esse serviço
        var cont=0
        for(var i =0;i<projeto.servicos.length;i++){
            cont = cont+ projeto.servicos[i].custo 
            console.log(cont)
        }
        return cont
    }else return 0
}