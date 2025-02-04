import styles from '../styles/home.module.css'
import { useNavigate } from 'react-router-dom'
function Home(){
    const navigate = useNavigate()
    function Redirecionar(){
        navigate('/novoprojeto')
    }
    return(
        <>
            <div className={styles.divMain}>
                <h2>Bem vindo ao <span className={styles.span}>Cost</span></h2>
                <p>Faça seus principais projetos virarem realidade com o Cost</p>
                <div onClick={Redirecionar}><div>Criar Projeto</div></div>
                <img src="https://img.freepik.com/vetores-premium/ilustracao-de-planejamento-de-funcionarios-em-estilo-desenhado-a-mao_9206-29534.jpg?semt=ais_hybrid"/>
            </div>

        </>
    )
}

export default Home
