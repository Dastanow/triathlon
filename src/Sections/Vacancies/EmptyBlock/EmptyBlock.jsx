import { Link } from 'react-router-dom'
import './EmptyBlock.scss'

export const EmptyBlock = () => {
    return (
        <div className="EmptyBlock" id="EmptyBlock">
            <p className="EmptyBlock__text">
                На данный момент нет активных вакансий, следите за новостями
            </p>
            <Link to="/" className="EmptyBlock__link">
                На главную
            </Link>
        </div>
    )
}
