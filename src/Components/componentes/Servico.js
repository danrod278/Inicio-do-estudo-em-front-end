import styles from "../styles/Servico.module.css"
import {FaTrashAlt  } from "react-icons/fa";
import {apagaServico as aps} from "../utils/manipularServicos"

function Servico({nome, custo, desc, _idServico, _idProjeto, atualizaServicos}){

    const apagaServico = ()=>{
        aps(_idProjeto, _idServico, atualizaServicos)
    }

    return(
        <div className={styles.main}>
                    <div className={styles.grandparent}>
                        <div><div><h3>{nome}</h3></div></div>
                        <div>
                            <p><span>Custo total: </span>R${custo}</p>
                            <div><p>{desc}</p></div>
                        </div>
                        <div>
                            <div onClick={apagaServico}><FaTrashAlt/><p>Excluir</p></div>
                        </div>
                    </div>
                </div>
    )
}

export default Servico
