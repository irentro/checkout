import React from 'react';

class CheckOutCalender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="calender-component">
                <label className="date-label">
                    <span className="date">CHECKOUT</span>
                </label>
                <div className="date-selector">
                    <div className="check-in-container">
                        <div className="checkin-input-container">
                            <input className="checkin-input" onClick={this.props.showCheckIn} placeholder="Check-in">
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
                            <input className="checkout-input" onClick={this.props.showCheckOut} placeholder="Checkout">
                            </input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckOutCalender;