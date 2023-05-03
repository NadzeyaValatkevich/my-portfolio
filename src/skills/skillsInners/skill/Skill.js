import React from 'react';
import style from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <span className={style.skillIcon}></span>
            <div className={style.skillBlock}>
                <div className={style.skillTitle}>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    );
}