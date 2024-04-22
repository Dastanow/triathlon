import './Advantages.scss';
import AdvanData from './AdvanFakeData.json';
import CustomTitle from '../../UI/CustomTitle/CustomTitle';
import { useTranslation } from 'react-i18next';

const Advantages = () => {
    const {t} = useTranslation();
    return (
        <div className="advantages" id="advantages">
            <CustomTitle title={t('advantages')}/>
            <div className="advantages--blocks">
                {AdvanData.map((el) => {
                    return (
                        <div className="block--Two" key={el.id}>
                            <img src={el.image} alt="img" />
                            <p>{t(el.discription)}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Advantages;
