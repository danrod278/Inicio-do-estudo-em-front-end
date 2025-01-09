import Botao from '../componentes/Botao'
import Input from '../componentes/Inputs'
import styles from '../styles/Nprojeto.module.css'
import { redirect, useNavigate } from 'react-router-dom'
function NovoProjeto(){
    const navigate = useNavigate()
    function Redirecionar(){
        navigate('/projetos')
    }
    return(
        <div className={styles.main}>
            <div>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
            </div>
            <div>
                <label>Nome do projeto</label>
                <Input type="text" instrucao="Escreva o nome do projeto"/>
                <label>Orçamento</label>
                <Input type="number" instrucao="Valor separado para o projeto"/>
                <label>Tipo</label>
                <select>
                    <option name="Infra">Infra</option>
                    <option name="Desenvolvimento">Desenvolvimento</option>
                    <option name="Design">Design</option>
                    <option name="Planejamento">Planejamento</option>
                </select>
            </div>
            <Botao width={160} height={40} desc="Criar" fontSize={18} funcao={Redirecionar}/>
        </div>
    )
}

export default NovoProjeto
