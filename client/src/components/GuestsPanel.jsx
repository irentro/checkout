import React from 'react';

class GuestsPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="guest-component">
                <label className="guest-label">
                    <span className="guest">Guests</span>
                </label>
                <button className="guests-button" onClick={this.props.handleClick} value="10 guests">
                    <div className="init-guests">{this.props.numGuests}{this.props.guestText}{this.props.infantText}</div>
                    <img  className='down-arrow' src="https://i.ibb.co/2SdTGMC/Expand-More-512.png"/>
                </button>
                <div className="guests-panel">
                    <div className="adult-counter">
                        <div className="person-types">
                            <div className="Adults">
                                Adults
                            </div>
                        </div>
                        <div className="increment-container">
                            <button className="subtract-button" onClick={this.props.decrementAdults}>-</button>
                            <div className="adult-count">{this.props.adults}</div>
                            <button className="add-button" onClick={this.props.incrementAdults}>+</button>
                        </div>    
                    </div>
                    <div className="child-counter">
                        <div className="person-types">
                            <div className="Children">
                                Children
                                <p className="child-infant">Ages 2-12</p>
                            </div>
                        </div>
                        <div className="increment-container">
                            <button className="child-sub" onClick={this.props.decrementChildren}>-</button>
                            <div className="child-count">{this.props.children}</div>
                            <button className="child-add" onClick={this.props.incrementChildren}>+</button>
                        </div>   
                    </div>
                    <div className="infant-counter">
                        <div className="person-types">
                            <div className="Infants">
                                Infants
                                <p className="child-infant">Under 2</p>
                            </div>
                        </div>
                        <div className="increment-container">
                            <button className="infant-sub" onClick={this.props.decrementInfants}>-</button>
                            <div className="infant-count">{this.props.infants}</div>
                            <button className="infant-add" onClick={this.props.incrementInfants}>+</button>
                        </div>   
                    </div>
                    <p className="max-guests">10 guests maximum. Infants don't count towards the number of guests.</p>
                    <button className="close-button" onClick={this.props.handleClick}>Close</button>
                </div>
            </div>
        )
    }
}

export default GuestsPanel;