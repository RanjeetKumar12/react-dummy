import React from 'react'
import Data from './Data'
import './SeriesSection.css'

const SeriesSection = () => {
    return (
        <div className="container">
            <div class="main-container">
                <div class="sgn-container">
                    
                        {Data.map((item) =>
                            Object.keys(item).map((itemKey) => {
                                let obj = item[itemKey];
                                return (
                                    <div class="sgn-inner-container">
                                        <div class="sgn-title">
                                            <span class="sgn-sr-title">{itemKey}</span>
                                            <div class="underline-l"></div>
                                        </div>
                                        {Object.keys(obj).map((secItemKey) => {
                                            let secObj = obj[secItemKey];
                                            return (
                                                <div class="sgn-sec-container">
                                                    <div class="sgn-item-container">
                                                        <div class="sgn-img-container">
                                                            <img src={secObj.prodImg} alt="image" class="sgn-img" />
                                                        </div>
                                                        <div class="sgn-item">
                                                            <div class="sgn-item-name">{secObj.prodTitle}</div>
                                                            <div class="sgn-price">{secObj.prodPrice}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })
                        )}
                    
                </div>
            </div>
        </div>
    )
}

export default SeriesSection