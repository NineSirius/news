import { useTranslation } from 'react-i18next'
import styles from './PostPage.module.css'

export const PostPage = ({ img, title, shortDesc, fullDesc }) => {
    const { t } = useTranslation()

    return (
        <div className={styles.post}>
            <div className={styles.postPreview}>
                <img src={img} alt={title} />
            </div>

            <div className={styles.postInfo}>
                <h2 className={styles.title}>{title}</h2>
                <p>
                    <strong>{t('post_shortDesc')}: </strong>
                    <br />
                    {shortDesc}
                </p>

                <p>
                    <strong>{t('post_fullDesc')}: </strong>
                    <br />
                    {fullDesc}
                </p>
            </div>
        </div>
    )
}
