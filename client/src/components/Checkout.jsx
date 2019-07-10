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
                            <div className="checkin-arrow-container" aria-hidden="true" role="presentation">
                                <svg className="checkin-arrow"viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                    <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" ></path>
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

                    <div className="guest-component">
                        <label className="guest-label">
                            <span className="guest">Guests</span>
                        </label>
                        <div className="guest-selector">
                            <div className="guest-selector-container">
                                <div className="button-container">
                                    <input className="guests-button" type="button" value="10 guests"></input>
                                </div>
                                <div className="down-arrow-container">
                                    <svg className="down-arrow" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
                                        <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" >
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reserve-container">
                        <button type="submit" className="reserve-button" >
                            <div className="reserve">Reserve</div>
                        </button>
                    </div>

                    <div className="under-reserve-container">
                        <div className="under-reserve">
                            <span className="under-reserve-text">You won’t be charged yet</span>
                        </div>
                    </div>
                </form>

                <div className="bottom-container">
                    <div>
                        <div className="line-container">
                            <div className="line"></div>
                        </div>
                        <div className="bottom-text-container">
                            <div className="lightbulb">
                                <div className="texts-container">
                                    <span className="text">This place is getting a lot of attention.</span>
                                    <div className="text2">It’s been viewed 133 times in the past week.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout;