import './style.scss'
import logo from '../../Assets/logotype.png'
import vector from '../../Assets/Vector.svg'
import { Link } from 'react-router-dom'


const Header = () => {
    return(
        <div className="head__draft">

            <div className="head__draft_internal">
                <img className="head__draft_img" src={logo} alt=""  />

                <div className="list__link">
                    <ul className="list__link-all">
                        <li> <Link to="/aboutUs"  className="link"> O нас </Link>
                            <img className="list__link-v" src={vector} alt="" /> </li>
                        <li><Link className="link" to="/subscrition"> Абонементы </Link></li>

                        <li><Link className="link" to="/services"> Услуги

                            <img className="list__link-v" src={vector} alt="" /> </Link></li>

                        <li><Link className="link" to="/trainers"> Тренеры </Link></li>
                        <li><Link className="link" to="/schedule"> Расписание </Link></li>
                        <li><Link className="link" to="/contacts"> Контакты </Link></li>
                    </ul>
                </div>

                <button className="personal__cabinet">
                    Личный кабинет
                </button>
            </div>
       
        </div>
    )
}

export default Header