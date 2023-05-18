import React from 'react';
import style from './BurgerNav.module.scss';
import { Link } from 'react-scroll';
import Fade from "react-reveal/Fade";


export const BurgerNav = ({menuIsOpen}) => {

    return (
        <Fade right>
        <div className={menuIsOpen ? `${style.burgerNavBlock} ${style.show}` : style.burgerNavBlock}>
            <div className={style.burgerNav}>
                <div className={style.burgerPhoto}></div>
                <Link activeClass={style.active}
                      to="main"
                      spy={true}
                      smooth={true}
                      duration={500} >Main</Link>
                <Link activeClass={style.active}
                      to="skills"
                      spy={true}
                      smooth={true}
                      duration={500} >Skills</Link>
                <Link activeClass={style.active}
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={500} >Projects</Link>
                <Link activeClass={style.active}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      duration={500} >Contacts</Link>
            </div>
        </div>
            </Fade>
    );
}

