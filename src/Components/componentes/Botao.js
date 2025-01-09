import styles from "../styles/Botao.module.css"

function Botao({desc, funcao, width, height, fontSize}){
    return(
        <>
            <div class={styles.button} style={{width:`${width}px`, height:`${height}px`}} onClick={funcao}><p style={{'fontSize':`${fontSize}px`}}>{desc}</p></div>
        </>
    )
}

export default Botao
