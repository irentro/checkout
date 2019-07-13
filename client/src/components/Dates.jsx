import React from 'react';
import CheckInCalender from './CheckInCalender.jsx';
import CheckOutCalender from './CheckOutCalender.jsx';
import styles from '../style.css';

class Dates extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCheckIn: false,
            showCheckOut: false,
        }

        this.showCheckIn = this.showCheckIn.bind(this);
        this.showCheckOut = this.showCheckOut.bind(this);
    }

    showCheckIn() {
        this.setState({
            showCheckIn: !this.state.showCheckIn,
            showCheckOut: false
        })
    }

    showCheckOut() {
        this.setState({
            showCheckOut: !this.state.showCheckOut,
            showCheckIn: false
        })
    }

    render() {
        if (this.state.showCheckIn) {
            return <CheckInCalender 
                    showCheckIn={this.showCheckIn} 
                    showCheckOut={this.showCheckOut}
                    changeCheckInDate={this.props.changeCheckInDate}
                    changeCheckInMonth={this.props.changeCheckInMonth}
                    checkInDate={this.props.checkInDate}
                    checkInMonth={this.props.checkInMonth}
                    checkOutDate={this.props.checkOutDate}
                    checkOutMonth={this.props.checkOutMonth}
                    checkInSelected={this.props.checkInSelected}
                    />
        } else if (this.state.showCheckOut) {
            return <CheckOutCalender 
                    showCheckIn={this.showCheckIn} 
                    showCheckOut={this.showCheckOut}
                    changeCheckOutDate={this.props.changeCheckOutDate}
                    changeCheckOutMonth={this.props.changeCheckOutMonth}
                    checkOutDate={this.props.checkOutDate}
                    checkOutMonth={this.props.checkOutMonth}
                    checkInDate={this.props.checkInDate}
                    checkInMonth={this.props.checkInMonth}
                    checkOutSelected={this.props.checkOutSelected}
                    />
        } else {        
            return (
                <div className={styles.calenderComponent}>
                    <label className={styles.dateLabel}>
                        <span className={styles.date}>Dates</span>
                    </label>
                    <div className={styles.dateSelector}>
                        <div className={styles.checkInContainer}>
                            <div className={styles.checkinInputContainer}>
                                <input className={styles.checkinInput} onClick={this.showCheckIn} placeholder={this.props.checkInMonth + this.props.checkInDate}>
                                </input>
                            </div>
                        </div>
                        <div className={styles.checkinArrowContainer} aria-hidden="true" role="presentation">
                            <svg className={styles.checkinArrow} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                                <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" ></path>
                            </svg>
                        </div>
                        <div className={styles.checkOutContainer}>
                            <div className={styles.checkoutInputContainer}>
                                <input className={styles.checkoutInput} onClick={this.showCheckOut} placeholder={this.props.checkOutMonth + this.props.checkOutDate}>
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Dates;