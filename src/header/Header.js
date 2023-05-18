import React from 'react';
import style from './Header.module.scss';
import {Nav} from "./nav/Nav";

export const Header = ({menuIsOpen, setMenuIsOpen}) => {
    return (
        <div className={style.header}>
            <Nav nemuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen}/>
        </div>
    );
};

