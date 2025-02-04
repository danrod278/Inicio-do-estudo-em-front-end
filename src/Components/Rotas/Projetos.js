import ProjetoComponente from "../componentes/projetoComponente"
import styles from "../styles/projetos.module.css"
import { useNavigate, useLocation} from "react-router-dom"
import Servico from "../componentes/Servico";
import Botao from "../componentes/Botao";
import FlashMessage from "../componentes/FlashMessage";
import { useEffect, useState } from "react";
function Projetos(){
    const [popup, setPopup] = useState()
    const location = useLocation()
    const [projetos, setProjetos] = useState([])
    const {mensagem} = location.state || false
    console.log("mensagem",mensagem)
    const navigate = useNavigate()

    function Redirecionar(){
        navigate('/novoprojeto')
    }

    useEffect(()=>{

        console.log(mensagem)
        if(mensagem){
            setPopup(mensagem)
            const timer = setTimeout(()=>{
                setPopup(false)
            }, 4000)
            return () => clearTimeout(timer)
        }
        
    }, [])
    //recebedno dados do localStorage
    useEffect(()=>{
        const stringJSON = localStorage.getItem("projetos")
        try {
            const projetosJson = JSON.parse(stringJSON)
            setProjetos(projetosJson)
        } catch (error) {
            console.log('erro ao passar dados para Json')
        }
    }, [])

    //atualizar projetos quando um foi apagado
    const atualizarProjetos = (projetos)=>setProjetos(projetos)

    return(
        <div className={styles.mainP}>
            <div>
                <h2>Meus projetos</h2>
                <Botao desc="Criar projeto" fontSize={18} funcao={Redirecionar} height={40} width={200} />
            </div>
            {/* <FlashMessage desc="Projeto criado com sucesso" tipo="sucesso" estado={true}/> */}

            <div className={styles.div3}>
                
            {
                    projetos && projetos.length > 0 ? (
                        projetos.map((projeto, index)=>{
                            return (
                                <ProjetoComponente
                                orcamento={projeto.orcamentoPj}
                                id={projeto._id}
                                nome={projeto.nomePj}
                                tipo={projeto.tipoPj}
                                codeCor={projeto.codeCorPj}
                                atualizarProjetos={atualizarProjetos}
                                />
                            )
                        })
                    ) : <>
                        <p className={styles.noProjects}>Sem projetos criados</p>
                    </>
                }

            </div>
        </div>
    )
}

export default Projetos

