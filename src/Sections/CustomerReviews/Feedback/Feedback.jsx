import { useEffect, useState } from 'react'
import './Feedback.scss'
import { CustomCarousel } from '../../../UI'
import { CustomTitle } from '../../../UI'
import commentService from '../../../Services/commentService'
import { useTranslation } from 'react-i18next'

const Feedback = () => {
    const { t } = useTranslation()
    const [comments, setComments] = useState([])
    const slidesPerView = 3

    useEffect(() => {
        commentService.get().then((data) => setComments(data))
    }, [])

    if (!comments) return 'Loading...'

    return (
        <section className="comments">
            <div className="container">
                <div className="comments__title">
                    <CustomTitle title={'Отзывы наших клиентов'} />
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
