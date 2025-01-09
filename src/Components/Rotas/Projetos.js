import ProjetoComponente from "../componentes/projetoComponente"
import styles from "../styles/projetos.module.css"
import { useNavigate } from "react-router-dom"
import Servico from "../componentes/Servico";
import Botao from "../componentes/Botao";
import FlashMessage from "../componentes/FlashMessage";
function Projetos(){
    
    const navigate = useNavigate()
    function Redirecionar(){
        navigate('/novoprojeto')
    }
    return(
        <div className={styles.mainP}>
            <div>
                <h2>Meus projetos</h2>
                <Botao desc="Criar projeto" fontSize={18} funcao={Redirecionar} height={40} width={200} />
            </div>
            <FlashMessage desc="Projeto criado com sucesso" tipo="sucesso"/>

            <div className={styles.div3}>
                <ProjetoComponente codeCor="blue" id={1} nome="Aplicar flash Message" orcamento={20000} tipo="Desenvolvimento"/>
                <ProjetoComponente codeCor="blue" id={1} nome="Aplicar flash Message" orcamento={20000} tipo="Desenvolvimento"/>
                <ProjetoComponente codeCor="blue" id={1} nome="Aplicar flash Message" orcamento={20000} tipo="Desenvolvimento"/>
                <ProjetoComponente codeCor="blue" id={1} nome="Aplicar flash Message" orcamento={20000} tipo="Desenvolvimento"/>
                <ProjetoComponente codeCor="blue" id={1} nome="Aplicar flash Message" orcamento={20000} tipo="Desenvolvimento"/>
                <ProjetoComponente codeCor="blue" id={1} nome="Aplicar flash Message" orcamento={20000} tipo="Desenvolvimento"/>
                <ProjetoComponente codeCor="blue" id={1} nome="Aplicar flash Message" orcamento={20000} tipo="Desenvolvimento"/>
            </div>
        </div>
    )
}

export default Projetos
