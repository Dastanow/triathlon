import './Requisites.scss'
import subscription from '../../../Assets/subscription.svg'
import call from '../../../Assets/call.svg'
import card from '../../../Assets/card.svg'
import geolocation from '../../../Assets/geolocation.svg'

const Requisites = () => {
    return (
        <div>
            <div className="logotype">
                <img className="logotype__icon" src={subscription} alt="icon" />
            </div>
            <div className="requisites">
                <label className="requisites__title">TRIATHLON CENTER</label>
                <p className="requisites__info">Для оплаты онлайн -  связаться с отделом продаж </p>
                <div className="phone">
                    <img className="phone__call" src={call} alt="call" />
                    <div className="phone__reference">
                        <a className="phone__number-one" href="https://wa.me/996227000180" target="_blank">0(227) 00 01 80</a>
                        <a className="phone__number" href="https://wa.me/996997000180" target="_blank">0(997) 00 01 80</a>
                    </div>
                
                </div>
                <img className="card" src={card} alt="card" />
                <p className="payment">Оплата наличными и картой - подойти в Триатлон-Центр.</p>
                <div className="location">
                    <img className="location__icon" src={geolocation} alt="location" />
                    <span className="location__reference">Бишкек, ул.Фатьянова 10</span>
                </div>
            </div>
        </div>
    )
}

export default Requisites