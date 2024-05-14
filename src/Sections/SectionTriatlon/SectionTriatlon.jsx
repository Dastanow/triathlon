import { CustomTitle } from '@ui'
import './SectionTriatlon.scss'
import { Container } from '@components'
import { SectionTriatlhonMobile } from './SectionTriatlhonMobile/SectionTriatlhonMobile'
import { useEffect, useState } from 'react'
import { axiosAPI } from '@/App'
import { useTranslation } from 'react-i18next'

const SectionTriatlon = () => {
    const [rows, setRows] = useState()
    const { t, i18n } = useTranslation()

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
            const { data } = await axiosAPI.get('services')
            setRows(data)
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
                <div id="section">
                    <CustomTitle title={'section_triathlon'} />
                </div>
                {showMobile ? (
                    <SectionTriatlhonMobile rows={rows} />
                ) : (
                    <table>
                        <thead>
                            <tr className="tableHead">
                                <th className="tableTop">
                                    {t('sectionTriathlon.group')}
                                </th>
                                <th className="tableTop">
                                    {t('sectionTriathlon.note')}
                                </th>
                                <th className="tableTop">
                                    {t('sectionTriathlon.time')}
                                </th>
                                <th className="tableTop">
                                    {t('sectionTriathlon.price')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows &&
                                rows.map((row, index) => (
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
