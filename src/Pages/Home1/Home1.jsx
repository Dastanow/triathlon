import React from 'react'
import './Home1.scss'
import wp from '../../Assets/wp1.png'

const Home1 = () => {
    return (
        <div className="block">
            <div className="menu" >

                <h2 className="title">TRIATHLON CENTER</h2>

                <p className="text">Преодолевай границы, превосходи себя вместе с нами!</p>
            
                <div className="menu_btn">
                    <button className="btn">Оставить заявку</button>
                </div>

                <div className="whatapp">
                
                    <a href="https://api.whatsapp.com/send/?phone=996227000180&type=phone_number&app_absent=0&fbclid=PAAaY_5bq244tz8NBMZByR5gZH5QOPPnwqjB2n58ehJl3PUjGfA57gTD3vBKw_aem_AT59MfZLMHLdpFec1QkPFlU_LqH-cBOTMTSLfwbadUyszfb7PcECLptkeZoEOPpWcHE">
                        <img src={wp} alt="" />
                    </a>
            
                </div>
            
            </div>
        </div>
    )
}

export default Home1