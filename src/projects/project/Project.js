import React from 'react';
import style from './Project.module.scss';

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.img} style={props.style}>
                <a className={style.btnWatchProject}>Смотреть</a>
            </div>
            <div className={style.projectInfo}>
                <h2 className={style.projectTitle}>{props.title}</h2>
                <p className={style.description}>{props.description}</p>
            </div>
        </div>
    );
}