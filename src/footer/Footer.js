import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import {Icon} from '../common/components/icon/Icon';
import viber from '../assets/icons/viber.svg';
import vk from '../assets/icons/vk.svg';
import instagram from '../assets/icons/instagram.svg';
import telegram from '../assets/icons/telegram.svg';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.iconBlock}>
                    <Icon src={viber} alt={'viber'}></Icon>
                    <Icon src={vk} alt={'vk'}></Icon>
                    <Icon src={instagram} alt={'instagram'}></Icon>
                    <Icon src={telegram} alt={'telegram'}></Icon>
                </div>
            </div>
        </div>
    );
};

