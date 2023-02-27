import { FaClock, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './NewsCard.module.css'

export const NewsCard = ({ title, desc, time, prevImage, views }) => {
    return (
        <div className={styles.card}>
            <div className={styles.preview}>
                <img src={prevImage} alt={title} />
            </div>

            <div className={styles.info}>
                <span className={styles.infoItem}>
                    <FaEye />
                    {views}
                </span>
                <span className={styles.infoItem}>
                    <FaClock />
                    {time}
                </span>
            </div>
            <h2 className={styles.title}>{title}</h2>

            <p className={styles.desc}>{desc}</p>
            <Link to="/">Подробнее</Link>
        </div>
    )
}
