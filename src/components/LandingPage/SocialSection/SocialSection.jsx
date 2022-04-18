import React from 'react'
import Data from './Data'
import './SocialSection.css'
const SocialSection = () => {
    return (
        <div className="container">
            <div className="main-container">
                <div className="container-type ">Instagram</div>
                <div className="underline-s"></div>
                <div className="social-container">
                    {
                        Data.map(item =>
                            Object.keys(item).map(itemKey => {
                                let obj = item[itemKey]
                                return (
                                    Object.keys(obj).map(secItemKey => (
                                        <>
                                            <img src={obj[secItemKey]} alt="image" className="social-img" />
                                        </>

                                    ))

                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SocialSection