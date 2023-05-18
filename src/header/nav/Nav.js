import React from 'react';
import style from './Nav.module.scss';
import { Link } from 'react-scroll'


export const Nav = ({menuIsOpen, setMenuIsOpen}) => {

    const onClickHandler = () => {
        setMenuIsOpen(!menuIsOpen);
        console.log(menuIsOpen)
    };

    return (
        <div className={style.navBlock}>
            <div className={style.nav}>
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
            <div className={style.burger} onClick={onClickHandler}>
                <div className={style.burgerBox}>
                    <div className={style.burgerInner}></div>
                </div>
            </div>
        </div>

    );
}

