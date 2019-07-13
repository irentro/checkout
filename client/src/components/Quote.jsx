import React from 'react';

class Quote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.checkInSelected && !this.props.checkOutSelected) {
            return (
                <div className="quote-container">
                    <div className="top-fee-container">
                        <div className="fee-type">
                            YEE
                        </div>
                        <div className="fee-total">
                            SKEET
                        </div>
                    </div>
                    <div className="fee-container">
                        <div className="fee-type">
                            YEE
                        </div>
                        <div className="fee-total">
                            SKEET
                        </div>
                    </div>
                    <div className="fee-container">
                        <div className="fee-type">
                            YEE
                        </div>
                        <div className="fee-total">
                            SKEET
                        </div>
                    </div>
                    <div className="fee-container">
                        <div className="fee-type">
                            YEE
                        </div>
                        <div className="fee-total">
                            SKEET
                        </div>
                    </div>
                    <div className="fee-container">
                        <div className="fee-type">
                            YEE
                        </div>
                        <div className="fee-total">
                            SKEET
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