import { useState } from 'react'
import '../SectionTriatlon.scss'
import PropTypes from 'prop-types'
import { FaArrowLeft } from 'react-icons/fa6'
import { FaArrowRight } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

export const SectionTriatlhonMobile = ({ rows }) => {
    const [currentSlide, setCurrentSlide] = useState(1)
    const { t } = useTranslation()

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
                    .map((item, id) => (
                        <table key={id} className="mobileTable">
                            <tbody>
                                <tr className="tableBody">
                                    <th className="tableTop">
                                        {t('sectionTriathlon.group')}
                                    </th>
                                    <td className="tableTop">{item.title}</td>
                                </tr>
                                <tr className="tableBody">
                                    <th>{t('sectionTriathlon.note')}</th>
                                    <td>{item.note}</td>
                                </tr>
                                <tr className="tableBody">
                                    <th>{t('sectionTriathlon.time')}</th>
                                    <td>{item.hours_week}</td>
                                </tr>
                                <tr className="tableBody">
                                    <th>{t('sectionTriathlon.price')}</th>
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
    rows: PropTypes.array,
}
