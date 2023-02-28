import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostItem } from '../../api/request'
import { NewsCard } from '../../components/NewsCard'
import { PostPage } from '../../components/PostPage'
import { Button } from '../../components/UI/Button'

export const ItemPage = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const newsItemID = useParams()
    useEffect(() => {
        getPostItem(newsItemID.id).then((resp) => {
            setPost(resp)
            console.log(resp)
        })
    }, [])

    const [post, setPost] = useState({})

    return (
        <>
            <Button
                type="success"
                click={() => {
                    navigate('/')
                }}
            >
                {t('go_to_home')}
            </Button>
            <PostPage
                img={post.prevImg}
                title={post.title}
                shortDesc={post.shortDesc}
                fullDesc={post.fullDesc}
            />
        </>
    )
}
