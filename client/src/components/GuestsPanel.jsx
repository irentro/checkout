import React from 'react';
import styles from '../style.css';


class GuestsPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.guestComponent}>
                <label className={styles.guestLabel}>
                    <span className={styles.guest}>Guests</span>
                </label>
                <button className={styles.guestsButton} onClick={this.props.handleClick} value="10 guests">
                    <div className={styles.initGuests}>{this.props.numGuests}{this.props.guestText}{this.props.infantText}</div>
                    <img  className={styles.downArrow} src="https://i.ibb.co/2SdTGMC/Expand-More-512.png"/>
                </button>
                <div className={styles.guestsPanel}>
                    <div className={styles.adultCounter}>
                        <div className={styles.personTypes}>
                            <div className={styles.Adults}>
                                Adults
                            </div>
                        </div>
                        <div className={styles.incrementContainer}>
                            <button className={styles.subtractButton} onClick={this.props.decrementAdults}>-</button>
                            <div className={styles.adultCount}>{this.props.adults}</div>
                            <button className={styles.addButton} onClick={this.props.incrementAdults}>+</button>
                        </div>    
                    </div>
                    <div className={styles.childCounter}>
                        <div className={styles.personTypes}>
                            <div className={styles.Children}>
                                Children
                                <p className={styles.childInfant}>Ages 2-12</p>
                            </div>
                        </div>
                        <div className={styles.incrementContainer}>
                            <button className={styles.childSub} onClick={this.props.decrementChildren}>-</button>
                            <div className={styles.childCount}>{this.props.children}</div>
                            <button className={styles.childAdd} onClick={this.props.incrementChildren}>+</button>
                        </div>   
                    </div>
                    <div className={styles.infantCounter}>
                        <div className={styles.personTypes}>
                            <div className={styles.Infants}>
                                Infants
                                <p className={styles.childInfant}>Under 2</p>
                            </div>
                        </div>
                        <div className={styles.incrementContainer}>
                            <button className={styles.infantSub} onClick={this.props.decrementInfants}>-</button>
                            <div className={styles.infantCount}>{this.props.infants}</div>
                            <button className={styles.infantAdd} onClick={this.props.incrementInfants}>+</button>
                        </div>   
                    </div>
                    <p className={styles.maxGuests}>10 guests maximum. Infants don't count towards the number of guests.</p>
                    <button className={styles.closeButton} onClick={this.props.handleClick}>Close</button>
                </div>
            </div>
        )
    }
}

export default GuestsPanel;