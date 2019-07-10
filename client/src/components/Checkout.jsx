import React from 'react';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="checkout-container">
                <div className="price">$1,000</div>
                <p className="per-night">per night</p>

                <div className="stars-container">
                    <div className="stars-bar">
                        <svg className="stars" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <svg className="stars" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <svg className="stars" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <svg className="stars" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <svg className="stars" viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <div className="review-count">
                        <p className="reviews">69</p>
                    </div>
                    </div>
                </div>

                <div className="line-container">
                    <div className="line"></div>
                </div>

                <form className="booking-form">
                    <div className="calender-component">
                        <label className="date-label">
                            <span className="date">Dates</span>
                        </label>
                        <div className="date-selector">
                            <div className="check-in-container">
                                <div className="checkin-input-container">
                                    <input className="checkin-input" placeholder="Check-in">
                                    </input>
                                </div>
                            </div>
                            <div class="checking-arrow-container" aria-hidden="true" role="presentation">
                                <svg className="checking-arrow"viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                    <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="check-out-container">
                                <div className="checkout-input-container">
                                    <input className="checkout-input" placeholder="Checkout">
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div><div className="guest-component">
                        <label className="date-label">
                            <span className="date">Dates</span>
                        </label>
                        <div className="date-selector">
                            <div className="check-in-container">
                                <div className="checkin-input-container">
                                    <input className="checkin-input" placeholder="Check-in">
                                    </input>
                                </div>
                            </div>
                            <div class="checking-arrow-container" aria-hidden="true" role="presentation">
                                <svg className="checking-arrow"viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                    <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fill-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div className="check-out-container">
                                <div className="checkout-input-container">
                                    <input className="checkout-input" placeholder="Checkout">
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Checkout;