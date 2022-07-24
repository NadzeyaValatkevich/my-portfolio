import React from 'react';
import style from './Contacts.module.css'
import {Form} from "./form/Form";
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <Form/>
            </div>
        </div>
    );
};

