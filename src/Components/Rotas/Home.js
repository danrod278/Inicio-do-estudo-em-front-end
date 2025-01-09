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
                <p>Faça seus principais projetos virarem realidade com o Coast</p>
                <div onClick={Redirecionar}><div>Criar Projeto</div></div>
                <img src="https://getillustrations.b-cdn.net//packs/misty-line-illustrations/scenes/_1x/security%20_%20safety,%20protection,%20safe,%20vault,%20cracking,%20locked%20out,%20woman,%20people,%20person_demo.png"/>
            </div>

        </>
    )
}

export default Home