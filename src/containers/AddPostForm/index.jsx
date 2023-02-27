import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { setPosts } from '../../api/request'
import { Button } from '../../components/UI/Button'
import { Notify } from '../../components/UI/Notify'
import styles from './AddPostForm.module.css'

export const AddPostForm = () => {
    const [postInfo, setPostInfo] = useState({
        title: '',
        shortDesc: '',
        fullDesc: '',
        previImg: '',
    })

    const [show, setShow] = useState(false)

    const { t } = useTranslation()

    const change = (e) => {
        setPostInfo((postInfo) => {
            return { ...postInfo, [e.target.name]: e.target.value }
        })
    }

    const submit = (e) => {
        e.preventDefault()
        setPosts(postInfo).finally(() => {
            setShow(true)
        })
    }

    return (
        <form onSubmit={submit}>
            <div className={styles.form}>
                <label>
                    <div className={styles.formItem}>
                        <input
                            className={styles.input}
                            type="text"
                            name="title"
                            onChange={change}
                            required
                        />
                        <span className={styles.formItemTitle}>{t('post_title')}</span>
                    </div>
                </label>
                <label>
                    <div className={styles.formItem}>
                        <input
                            type="text"
                            name="shortDesc"
                            onChange={change}
                            className={styles.input}
                            required
                        />
                        <span className={styles.formItemTitle}>{t('post_shortDesc')}</span>
                    </div>
                </label>
                <label>
                    <div className={styles.formItem} contenteditable>
                        <textarea
                            className={styles.input}
                            type="text"
                            name="fullDesc"
                            onChange={change}
                            required
                        ></textarea>
                        <span className={styles.formItemTitle}>{t('post_fullDesc')}</span>
                    </div>
                </label>
                <label>
                    <div className={styles.formItem}>
                        <input
                            className={styles.input}
                            type="text"
                            name="prevImg"
                            onChange={change}
                            required
                        />
                        <span className={styles.formItemTitle}>{t('post_previewImg')}</span>
                    </div>
                </label>

                <Notify show={show}>Пост опубликован!</Notify>

                <Button type="success" disabled={show}>
                    {t('publicate')}
                </Button>
            </div>
        </form>
    )
}
