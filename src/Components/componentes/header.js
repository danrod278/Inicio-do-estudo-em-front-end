import style from '../styles/header.module.css'
import {TbCoinFilled } from 'react-icons/tb'
function Header(){
    return(
        <header className={style.header}>
            <div>
            <TbCoinFilled className={style.coin}/>
            <h1>Cost.com</h1>
            </div>
            <div className={style.linksNav}>
                <nav>
                    <ul>
                        <li><a className={style.link} href="/">Home</a></li>
                        <li><a className={style.link} href="/projetos">Projetos</a></li>
                        <li><a className={style.link} href="/contato">Contato</a></li>
                        <li><a className={style.link} href="/empresa">Empresa</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
