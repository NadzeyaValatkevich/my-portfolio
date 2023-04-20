import React from 'react';
import style from './Form.module.css'

export const Form = () => {
    return (
        <div className={style.formBlock}>
            <form className={style.form}>
                <div>
                    <input className={style.input}/>
                </div>
                <div>
                    <input className={style.input}/>
                </div>
                <div>
                    <textarea className={style.description}></textarea>
                </div>
                <button type='submit' className={style.btnContacts}>Send</button>
            </form>
        </div>
    );
};