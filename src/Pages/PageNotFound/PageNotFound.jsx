import './style.scss'
import error from '../../Assets/Group 2.png'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="error__container" id="error404">
            <div className="error__content">
                <div>
                    <h2>Ой-ой! Заблудились?</h2>
                    <p>Не беспокойтесь, мы поможем! Вернитесь на стартовую страницу и продолжим путь к спортивным достижениям вместе!</p>
                    <Link to="/"><button>Назад</button></Link> 
                </div>
            </div>
            <div className="error__image">
                <img src={error} alt="img" />
            </div>
        </div>
    )
}

export default PageNotFound