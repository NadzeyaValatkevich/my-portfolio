import style from "./Title.module.scss";
import React from "react";

export const Title = (props) => {
    return (
        <div className={`${style.title} ${props.className}`}>
            <h2>{props.text}</h2>
        </div>
    )
}
