import styles from './avatar.module.css'
export const Avatar = ({hasBorder = true, src}) =>{
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}/>
    )
}