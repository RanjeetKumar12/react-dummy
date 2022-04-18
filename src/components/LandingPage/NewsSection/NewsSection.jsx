import React from 'react'
import Data from './Data'
import './NewsSection.css'

const NewsSection = () => {
    return (
        <div className='container'>
            {
                Data.map(item => {
                    return (
                        <div className="main-container">
                            <span className="container-type">{item.newsDuration}</span>
                            <div className="underline-s"></div>
                            <div className="news-container">
                                <span className="news-genre">{item.newsGenre}</span>
                                <span className="news-title">{item.newsTitle}</span>
                                <span className="news-block-bg"></span>
                                <img src={item.newsImg} alt="image" className="news-img" />
                                <div className="news-ac-btn">
                                    <a href="#" className="news-btn">{item.cta}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default NewsSection