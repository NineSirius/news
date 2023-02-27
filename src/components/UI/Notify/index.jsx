import styles from './Notify.module.css'

export const Notify = ({ children, show }) => {
    return show && <div className={styles.notify}>{children}</div>
}
