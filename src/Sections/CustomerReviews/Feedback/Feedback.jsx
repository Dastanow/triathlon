import { useEffect, useState } from 'react'
import './Feedback.scss'
import { CustomCarousel, CustomTitle } from '@/UI'
import commentService from '@/Services/commentService'
import useInitStateCarousel from '@/hooks/useInitStateCarousel'
import { useTranslation } from 'react-i18next'

const Feedback = () => {
    const { t, i18n } = useTranslation()
    const [comments, setComments] = useState([])
    const [, , , slidesPerView] = useInitStateCarousel()

    useEffect(() => {
        commentService.get().then((data) => setComments(data))
    }, [i18n.language])

    if (comments.length === 0) return 'Loading...'

    return (
        <section className="comments" id="comments">
            <div className="container">
                <div className="comments__title">
                    <CustomTitle title={t('feedback')} />
                </div>
                <h4 className="comments__subtitle">{t('feedbacktitle')}</h4>
                <CustomCarousel
                    slidesPerView={slidesPerView}
                    dataArray={comments}
                />
            </div>
        </section>
    )
}

export default Feedback
