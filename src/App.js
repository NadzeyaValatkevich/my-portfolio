import React, {useState} from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {BurgerNav} from "./header/burgerNav/BurgerNav";
import style from './App.module.css';

export const App = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <div className={style.app}>
            <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
            <div className={style.appItems}>
                <div>
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <Contacts/>
                    <Footer/>
                </div>
                <BurgerNav nemuIsOpen={menuIsOpen}/>
            </div>
        </div>
    );
};
