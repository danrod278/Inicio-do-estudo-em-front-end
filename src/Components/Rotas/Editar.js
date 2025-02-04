import React, { useEffect, useState } from "react";
import styles from "../styles/Editar.module.css"
import Botao from "../componentes/Botao"
import Input from "../componentes/Inputs"
import Servico from '../componentes/Servico'
import {buscaDados, editaProjeto} from "../utils/editarProjeto"
import { useParams } from "react-router-dom";
import FlashMessage from "../componentes/FlashMessage";
import { criaNovoServico } from "../utils/manipularServicos";

function Editar({nome, categoria, orc, orcAp, tipo}){
    const {_id} = useParams()
    const [popup, setPopup] = useState({})
    const [mensagemService, setMensagemServices] = useState({})

    //load inicial
    const [nomeI, setNomeI] = useState()
    const [orcamentoI, setOrcamentoI] = useState()
    const [tipoI, setTipoI] = useState()

    //criar
    const [edit, setEdit] = useState()
    const [name, setName] = useState()
    const [custo, setCusto] = useState()
    const [desc, setDesc] = useState()

    //mudar
    const [mudaNome, setMudaNome] = useState()
    const [mudaOrcamento, setmudaOrcamento] = useState()
    const [mudaTipo, setMudaTipo] = useState("Infra")

    //buttons
    const [stateButton, setStateButton] = useState("Editar")
    const [stateButtonService, setStateButtonService] = useState('Adicionar')

    //setar inputs

    const funcSetmudarNome = (e)=> setMudaNome(e.target.value)
    const funcSetmudarOrcamento = (e)=> setmudaOrcamento(e.target.value)
    const funcSetName = (e)=> setName(e.target.value)
    const funcSetCusto = (e)=> setCusto(e.target.value)
    const funcSetDesc = (e)=> setDesc(e.target.value)
    const funcSetTipo = (e) => setMudaTipo(e.target.value)
    
    //buttons functions
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
        
    }
    const criaService = ()=>{
        
        const statusSave = criaNovoServico(name, custo, desc, _id)
        console.log(statusSave)
        if(statusSave[1]>0){
            setMensagemServices({estado:true, desc:statusSave[0], tipo:"sucesso"})
                setTimeout(()=>{
                    setMensagemServices({estado:false})
            }, 4000)
        }else{
            setMensagemServices({estado:true, desc:statusSave[0], tipo:"erro"})
                setTimeout(()=>{
                    setMensagemServices({estado:false})
            }, 4000)
        }
    }

    //funções interativas
    useEffect(()=>{
        const projeto = buscaDados(_id)
        if(projeto!=false){
            setNomeI(projeto.nomePj)
            setTipoI(projeto.tipoPj)
            setOrcamentoI(projeto.orcamentoPj)
            console.log(orc, tipo, nome)
        }
        console.log(projeto)
        
    }, [_id])

    const editarDados = () => {
        
        if(mudaNome && mudaOrcamento && mudaTipo) {
            var statusAtualizacao = editaProjeto(mudaNome, mudaOrcamento, mudaTipo, _id)
            if(statusAtualizacao) {
                setNomeI(mudaNome)
                setTipoI(mudaTipo)
                setOrcamentoI(mudaOrcamento)
                setPopup({estado:true, desc:"Projeto atualizado com sucesso!", tipo:"sucesso"})
                setTimeout(()=>{
                    setPopup({popup:false})
                }, 4000)
            }
        }
        else {
                setPopup({estado:true, desc:"Necessário preencher todos os campos!", tipo:"erro"})
            setTimeout(()=>{
                setPopup({popup:false})
        }, 4000)
        }
    }

    return(
        <main>
            <div>
                <div>
                    <div className={[styles.cabecalhos]}>
                        <h1>{nomeI} </h1>
                        <Botao desc={stateButton} fontSize={18} funcao={mudaEdit} height={40} width={160}/>
                    </div>
                    <p><span>Orçamento: </span>{orcamentoI}</p>
                    <p><span>Orçamento aplicado: </span>{orcAp}</p>
                    <p><span>Tipo: </span>{tipoI}</p>
                    {
                        edit ? (
                            <div className={`${styles.divEdit} ${styles.forms}`}>
                            <div>
                                <hr/>
                            </div>
                            <label>Nome do projeto</label>
                            <Input instrucao="Escreva o nome do projeto" name="nome" type="text" setFunction={funcSetmudarNome}/>
                            <label>Orçamento</label>
                            <Input type="number" instrucao="Valor separado para o projeto" name="orcamento" setFunction={funcSetmudarOrcamento}/>
                            <label>Tipo</label>
                            <select name="tipo" onChange={funcSetTipo}>
                                <option name="Infra">Infra</option>
                                <option name="Desenvolvimento">Desenvolvimento</option>
                                <option name="Design">Design</option>
                                <option name="Planejamento">Planejamento</option>
                            </select>
                            <FlashMessage desc={popup.desc} estado={popup.estado} tipo={popup.tipo} />
                            <Botao desc="Concluir" fontSize={18}  height={40} width={160} funcao={editarDados}/>
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
                            <Input instrucao="Escreva o nome " name="nome" type="text" setFunction={funcSetName}/>
                            <label>Custo</label>
                            <Input type="number" instrucao="Valor que ira custar" name="custo" setFunction={funcSetCusto}/>
                            <label>Descrição</label>
                            <Input type="text" instrucao="Faça uma descrição breve" name="desc" setFunction={funcSetDesc}/>
                            <FlashMessage desc={mensagemService.desc} estado={mensagemService.estado} tipo={mensagemService.tipo} />
                            <Botao desc="Criar" fontSize={18}  height={40} width={160} funcao={criaService}/>
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
