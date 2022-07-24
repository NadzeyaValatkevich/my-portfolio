import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JavaScript'} description={'Подробное описание навыка'}/>
                    <Skill title={'CSS'} description={'Подробное описание навыка'}/>
                    <Skill title={'React'} description={'Подробное описание навыка'}/>
                    <Skill title={'React'} description={'Подробное описание навыка'}/>
                    <Skill title={'React'} description={'Подробное описание навыка'}/>
                </div>

            </div>

        </div>
    );
};