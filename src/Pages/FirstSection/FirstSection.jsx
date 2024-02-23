import React from 'react'
import './FirstSection.scss'
import Header from '../Header/Header'
import chat from '../../Assets/Frame.svg'

const FirstSection = () => {
  return (
    <div className="block__draft">

        {/* <Header/> */}

        <div className="banner">

               
            <h1 className='banner_title'>
                    TRIATHLON CENTER
            </h1>
               

            <h2 className="banner_text">
                  Преодолевай границы, превосходи себя вместе с нами!
            </h2>

            <button className="banner_btn">Оставить заявку</button>

            <img className="banner_chat" src={chat} alt="" />

        </div>
        
        </div>
  )
}

export default FirstSection