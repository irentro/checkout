import React from 'react';
import GuestsPanel from './GuestsPanel.jsx';

class Guests extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showPanel: false
        }
    }

    showGuestForm() {
        this.setState({
            showPanel: !this.state.showPanel
        })
    }

    render() {
        if (!this.state.showPanel) {
            return (
                <div className="guest-component">
                    <label className="guest-label">
                        <span className="guest">Guests</span>
                    </label>
                    <button className="guests-button" onClick={this.showGuestForm.bind(this)}>
                        <div className="init-guests">{this.props.numGuests}{this.props.guestText}{this.props.infantText}</div>
                        <img  className='down-arrow' src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png"/>
                    </button>
                </div>
            )
        } else {
            return <GuestsPanel 
                    handleClick={this.showGuestForm.bind(this)}
                    numGuests={this.props.numGuests} 
                    adults={this.props.adults}
                    children={this.props.children}
                    infants={this.props.infants}
                    guestText={this.props.guestText}
                    infantText={this.props.infantText}
                    incrementAdults={this.props.incrementAdults}
                    incrementChildren={this.props.incrementChildren}
                    incrementInfants={this.props.incrementInfants}
                    decrementAdults={this.props.decrementAdults}
                    decrementChildren={this.props.decrementChildren}
                    decrementInfants={this.props.decrementInfants}
                    />
        }
        
    }
}

export default Guests;