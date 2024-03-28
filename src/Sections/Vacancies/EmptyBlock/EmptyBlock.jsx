import { Link } from 'react-router-dom'
import './style.scss'

const EmptyBlock = () => {
    return(
        <div className="EmptyBlock" id="EmptyBlock">
            <div className="EmptyBlock--text">
                <h2>
                Вакансии закрыты. Следите за новыми возможностями!
                </h2>
                <p>
                К сожалению, вакансий на данный момент нет, но не расстраивайтесь!
Мы постоянно развиваемся и скоро будем искать новых талантов.
                </p>
                <Link to="/" > 
                    <button>
                            На главную
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EmptyBlock