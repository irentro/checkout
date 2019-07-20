import React from 'react';
import GuestsPanel from './GuestsPanel.jsx';
import styles from '../style.css';


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
                <div className={styles.guestComponent}>
                    <label className={styles.guestLabel}>
                        <span className={styles.guest}>Guests</span>
                    </label>
                    <button className={styles.guestsButton} onClick={this.showGuestForm.bind(this)}>
                        <div className={styles.initGuests}>{this.props.numGuests}{this.props.guestText}{this.props.infantText}</div>
                        <img className={styles.downArrow} src="https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ExpandMore-512.png"/>
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
                    maxGuests={this.props.maxGuests}
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