import React from 'react'
import './Wishlist.css'
import {iImg1, iImg2} from '../../assets'
const Wishlist = () => {
    return (
        <div class='container'>
            <div class="component-container">
                <div class="wishlist-container">
                    <div class="wishlist-title">My Wishlist (1)</div>
                    <div class="wishlist-pd-container">
                        <div class="card-container ecom-card">
                            <div class="card-details">
                                <a href="../product-detail/product-details.html" class="card-link">
                                    <img src={iImg1} alt="" class="card-image ecom-img" />
                                </a>
                            </div>
                            <a href="" class="card-title link-title">Way Kambas Maple</a>
                            <div class="card-flex">
                                <div class="card-rating">
                                    4.1<i class="fa-regular fa-star card-rating"></i>
                                </div>
                                <p class="card-bought">(49)</p>
                            </div>
                            <div class="card-price-flex">
                                <div class="card-disprice">
                                    <i class="fa-solid fa-indian-rupee-sign"></i>Rs 25,000
                                </div>
                                <div class="card-price strikeoff">
                                    <i class="fa-solid fa-indian-rupee-sign strikeoff"></i>Rs 36,000
                                </div>
                                <div class="card-discount">16% off</div>
                            </div>
                            <div class="card-btn-flex">
                                <button class="wl-action-btn">Move to Cart</button>
                                <button class="wl-action-btn wl-sec-btn">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist