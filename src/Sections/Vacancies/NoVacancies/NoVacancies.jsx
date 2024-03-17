import { NavLink } from 'react-router-dom'
import './style.scss'

const NoVacancies = () => {
    return(
        <div id="NoVacancies">
            <div className="NoVacancies">
                <div className="NoVacancies--text">
                    <h1>
                Вакансии закрыты. Следите за новыми возможностями!
                    </h1>
                    <p>
                К сожалению, вакансий на данный момент нет, но не расстраивайтесь!
Мы постоянно развиваемся и скоро будем искать новых талантов.
                    </p>
                    <NavLink to={'/'} > 
                        <button>
                            На главную
                        </button>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}

export default NoVacancies