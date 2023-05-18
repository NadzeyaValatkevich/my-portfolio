import style from './Icon.module.scss';
export const Icon = ({src, alt}) => {
    return (
        <div className={style.icon}>
            <a className={style.iconLink} href={'#'}>
                <img src={src} alt={alt}/>
            </a>
        </div>
    )
}