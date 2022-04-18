import React from 'react'
import './CartCheckout.css'

const CartCheckout = () => {
  return (
    <div className="container">
      <div class="chout-container">
            <div class="chout-detail-flex">
                <div class="chout-icon-container">
                    <span class="chout-icon "><i class="fa-solid fa-2x fa-cart-flatbed dark-clr"></i></span>
                    <div class="chout-icon-name dark-clr">1. Checkout</div>
                </div>
                <div class="underline-s"></div>
                <div class="chout-icon-container">
                    <span class="chout-icon"><i class="fa-solid fa-2x fa-money-check-dollar sec-clr"></i></span>
                    <div class="chout-icon-name sec-clr">2. Payment</div>
                </div>
                <div class="underline-s"></div>
                <div class="chout-icon-container">
                    <span class="chout-icon chout-icon-mgl sec-clr"><i
                            class="fa-solid fa-2x fa-check-double"></i></span>
                    <div class="chout-icon-name sec-clr">3. Confirmation</div>
                </div>
            </div>
            <div class="chout-inner-container">
                <div class="chout-detail-flex">
                    <div class="chout-bg-container">
                        <div class="chout-ordr-container">
                            <div class="chout-ordrinfo-title">Order Detail </div>
                        </div>
                        <div class="chout-ordr-container">
                            <div class="chout-ordrinfo-flex">
                                <span class="chout-ordrinfo-subtitle">Subtotal</span>
                                <span class="chout-ordrinfo-subtitle">Shipping Cost</span>
                                <span class="chout-ordrinfo-subtitle">Promo Code</span>
                                <span class="chout-ordrinfo-subtitle">Packaging</span>
                                <span class="chout-ordrinfo-subtitle hl-2x">GrandTotal</span>
                            </div>
                            <div class="chout-ordrinfo-flex">
                                <span class="chout-ordrinfo-price">Rs 1,78,000</span>
                                <span class="chout-ordrinfo-price">Rs 1,500</span>
                                <span class="chout-ordrinfo-price">WINTER35</span>
                                <span class="chout-ordrinfo-price">Rs 3,000</span>
                                <div class="chout-ordrinfo-price hl-2x">Rs 1,20,500</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chout-address-flex">
                    <span class="chout-ordrinfo-title">Billing Address</span>
                    <form class="chout-address-form">
                        <label class="chout-address-label">Full Name</label>
                        <input type="text" class="chout-ordrinfo-field" />
                    </form>
                    <form class="chout-address-form">
                        <label class="chout-address-label">Email Address</label>
                        <input type="email" class="chout-ordrinfo-field" />
                    </form>
                    <form class="chout-address-form">
                        <label class="chout-address-label">Phone Number</label>
                        <input type="number" class="chout-ordrinfo-field" />
                    </form>
                    <form class="chout-address-form">
                        <label class="chout-address-label">Shipping Address</label>
                        <input type="text" class="chout-ordrinfo-field" />
                    </form>
                    <div class="chout-address-form ">
                        <span class="chout-address-label">Country</span>
                        <div class="chout-address-box">United State Of America <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="underline-l sec-ul"></div>
                    </div>
                    <div class="chout-address-form">
                        <span class="chout-address-label">State/Province</span>
                        <div class="chout-address-box">California <i class="fa-solid fa-chevron-down"></i></div>
                        <div class="underline-l sec-ul"></div>
                    </div>
                    <div class="chout-ordrinfo-flex">
                        <div class="chout-address-form">
                            <span class="chout-address-label">City</span>
                            <div class="chout-address-box">San Francisco <i class="fa-solid fa-chevron-down"></i>
                            </div>
                            <div class="underline-s sec-ul"></div>
                        </div>
                        <div class="chout-address-form">
                            <span class="chout-address-label">Zip Code</span>
                            <input type="number" class="chout-ordrinfo-field" placeholder="Ex: 94024" />

                        </div>
                    </div>
                    <div class="chout-address-form">
                        <span class="chout-address-label">Choose Courier</span>
                        <div class="chout-address-box">DHL <i class="fa-solid fa-chevron-down"></i></div>
                        <div class="underline-label sec-ul"></div>
                    </div>
                    <div class="chout-action-container">
                        <span class="chout-action-btn dark-clr">Countinue Shopping</span>
                        <span class="chout-action-btn dark-bg white-clr">Place My Order</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default CartCheckout