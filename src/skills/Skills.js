import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Title} from "../common/components/title/Title";
import {SkillsInners} from "./skillsInners/SkillsInners";

export const Skills = () => {
    const techSkills = [
        {id: 'html', title: 'HTML'},
        {id: 'css', title: 'CSS'},
        {id: 'scss', title: 'SASS'},
        {id: 'javascript', title: 'Javascript'},
        {id: 'typescript', title: 'Typescript'},
        {id: 'react', title: 'React'},
        {id: 'redux', title: 'Redux'},
        {id: 'git', title: 'Git'},
        {id: 'materialUI', title: 'Material UI'},
        {id: 'storybook', title: 'Storybook'},
    ];
    const metaSkills = [
        {id: 'communication', title: 'Communication'},
        {id: 'teamWork', title: 'Team work'},
        {id: 'adaptability', title: 'Adaptability'},
        {id: 'planning', title: 'Planning'},
        {id: 'empathy', title: 'Empathy'},
    ];
    const titleSkills = ['My teck skills', 'My meta skills'];
    const textTitleSkills = [
        'I have tried out lots of different technologies and am always open to new things. ' +
        'Here are the ones I have got most experience with:',
        'I love exploring the world around me by talking to people, learning about their culture and making new connections. ' +
        'Over time I have developed many useful skills, here are some of them:'
    ];
    return (
        <div id={'skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'} className={style.title}/>
                <div className={style.skills}>
                    <SkillsInners skills={techSkills} titleTechSkills={titleSkills[0]}
                                  textTitleSkills={textTitleSkills[0]}/>
                    <SkillsInners skills={metaSkills} titleTechSkills={titleSkills[1]}
                                  textTitleSkills={textTitleSkills[1]}/>
                </div>
            </div>
        </div>
    );
};