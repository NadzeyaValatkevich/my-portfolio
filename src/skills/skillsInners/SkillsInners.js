import style from './SkillsInners.module.scss'
import {Skill} from "./skill/Skill";

export const SkillsInners = ({skills, titleTechSkills, textTitleSkills}) => {
    return (
        <div className={style.skillsInners}>
            <div className={style.nameSkillBlock}>
                <h3 className={style.nameSkill}>{titleTechSkills}</h3>
            </div>
            <p className={style.skillsText}>{textTitleSkills}</p>
            <div className={style.skillsInnersBlock}>
                {skills.map((elem, index) => {
                    return <Skill id={elem.id} title={elem.title} key={index}></Skill>
                })}
            </div>
        </div>
    )
}