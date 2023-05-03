import React from 'react';
import style from './Contacts.module.css'
import {Form} from "./form/Form";
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'} className={style.title}/>
                {/*<h2 className={style.title}>Contacts</h2>*/}
                <Form/>
            </div>
        </div>
    );
};

