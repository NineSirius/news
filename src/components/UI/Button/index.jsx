import clsx from 'clsx'
import styles from './Button.module.css'

export const Button = ({ children, type, click, show }) => {
    return (
        <button className={clsx(styles.btn, type && styles[type])} onClick={click} disabled={show}>
            {children}
        </button>
    )
}
