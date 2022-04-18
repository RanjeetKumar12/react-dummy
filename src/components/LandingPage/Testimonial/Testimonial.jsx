import React from 'react'
import {revImg} from '../../../assets'
import './Testimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, regular } from 'fontawesome.macro'

const Testimonial = () => {
    return (
        <div className="container">
            <div className="main-container">
                <div className="promo-container">
                    <div className="promo-bg"></div>
                    <img src={revImg} alt="image" className="promo-img" />
                        <span className="promo-title">Testimonials</span>
                        <div className="underline-s ul"></div>
                        <span className="promo-content">Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local
                            brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by
                            Indonesian
                            heritage.
                        </span>
                        <span className="promo-head">Captain Jack Sparrow</span>
                        <span className="promo-desig">Content Creator/Pirate</span>
                        <div className="promo-arw">
                            <span className="promo-lf-arw"><FontAwesomeIcon className="lf-arw" icon={fas('left-long')}/></span>
                            <span className="promo-rt-arw"><FontAwesomeIcon className = "rt-arw" icon={fas('right-long')}/></span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial