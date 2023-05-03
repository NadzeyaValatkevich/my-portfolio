import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import socialImg from '../assets/image/Screenshot (160)3.png';
import todoListImg from '../assets/image/Screenshot (161).png';
import cardsImg from '../assets/image/Screenshot (158).png';



export const Projects = () => {
    const social = {
        backgroundImage: `url("${socialImg}")`,
        width: '500px'
    }
    const todoList = {
        backgroundImage: `url("${todoListImg}")`,
    }
    const cards = {
        backgroundImage: `url("${cardsImg}")`,
    }

    return (
        <div className={style.projectsBlock}>
            <div className= {`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'My projects'} className={style.title}/>
                <div className={style.projects}>
                    <Project title={'Todolist'}
                             style={todoList}
                             description={'рпомттт ттттт ь ьлллл ььььььь бдббббб лллллл ооооо лллл'}/>
                    <Project title={'SocialNetwork'}
                             style={social}
                             description={'рпомттт ттттт ь ьлллл ььььььь бдббббб лллллл ооооо лллл jnbhbvhb ijjiijjjiij nmn' +
                                 'mnmnmnnnn nhbbbb'}/>
                    <Project title={'Cards'}
                             style={cards}
                             description={'рпомттт ттттт ь ьлллл ььььььь бдббббб лллллл ооооо лллл jnbhbvhb ijjiijjjiij nmn' +
                                 'mnmnmnnnn nhbbbb'}/>
                </div>

            </div>

        </div>
    );
};