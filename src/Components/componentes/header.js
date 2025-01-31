import style from '../styles/header.module.css'
import {TbCoinFilled } from 'react-icons/tb'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";


function Header(){

    const [menuState, setMenuState] = useState(false)

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
               
                <FiMenu className={style.menu} onClick={()=>setMenuState(!menuState)} />
                <div className={`${style.linksMenu} ${menuState ? style.menuOn : ""}`}>
                    <ul>
                        <li><IoCloseCircleOutline className={style.fechar} onClick={()=>setMenuState(false)} />
                        </li>
                        <li><a className={style.linkMenu} href="/">Home</a></li>
                        <li><a className={style.linkMenu} href="/projetos">Projetos</a></li>
                        <li><a className={style.linkMenu} href="/empresa">Empresa</a></li>
                        <li><a className={style.linkMenu} href="/contato">Contato</a></li>
                    </ul>
                        
                </div>
            </div>
        </header>
    )
}

export default Header
