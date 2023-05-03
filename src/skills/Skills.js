import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";
import {SkillsInners} from "./skillsInners/SkillsInners";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className= {`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'} className={style.title}/>
                <div className={style.skills}>
                    <SkillsInners/>
                    <SkillsInners/>
                    {/*<div className={style.skillsTech}>*/}
                    {/*    <div></div>*/}
                    {/*    <div>*/}
                    {/*        <Skill title={'JavaScript'} description={'Подробное описание навыка'}/>*/}
                    {/*        <Skill title={'CSS'} description={'Подробное описание навыка'}/>*/}
                    {/*        <Skill title={'React'} description={'Подробное описание навыка'}/>*/}
                    {/*        <Skill title={'React'} description={'Подробное описание навыка'}/>*/}
                    {/*        <Skill title={'React'} description={'Подробное описание навыка'}/>*/}
                    {/*    </div>*/}
                    {/*    */}
                    {/*</div>*/}
                    {/*<div className={style.skillsMeta}></div>*/}
                </div>

            </div>
        </div>
    );
};