import style from './SkillsInners.module.scss'
import {Skill} from "./skill/Skill";
export const SkillsInners = () => {
    return (
        <div className={style.skillsInners}>
            <div className={style.nameSkillBlock}>
                <h3 className={style.nameSkill}>My tech Skills</h3>
            </div>

            <p className={style.skillsText}>I have tried out lots of different technologies and am always open to new things. Here are the ones I have got most experience with:</p>
            <div className={style.skillsInnersBlock}>
                <Skill></Skill>
                <Skill></Skill>
                <Skill></Skill>
                <Skill></Skill>
                <Skill></Skill>
            </div>
        </div>
    )
}