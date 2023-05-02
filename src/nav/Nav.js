import React from 'react';
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={style.navBlock}>
            <div className={style.nav}>
                <a href="">Main</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
            </div>
            <div className={style.hamburger}>
                <div className={style.hamburgerBox}>
                    <div className={style.hamburgerInner}></div>
                </div>
            </div>
        </div>

    );
}

