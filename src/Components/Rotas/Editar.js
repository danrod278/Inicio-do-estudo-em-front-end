import React, { useState } from "react";
import styles from "../styles/Editar.module.css"
import Botao from "../componentes/Botao"
import Input from "../componentes/Inputs"
import Servico from '../componentes/Servico'

function Editar({nome, categoria, orc, orcAp, tipo}){

    
    const [edit, setEdit] = useState()
    const [name, setName] = useState()
    const [orcamento, setOrcamento] = useState()
    const [stateButton, setStateButton] = useState("Editar")
    const [stateButtonService, setStateButtonService] = useState('Adicionar')
    const mudaNome=(e)=>{
        setName(e)
    }
    const mudaOrcamento = (e)=>{
        setOrcamento(e)
    }
    const mudaEdit = ()=>{
        if(stateButton=="Editar"){
            setEdit(true)
            setStateButton('Fechar')
        
        }else if(stateButton=="Fechar"){
            setEdit(false)
            setStateButton("Editar")
        }
        console.log(stateButton)
    }
    const mudaButtonService = ()=>{
        if(stateButtonService=="Adicionar"){
            
            setStateButtonService('Fechar')
        
        }else if(stateButtonService=="Fechar"){
            
            setStateButtonService("Adicionar")
        }
        console.log(stateButtonService)
        
    }

    return(
        <main>
            <div>
                <div>
                    <div className={[styles.cabecalhos]}>
                        <h1>Projeto: AprimoramensasaSto da inASASfra estrutura {nome}</h1>
                        <Botao desc={stateButton} fontSize={18} funcao={mudaEdit} height={40} width={160}/>
                    </div>
                    <p><span>Categoria:</span> {categoria}</p>
                    <p><span>Orçamento: </span>{orc}</p>
                    <p><span>Orçamento aplicado: </span>{orcAp}</p>
                    <p><span>Tipo: </span>{tipo}</p>
                    {
                        edit ? (
                            <div className={`${styles.divEdit} ${styles.forms}`}>
                            <div>
                                <hr/>
                            </div>
                            <label>Nome do projeto</label>
                            <Input instrucao="Escreva o nome do projeto" name="nome" type="text" setFunction={mudaNome}/>
                            <label>Orçamento</label>
                            <Input type="number" instrucao="Valor separado para o projeto" name="orcamento" setFunction={mudaOrcamento}/>
                            <label>Tipo</label>
                            <select name="tipo">
                                <option name="Infra">Infra</option>
                                <option name="Desenvolvimento">Desenvolvimento</option>
                                <option name="Design">Design</option>
                                <option name="Planejamento">Planejamento</option>
                            </select>
                            <Botao desc="Concluir" fontSize={18}  height={40} width={160}/>
                        </div>
                        ) :null
                    }
                </div>
                
            </div>

            <div className={styles.divServicos}>
                <hr/>   
                <div className={[styles.cabecalhos]}> 
                    <h1>Adicionar Serviço</h1>
                    <Botao desc={stateButtonService} fontSize={18} funcao={mudaButtonService} height={40} width={160}/>
                </div>
                

                {
                    stateButtonService=="Fechar" ? (
                        <div className={`${styles.forms}`}>
                        
                            <label>Nome</label>
                            <Input instrucao="Escreva o nome " name="nome" type="text" setFunction={mudaNome}/>
                            <label>Custo</label>
                            <Input type="number" instrucao="Valor que ira custar" name="orcamento" setFunction={mudaOrcamento}/>
                            <label>Descrição</label>
                            <Input type="number" instrucao="Faça uma descrição breve" name="orcamento" setFunction={mudaOrcamento}/>
                            <Botao desc="Criar" fontSize={18}  height={40} width={160}/>
                        </div>
                    ) :null
                }
                <hr/>
            </div>
            
            <div>
                <h2>Serviços</h2>
                <div className={styles.ServicesCards}>
                    <Servico custo={2000} desc={"Serve para melhorar o hardware"} id={2} nome={"Aprimoramento do harware"} />
                    <Servico custo={2000} desc={"Serve para melhorar o hardware"} id={2} nome={"Aprimoramento do harware"} />
                    <Servico custo={2000} desc={"Serve para melhorar o hardware"} id={2} nome={"Aprimoramento do harware"} />
                    <Servico custo={2000} desc={"Serve para melhorar o hardware"} id={2} nome={"Aprimoramento do harware"} />
                    <Servico custo={2000} desc={"Serve para melhorar o hardware"} id={2} nome={"Aprimoramento do harware"} />
                    <Servico custo={2000} desc={"Serve para melhorar o hardware"} id={2} nome={"Aprimoramento do harware"} />
                    <Servico custo={2000} desc={"Serve para melhorar o hardware"} id={2} nome={"Aprimoramento do harware"} />
                    <Servico custo={2000} desc={"Serve para melhorar o hardware"} id={2} nome={"Aprimoramento do harware"} />
                    <Servico custo={2000} desc={"Serve para melhorar o hardware"} id={2} nome={"Aprimoramento do harware"} />
                </div>

            </div>
        </main>
    )
}

export default Editar
