import React from 'react';
import style from './Skill.module.scss';
import {SvgGenerator} from "../../../common/components/svgGenerator/SvgGenerator";

export const Skill = ({id, title}) => {
    return (
        <div className={style.skill}>
            <div className={style.skillIcon}>
                <SvgGenerator id={id}></SvgGenerator>
            </div>
            <div className={style.skillBlock}>
                <div className={style.skillTitle}>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    );
}