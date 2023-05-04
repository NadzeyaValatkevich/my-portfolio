import React from 'react';
import style from './Skill.module.scss'
import {SvgGenerator} from "../../../common/components/svgGenerator/SvgGenerator";

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <span className={style.skillIcon}>
                <SvgGenerator title={props.title}></SvgGenerator>
            </span>
            <div className={style.skillBlock}>
                <div className={style.skillTitle}>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    );
}