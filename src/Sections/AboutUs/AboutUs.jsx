import './AboutUs.scss';
import school from '@assets/Placeholder Image.png';
import { Container } from '@components';
import { CustomTitle, CustomButton } from '@ui';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios'

export const AboutUs = () => {
    const { t } = useTranslation();
    const [aboutUsapi, setAboutUsapi] = useState()
    useEffect(() => {
       const FetchData = async () => {
        try {
            const {data} = await axios.get('http://209.38.228.54:83/api/v1/about-us/')
            setAboutUsapi(data);
            console.log(data);
            
        }catch {
            console.log("Failed to fetch data");
        }
       }
       FetchData();
    }, [])
    return (
        <section id="aboutUs" className="aboutUs">
            <Container classNames="aboutUsContainer">
                <CustomTitle title={t('aboutUs')} />
                {aboutUsapi?.map((item) => {
                    return(
                         <div className="aboutUsWrapper">
             
                    <div className="aboutUsImage">
                        <img src={item.image} alt="about us image" />
                    </div>
                    <div className="aboutUsContent">
                        <h3 className="aboutUsTitle">{item.title}</h3>
                        <div className='aboutUsDescription'
                        dangerouslySetInnerHTML={{__html: item.desc}}>
                            
                        </div>
                        <CustomButton type="primary">
                            {t('buttonKR')}
                        </CustomButton>
                    </div>
                </div>
                    )
  
})}
             
            </Container>
        </section>
    );
};