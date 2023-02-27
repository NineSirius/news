import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostItem } from '../../api/request'
import { NewsCard } from '../../components/NewsCard'

export const ItemPage = () => {
    const newsItemID = useParams()
    useEffect(() => {
        getPostItem(newsItemID.id).then((resp) => setPost(resp))
    }, [])

    const [post, setPost] = useState({})

    return (
        <>
            <NewsCard
                key={post.id}
                title={post.title}
                desc={post.shortDesc}
                time={post.time}
                prevImage={post.prevImg}
                views={post.views || 0}
                id={post.id}
            />
        </>
    )
}
