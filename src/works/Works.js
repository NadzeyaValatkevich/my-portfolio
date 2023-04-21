import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";


export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className= {`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={'My projects'} className={style.title}/>
                <div className={style.works}>
                    <Work title={'Todolist'} description={'Краткое описание'}/>
                    <Work title={'SocialNetwork'} description={'Краткое описание'}/>
                </div>

            </div>

        </div>
    );
};