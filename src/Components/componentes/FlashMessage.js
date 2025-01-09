import { useEffect, useState } from "react";
import styles from "../styles/FlashMessage.module.css"

function FlashMessage({desc, tipo}){
    const [popupState, setPopupState] = useState()

    useEffect(()=>{
        setPopupState(true)

        const time= setTimeout(()=>{
            setPopupState(false)
        }, 4000)

        
    }, [])

    return(
        <>
        {
            popupState ? (
                 tipo=="sucesso" ? (
                    <>
                        <div className={styles.FlashS}>
                            <p>{desc}</p>
                        </div>
                    </>
                 ) : (
                    <>
                        <div className={styles.FlashE}>
                            <p>{desc}</p>
                        </div>
                    </>
                 )
            ) : null
        }
        </>
    )
}

export default FlashMessage
