import style from './Icon.module.scss';
export const Icon = ({svg}) => {
    return (
        <div className={style.icon}>
            <a className={style.iconLink} href={'#'}>
                {svg}
            </a>
        </div>
    )
}