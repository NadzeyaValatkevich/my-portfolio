import style from "./Button.module.scss";
import React from "react";

export const Button = ({title, href}) => {
    return (
            <a href={href} className={style.btn}>{title}</a>
    )
}