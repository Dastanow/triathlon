import './Advantages.scss'
import { CustomTitle } from '@ui'
import Img1 from '@assets/solar_hand-heart-linear.svg'
import Img2 from '@assets/iconoir_swimming (1).svg'
import Img3 from '@assets/solar_treadmill-round-linear.svg'
import Img4 from '@assets/solar_bicycling-round-outline.svg'
import Img5 from '@assets/Frame12123.svg'
import Img6 from '@assets/Frame 1000006256.svg'
import { Container } from '@components'
import { useTranslation } from 'react-i18next'

const Advantages = () => {
    const { t } = useTranslation()

    const AdvantagesData = [
        {
            id: '1',
            image: Img1,
            description: 'description',
        },
        {
            id: '2',
            image: Img2,
            description: 'description2',
        },
        {
            id: '3',
            image: Img3,
            description: 'description3',
        },
        {
            id: '4',
            image: Img4,
            description: 'description4',
        },
        {
            id: '5',
            image: Img5,
            description: 'description5',
        },
        {
            id: '6',
            image: Img6,
            description: 'description6',
        },
    ]

    return (
        <section id="advantages" className="advantages">
            <Container classNames="advantagesContainer">
                <CustomTitle title={t('advantages')} />
                <div className="advantagesWrapper">
                    {AdvantagesData.map((advantage) => (
                        <div className="advantagesItem" key={advantage.id}>
                            <img src={advantage.image} alt="img" />
                            <p>{t(advantage.description)}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Advantages
