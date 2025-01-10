import { useEffect, useState } from "react";
import styles from "../styles/FlashMessage.module.css"

function FlashMessage({desc, tipo, estado}){
    return(
        <>
        {
            estado ? (
                 tipo=="sucesso" ? (
                    <>
                        <section className={styles.FlashS}>
                            <p>{desc}</p>
                        </section>
                    </>
                 ) : (
                    <>
                        <section className={styles.FlashE}>
                            <p>{desc}</p>
                        </section>
                    </>
                 )
            ) : null
        }
        </>
    )
}

export default FlashMessage
