import { useState } from 'react'
import '../SectionTriatlon.scss'
import PropTypes from 'prop-types'
import { FaArrowLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'

export const SectionTriatlhonMobile = ({ rows }) => {
    const [currentSlide, setCurrentSlide] = useState(1)
    console.log(rows)

    const nextSlide = () => {
        if (currentSlide >= rows.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide <= 0) {
            setCurrentSlide(rows.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <>
            {rows &&
                rows
                    .filter((_, id) => id == currentSlide)
                    .map((item) => (
                        <table key={item.id} className="mobileTable">
                            <tbody>
                                <tr className="tableBody">
                                    <th className="tableTop">Группа</th>
                                    <td className="tableTop">{item.title}</td>
                                </tr>
                                <tr className="tableBody">
                                    <th>Примечание</th>
                                    <td>{item.note}</td>
                                </tr>
                                <tr className="tableBody">
                                    <th>Кол-во часов в нед.</th>
                                    <td>{item.hours_week}</td>
                                </tr>
                                <tr className="tableBody">
                                    <th>Стоимость</th>
                                    <td>{item.price}</td>
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
