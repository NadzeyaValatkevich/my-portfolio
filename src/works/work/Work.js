import React from 'react';
import style from './Work.module.css'

export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.img}>
                <button className={style.btnWatchWork}>Смотреть</button>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <textarea className={style.description}>{props.description}</textarea>
        </div>
    );
}