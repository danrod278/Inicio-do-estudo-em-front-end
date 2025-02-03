import Botao from '../componentes/Botao'
import Input from '../componentes/Inputs'
import styles from '../styles/Nprojeto.module.css'
import { redirect, useNavigate } from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import useSalvaLocalStorage from '../utils/salvaObjLocalStorage' 
import FlashMessage from '../componentes/FlashMessage'
function NovoProjeto(){

    const [nameProject, setNameProject] = useState()
    const [valueProject, setValueProject] = useState()
    const [tipo, setTipo] = useState('Infra')
    const [flashMessage, setFlashMessage] = useState({})
    const navigate = useNavigate()
    
    const Redirecionar = ()=>{
        var estatusSave = useSalvaLocalStorage(nameProject, valueProject, tipo)
        
        if(estatusSave===true){
            navigate("/projetos", {state:true})
            return
        }
        setFlashMessage({popup:true, log:estatusSave, tipo:"erro"})
        setTimeout(()=>{
            setFlashMessage({popup:false})
        }, 4000)
    }

    const mudaNome = (e)=>{
        setNameProject(e.target.value)
        
    }
    const mudaValor = (e)=>{
        setValueProject(e.target.value)
        
    }
    const mudaTipo = (e)=>{
        setTipo(e.target.value)
        
    }


    return(
        <div className={styles.main}>

            <div>
            
                <h1>Criar Projeto</h1>
                <p className={styles.mensagem}>Crie seu projeto para depois adicionar os serviços</p>
            </div>

            <div>
                <label>Nome do projeto</label>
                <Input type="text" instrucao="Escreva o nome do projeto" name={'projectName'} setFunction={mudaNome}/>
                <label>Orçamento</label>
                <Input type="number" instrucao="Valor separado para o projeto" name={'valorProject'} setFunction={mudaValor}/>
                <label>Tipo</label>
                <select className={styles.select} name="tipo" onChange={mudaTipo}>
                    <option name="Infra">Infra</option>
                    <option name="Desenvolvimento">Desenvolvimento</option>
                    <option name="Design">Design</option>
                    <option name="Planejamento">Planejamento</option>
                </select>
            </div>
            <div>
                <FlashMessage desc={flashMessage.log} tipo={flashMessage.tipo} estado={flashMessage.popup}/>
                <Botao width={160} height={40} desc="Criar" fontSize={18} funcao={Redirecionar}/></div>
        </div>
    )
}

export default NovoProjeto
