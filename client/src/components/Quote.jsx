import React from 'react';

class Quote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.checkInSelected && this.props.checkOutSelected) {
            let nights = Number(this.props.checkOutDay) - Number(this.props.checkInDay);
            let initFee = this.props.price * nights;
            let serviceFee =  this.props.serviceFee.slice(0, -3);
            let cleaningFee =  this.props.cleaningFee.slice(0, -3);
            let localTaxes =  this.props.localTaxes.slice(0, -3);
            let total = Number(initFee) + Number(serviceFee) + Number(cleaningFee) + Number(localTaxes);

            return (
                <div className="quote-container">
                    <div className="top-fee-container">
                        <div className="fee-type">
                            {'$' + this.props.price + ' x ' + nights + ' nights'}
                        </div>
                        <div className="fee-total">
                            {'$' + initFee}
                        </div>
                    </div>
                    <div className="fee-container">
                        <div className="fee-type">
                            Cleaning Fee
                        </div>
                        <div className="fee-total">
                            {'$' + cleaningFee}
                        </div>
                    </div>
                    <div className="fee-container">
                        <div className="fee-type">
                            Service Fee
                        </div>
                        <div className="fee-total">
                            {'$' + serviceFee}
                        </div>
                    </div>
                    <div className="fee-container">
                        <div className="fee-type">
                            Occupancy taxes and fees
                        </div>
                        <div className="fee-total">
                            {'$' + localTaxes}
                        </div>
                    </div>
                    <div className="fee-container">
                        <div className="bottom-fee-type">
                            Total
                        </div>
                        <div className="bottom-fee-total">
                            {'$' + total}
                        </div>
                    </div>
                </div>

            )
        } else {
            return <div></div>
        }
    }
}

export default Quote;