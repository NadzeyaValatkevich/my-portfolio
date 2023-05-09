import style from "./Button.module.scss";
import React from "react";

export const Button = ({title}) => {
    return (
        <div className={style.btnConnection}>
            <a href={'#'}>{title}</a>
        </div>
    )
}