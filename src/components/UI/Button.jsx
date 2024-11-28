import styles from './Button.module.css'

function Button({onClick, children, title, disabled}) {
    return (
        <button className={styles.actionButton} onClick={onClick} disabled={disabled} title={title}>{children}</button>
    )
    
}

export default Button