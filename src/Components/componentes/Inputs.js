import styles from "../styles/Input.module.css"

function Input({name, setFunction, instrucao, type}){
    return(
        <>
            <input type={type} name={name} onChange={setFunction} placeholder={instrucao}/>
        </>
    )
}

export default Input
