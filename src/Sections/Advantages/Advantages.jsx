import './style.scss'
import advanImg1 from '../../Assets/solar_medal-ribbon-star-outline (1).png';
import advanImg2 from '../../Assets/solar_dumbbell-large-linear.png';
import advanImg3 from '../../Assets/solar_verified-check-linear.png'
import advanImg4 from '../../Assets/solar_map-point-wave-outline.svg';
import advanImg5 from '../../Assets/solar_hand-heart-linear.png';
import advanImg6 from '../../Assets/iconoir_swimming (1).svg';


const Advantages = () => {
    const block = [
        {
            id:1,
            image: advanImg1,
            zgolok: 'Оборудование',
            discription:'Топовые тренажёры от компании Precor'
        },
        {
            id:2,
            image: advanImg2,
            zgolok:'Тренеры',
            discription:'Высокопрофессиональный тренерский состав'
        },
        {
            id:3,
            image: advanImg3,
            zgolok:'Дополнительные услуги',
            discription:'Широкий ассортимент услуг'
        },
        {
            id:4,
            image: advanImg4,
            zgolok:'Локация',
            discription:'Удобное расположение'
        },
        {
            id:5,
            image: advanImg5,
            zgolok:'Сервис',
            discription:'Высококлассное обслуживание '
        },
        {
            id:6,
            Image:advanImg6,
            zgolok:'Бассейн',
            discription:'Инклюзивный бассейн с соленой водой и уникальной системой очистки.'
        }
        
    ]
    return(
        <div id="advantages">
            <div className="advantages">
                <h1 className="advantages--zgolovok">Наши преимущества</h1>
                
                <div className="advantages--blocks">
                    {block.map((el) => {
                        return (
                            <div className="blockk" key={el.id}>
                                <img src={el.image} alt="" />
                                <h1>{el.zgolok}</h1>
                                <p>{el.discription}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Advantages