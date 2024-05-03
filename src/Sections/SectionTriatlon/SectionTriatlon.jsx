import { CustomTitle } from '@ui'
import './SectionTriatlon.scss'
import { Container } from '@components'
import { SectionTriatlhonMobile } from './SectionTriatlhonMobile/SectionTriatlhonMobile'
import { useEffect, useState } from 'react'
import { axiosAPI } from '@/App'
import { useTranslation } from 'react-i18next'

const SectionTriatlon = () => {
    const [rows, setRows] = useState()
    const { i18n } = useTranslation()

    const [showMobile, setShowMobile] = useState(
        window.matchMedia('(max-width: 768px)').matches,
    )

    useEffect(() => {
        window.addEventListener('resize', () => {
            setShowMobile(window.matchMedia('(max-width: 768px)').matches)
        })
    }, [])

    const funcGet = async () => {
        try {
            const res = await axiosAPI.get(
                'http://209.38.228.54:83/api/v1/services/',
            )
            setRows(res.data)
        } catch (err) {
            console.log(err, 'error in SectionTriatlon')
        }
    }

    useEffect(() => {
        funcGet()
    }, [i18n.language])

    return (
        <section id="table" className="tableMobile">
            <Container classNames="tableMobileContainer">
                <CustomTitle title={'Секции Триатлон'} />
                {showMobile ? (
                    <SectionTriatlhonMobile rows={rows} />
                ) : (
                    <table>
                        <thead>
                            <tr className="tableHead">
                                <th className="tableTop">Группа</th>
                                <th className="tableTop">Примечание</th>
                                <th className="tableTop">
                                    Кол-во часов в нед.
                                </th>
                                <th className="tableTop">Стоимость</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr className="tableBody" key={index}>
                                    <td>{row.title}</td>
                                    <td>{row.note}</td>
                                    <td>{row.hours_week}</td>
                                    <td>{row.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </Container>
        </section>
    )
}

export default SectionTriatlon
