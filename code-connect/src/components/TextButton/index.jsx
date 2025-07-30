import styles from './textbutton.module.css'

export const TextButton = ({ children, ...rest }) => {
    return (<button {...rest} className={styles.btn}>
        {children}
    </button>)
}