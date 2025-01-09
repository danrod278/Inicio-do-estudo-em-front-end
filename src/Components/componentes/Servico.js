import styles from "../styles/Servico.module.css"
import {FaTrashAlt  } from "react-icons/fa";
function Servico({nome, custo, desc, id}){
    return(
        <div className={styles.main}>
                    <div className={styles.grandparent}>
                        <div><div><h3>{nome}</h3></div></div>
                        <div>
                            <p><span>Custo total: </span>R${custo}</p>
                            <div><p>{desc}</p></div>
                        </div>
                        <div>
                            <div><FaTrashAlt/><p>Excluir</p></div>
                        </div>
                    </div>
                </div>
    )
}

export default Servico
