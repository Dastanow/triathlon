import './style.scss'
import AdvanData from './AdvanFakeData.json'

const Advantages = () => {
    return(
        <div id="advantages">
            <div className="advantages">
                <h1 className="advantages--zgolovok">Наши преимущества</h1>
                
                <div className="advantages--blocks">
                    {AdvanData.map((el) => {
                        return (
                            <div className="blockk" key={el.id}>
                                <img src={el.image} alt="" />
                                {/* <h1>{el.zgolok}</h1> */}
                                <p>{el.discription}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Advantages