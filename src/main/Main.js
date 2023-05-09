import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Button} from "../common/components/button/Button";

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.photo}></div>
                <div className={style.text}>
                    <h1 className={style.mainTitle}>NADZEYA VALATKEVICH</h1>
                    <span className={style.line}></span>
                    <p className={style.titleDescription}>Frontend Developer</p>
                    <Button title={'Get in Touch'} className={style.btnConnection}/>
                </div>
            </div>
        </div>
    );
};