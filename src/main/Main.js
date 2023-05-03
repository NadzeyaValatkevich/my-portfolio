import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.photo}></div>
                <div className={style.text}>
                    <h1 className={style.mainTitle}>NADZEYA VALATKEVICH</h1>
                    <span className={style.line}></span>
                    <p className={style.titleDescription}>Frontend Developer</p>
                    <div className={style.btnConnection}>
                        <a href={'#'}>Get in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    );
};