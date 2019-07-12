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
                    <button className="guests-button" onClick={this.showGuestForm.bind(this)} value="10 guests">
                        <div className="init-guests">1 guest</div>
                        <img  className='down-arrow' src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png"/>
                    </button>
                </div>
            )
        } else {
            return <GuestsPanel handleClick={this.showGuestForm.bind(this)}/>
        }
        
    }
}

export default Guests;