import React from 'react';
import style from './Form.module.scss'
import {Button} from "../../common/components/button/Button";

export const Form = () => {
    return (
        <div className={style.formBlock}>
            <form className={style.form}>
                <div className={style.formInput}>
                    <input className={style.input} id={'name'} type={'text'} placeholder={'Name'}/>
                </div>
                <div className={style.formInput}>
                    <input className={style.input} id={'email'} type={'email'} placeholder={'Email'}/>
                </div>
                <div>
                    <textarea className={style.message} id={'message'} placeholder={'Message'}></textarea>
                </div>
                <button type={'submit'}>Send Message</button>
                {/*<Button title={'Send Message'}/>*/}
            </form>
        </div>
    );
};