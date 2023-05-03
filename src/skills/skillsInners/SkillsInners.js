import style from './SkillsInners.css'
import {Skill} from "./skill/Skill";
export const SkillsInners = () => {
    return (
        <div className={style.skillsInners}>
            <div className={style.nameSkillBlock}>
                <h3 className={style.nameSkill}>My tech Skills</h3>
            </div>

            <p className={style.skillsText}>mknnnn njjmmm mkjnnhhuu mmmkkkjjj</p>
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