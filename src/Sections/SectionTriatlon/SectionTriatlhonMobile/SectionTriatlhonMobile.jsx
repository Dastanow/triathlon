import { useState } from 'react'
import '../SectionTriatlon.scss'
import PropTypes from 'prop-types'
import { FaArrowLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'

export const SectionTriatlhonMobile = ({ rows }) => {
    const [currentSlide, setCurrentSlide] = useState(1)

    const nextSlide = () => {
        if (currentSlide >= 9) {
            setCurrentSlide(1)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide <= 1) {
            setCurrentSlide(9)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <>
            {rows
                .filter((item) => item.id == currentSlide)
                .map((item) => (
                    <table key={item.id} className="mobileTable">
                        <tbody>
                            <tr className="tableBody">
                                <th className="tableTop">Группа</th>
                                <td className="tableTop">{item.group}</td>
                            </tr>
                            <tr className="tableBody">
                                <th>Примечание</th>
                                <td>{item.note}</td>
                            </tr>
                            <tr className="tableBody">
                                <th>Кол-во часов в нед.</th>
                                <td>{item.hours}</td>
                            </tr>
                            <tr className="tableBody">
                                <th>Стоимость</th>
                                <td>{item.cost}</td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            <div className="tableButtons">
                <button onClick={prevSlide}>
                    <FaArrowLeft />
                </button>
                <button onClick={nextSlide}>
                    <FaArrowRight />
                </button>
            </div>
        </>
    )
}

SectionTriatlhonMobile.propTypes = {
    rows: PropTypes.array.isRequired,
}
