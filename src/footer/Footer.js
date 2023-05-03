import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.scss";

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Nadzeya Valatkevich</h2>
                <div className={style.iconBlock}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

