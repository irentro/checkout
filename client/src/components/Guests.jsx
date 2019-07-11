import React from 'react';

class Guests extends React.Component {
    constructor(props) {
        super(props)
    
    }

    render() {
        return (
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
        )
    }
}

export default Guests;