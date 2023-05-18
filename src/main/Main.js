import React from 'react';
import styles from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {Button} from '../common/components/button/Button';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from "react-typing-effect";


export const Main = () => {
    return (
        <div id={'main'} className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <Fade bottom>
                    <div className={styles.photo}></div>
                    <div className={styles.text}>
                        <h1 className={styles.mainTitle}>NADZEYA VALATKEVICH</h1>
                        <span className={styles.line}></span>
                        <ReactTypingEffect
                            text={["Frontend Developer"]}
                        />
                        <Button title={'Get in Touch'} href={'#contacts'} className={styles.btn}/>
                    </div>
                </Fade>
            </div>
            {/*<BurgerNav nemuIsOpen={nemuIsOpen}/>*/}
        </div>
    );
};