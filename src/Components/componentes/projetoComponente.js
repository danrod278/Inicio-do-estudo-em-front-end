import styles from "../styles/projetoComponente.module.css"
import { FaPen, FaTrashAlt  } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import apagarProjeto  from "../utils/apagarProjeto"
import { useState } from "react";
function ProjetoComponente({nome, orcamento, tipo, id, codeCor, atualizarProjetos}){
    const navigate = useNavigate()
    
    const RedirectToEdit = ()=>{
        console.log('clicou')
        navigate('/projeto/'+id)
    }
    const apagarProjetoFunc = () => {
        apagarProjeto(id, atualizarProjetos)
        
    }
    return (
        <div className={styles.main}>
            <div className={styles.grandparent}>
                <div><div><h3>{nome}</h3></div></div>
                <div>
                    <p><span>Orçamento: </span>R${orcamento}</p>
                    <div><FaCircle  style={{color:codeCor}}/><p>{tipo}</p></div>
                </div>
                <div >
                    <div onClick={RedirectToEdit}> <FaPen /><p>Editar</p></div>
                    <div onClick={apagarProjetoFunc} ><FaTrashAlt /><p>Excluir</p></div>
                </div>
            </div>
        </div>

    )
}

export default ProjetoComponente
