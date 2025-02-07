import { v4 as uuidv4 } from 'uuid';

export const criaNovoServico = (nome, custo, desc, _id, atualizarServicos)=>{
    if(!nome || !custo || !desc) return ["Necessário que todos os campos estejam preenchidos!", 0]
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
                
            }
            if((Number(custo)+cont)>projeto.orcamentoPj) return ['Necessário um custo menor!', 0]
            //adiciona o serviço ao projeto
            projeto.servicos.push({nome:nome, custo:Number(custo), desc:desc, _id:uuidv4()})
            console.log(projeto.servicos)
            //elimina o projeto antigo e adiciona o novo
            projetosJson = projetosJson.filter(projeto => projeto._id!==_id)
            projetosJson.push(projeto)
            //salva os projetos novamente
            localStorage.setItem("projetos", JSON.stringify(projetosJson))
            atualizarServicos(projeto.servicos)

            return ["Serviço criado com sucesso!", 1]
        }else{
            if(custo>projeto.orcamentoPj){
                return ['Necessário um custo menor!', 0]
            }
            //cria o serviço
            const novoProjeto = {...projeto, servicos:[{nome:nome, custo:Number(custo), desc:desc, _id:uuidv4()}]}
            //remove  antigo projeto para adicionar o novo com o serviço
            projetosJson = projetosJson.filter(projeto => projeto._id!==_id)
            projetosJson.push(novoProjeto)
            localStorage.setItem("projetos", JSON.stringify(projetosJson))
            atualizarServicos(novoProjeto.servicos)
            return ["Serviço criado com sucesso!", 1]
        }    
}

export const escreverServicos = (_id)=>{
   
    const stringJSON = localStorage.getItem("projetos") 
    try{
        var projetosJson = JSON.parse(stringJSON)
    }catch (err){
        console.log("Erro ao passar String de dados para JSON",err)
    }
    var projeto = projetosJson.filter(projeto => projeto._id==_id)
    projeto = projeto[0]
    return projeto.servicos    
}

export const apagaServico = (_idProjeto, _idServico, atualizaServicos)=>{
    let projetoVelho;
    let projetoSemServico;
    const stringProjetos = localStorage.getItem("projetos")
    try {
        let projetosJson = JSON.parse(stringProjetos)
        let projetosSemVelho = projetosJson.filter(projeto => projeto._id !== _idProjeto) //projetos

        try {
            
            projetoVelho = projetosJson.filter(projeto => projeto._id === _idProjeto) //projeto que esta sendo manipulado
        } catch (error) {
            
            console.log("Erro ao pegar projetoVelho")
        }

        try{

            projetoSemServico = projetoVelho[0].servicos.filter(servico => servico._id !== _idServico)
        }catch(err){

            console.log("Erro ao pegar projetoSemServico")
        }

        projetoVelho[0].servicos=[]
        projetoVelho[0].servicos=projetoSemServico

        projetosSemVelho.push(projetoVelho[0])
        localStorage.setItem('projetos', JSON.stringify(projetosSemVelho))
        atualizaServicos(projetoSemServico)
        console.log(projetoSemServico)
    } catch (error) {
        console.log("Erro ao tentar apagar servico" +error)
    }
}
