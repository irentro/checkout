import React from 'react';

class GuestsPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numGuests: 1,
            adults: 1,
            children: 0,
            infants: 0,
            guestText: ' guest',
            infantText: ""
        }
    }

    incrementAdults() {
        if (this.state.numGuests === 1) {
            this.setState({
                guestText: ' guests'
            })
        }

        if (this.state.numGuests < 10) {
            this.setState({
                adults: this.state.adults + 1,
                numGuests: this.state.numGuests + 1
            })
        }
    }

    incrementChildren() {
        if (this.state.numGuests === 1) {
            this.setState({
                guestText: ' guests'
            })
        }

        if (this.state.numGuests < 10) {
            this.setState({
                children: this.state.children + 1,
                numGuests: this.state.numGuests + 1
            })
        }
    }

    incrementInfants() {
        if (this.state.infants === 0) {
            this.setState({
                infantText: ', 1 infant'
            })
        } else if (this.state.infants > 0 && this.state.infants < 5) {
            this.setState({
                infantText: ', ' + (this.state.infants + 1) + ' infants'
            })
        }

        if (this.state.infants < 5) {
            this.setState({
                infants: this.state.infants + 1
            })
        }
    }

    decrementAdults() {
        if (this.state.numGuests === 2) {
            this.setState({
                guestText: ' guest'
            })
        }

        if (this.state.adults > 1) {
            this.setState({
                adults: this.state.adults - 1,
                numGuests: this.state.numGuests - 1
            })
        }
    }

    decrementChildren() {
        if (this.state.numGuests === 2) {
            this.setState({
                guestText: ' guest'
            })
        }

        if (this.state.children > 0) {
            this.setState({
                children: this.state.children - 1,
                numGuests: this.state.numGuests - 1
            })
        }
    }

    decrementInfants() {
        if (this.state.infants === 1) {
            this.setState({
                infantText: ''
            })
        } else if (this.state.infants === 2) {
            this.setState({
                infantText: ', 1 infant'
            })
        } else if (this.state.infants > 2) {
            this.setState({
                infantText: ', ' + (this.state.infants - 1) + ' infants'
            })
        }

        if (this.state.infants > 0) {
            this.setState({
                infants: this.state.infants - 1,
            })
        }
    }

    render() {
        return (
            <div className="guest-component">
                <label className="guest-label">
                    <span className="guest">Guests</span>
                </label>
                <button className="guests-button" onClick={this.props.handleClick} value="10 guests">
                    <div className="init-guests">{this.state.numGuests}{this.state.guestText}{this.state.infantText}</div>
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
                            <button className="subtract-button" onClick={this.decrementAdults.bind(this)}>-</button>
                            <div className="adult-count">{this.state.adults}</div>
                            <button className="add-button" onClick={this.incrementAdults.bind(this)}>+</button>
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
                            <button className="child-sub" onClick={this.decrementChildren.bind(this)}>-</button>
                            <div className="child-count">{this.state.children}</div>
                            <button className="child-add" onClick={this.incrementChildren.bind(this)}>+</button>
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
                            <button className="infant-sub" onClick={this.decrementInfants.bind(this)}>-</button>
                            <div className="infant-count">{this.state.infants}</div>
                            <button className="infant-add" onClick={this.incrementInfants.bind(this)}>+</button>
                        </div>   
                    </div>
                    <p className="max-guests">10 guests maximum. Infants don't count towards the number of guests.</p>
                    <button className="close-button">Close</button>
                </div>
            </div>
        )
    }
}

export default GuestsPanel;