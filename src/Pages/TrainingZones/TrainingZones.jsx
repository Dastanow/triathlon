import './style.scss' 
import  imageTrainingZones1 from '../../Assets/image 4.png'
import  imageTrainingZones2 from '../../Assets/image 5.png'
import { IoIosArrowForward } from 'react-icons/io';
import Module from '../../Modules/ModulWindow/Modale';
import { useState } from 'react';


const TrainingZones = () => {
    const [modale,setModale] = useState(false)
    const trainingZone = [
        {
            id:1,
            image: imageTrainingZones1,
            bassein:'Бассейн',
            location:'Тренировочные зоны 17 000 с в месяц'
        },
        {
            id:2,
            image: imageTrainingZones2,
            bassein:'Бассейн',
            location:'Тренировочные зоны 17 000 с в месяц'
        },
    ]
    return(
        <div id="trainingZones">
            <div className="trainingZones">
                <h1 className="trainingZones--zgolok">Тренировочные зоны</h1>
                <div className="trainingZones--blocks">
                    {trainingZone.map((el)=>{
                        return(
                            <div className="blockk" key={el.id}>
                                <img src={el.image} alt="" />
                                <div className="blockk--content">
                                    <div className="blockk--content__text">
                                        <h1>{el.bassein}</h1>
                                        <p>{el.location}</p>
                                    </div>
                                    <button onClick={() => setModale(true)}>Оставить заявку <IoIosArrowForward/></button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="modalWindow">
                    { modale ? <Module/>  : null } 
                </div>
            </div>
        </div>
    )
}

export default TrainingZones