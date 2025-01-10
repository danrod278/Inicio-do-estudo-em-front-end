import { v4 as uuidv4 } from 'uuid';

function useSalvaLocalStorage(nome, orcamento, tipo){

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

    //recebendo dados do localStorage
    const Nprojeto = {nomePj:nome, orcamentoPj:orcamento, tipoPj:tipo, _id:uuidv4()}
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
