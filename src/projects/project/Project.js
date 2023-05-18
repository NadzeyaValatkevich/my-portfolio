import React from 'react';
import style from './Project.module.scss';
import { Tilt } from 'react-tilt';

export const Project = (props) => {
    return (
        <Tilt options={{max: 25}}>
            <div className={style.project}>
                <div className={style.img} style={props.style}>
                    <a className={style.btnWatchProject}>Смотреть</a>
                </div>
                <div className={style.projectInfo}>
                    <h2 className={style.projectTitle}>{props.title}</h2>
                    <p className={style.description}>{props.description}</p>
                </div>
            </div>
        </Tilt>
    );
}