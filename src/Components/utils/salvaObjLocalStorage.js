import { v4 as uuidv4 } from 'uuid';

function useSalvaLocalStorage(nome, orcamento, tipo){
    let codeCor;
    //Verificando se todos os campos foram preenchidos
    if(!nome || !orcamento || !tipo){
        return "Necessário preencher todos os campos"
    }


    //Verificando se orçamento é um numero
    if(isNaN(orcamento)){
        return "Necessário um numero válido"
    }else{
        orcamento=Number(orcamento)
    }

    var projetos =[]

    //atribuindo codigo de cor
    if(tipo=="Infra"){
        codeCor="#ffb800"
    }else if(tipo=="Desenvolvimento"){
        codeCor="#0f7bcd"
    }
    else if(tipo=="Design"){
        codeCor="#807bcd"
    }
    else if(tipo=="Planejamento"){
        codeCor="#dadcd7"
    }

    //recebendo dados do localStorage
    const Nprojeto = {nomePj:nome, orcamentoPj:Number(orcamento), tipoPj:tipo, _id:uuidv4(), codeCorPj:codeCor}
    console.log(Nprojeto)
    const projetosLocalStorage = localStorage.getItem('projetos')
    if(projetosLocalStorage){
        //Passando dados para json
        projetos = JSON.parse(projetosLocalStorage)
        
    }else{
        projetos=[]
    }

    //Salvando novos dados no local storage
    const novosProjetos = [...projetos, Nprojeto]
    console.log(novosProjetos)
    localStorage.setItem("projetos", JSON.stringify(novosProjetos))
    projetos=novosProjetos

    return true
}

export default useSalvaLocalStorage
