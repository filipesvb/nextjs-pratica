import styles from './textarea.module.css'

export const Textarea = ({nome, placeholder, rows}) => {
    return (
        <textarea name={nome} placeholder={placeholder} className={styles.textarea} rows={rows}></textarea>
    )
}