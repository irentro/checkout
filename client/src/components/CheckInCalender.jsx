import React from 'react';
import axios from 'axios';

class CheckInCalender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dates: [],
            month: 'July',
            calendar: [[null, 1, 2, 3, 4, 5, 6],
            [7, 8, 9, 10, 11, 12, 13],
            [14, 15, 16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25, 26, 27],
            [28, 29, 30, 31, null, null, null]]
        }
    }

    componentDidMount() {
        axios.get('/bookings/available/14')
        .then((dates) => {
            console.log(dates.data);
            this.setState({
                dates: dates.data
            })
        })
    }

    nextMonth() {
        if(this.state.month === 'July') {
            this.setState({
                month: 'August',
                calendar: [['', '', '', '', 1, 2, 3],
                [4, 5, 6, 7, 8, 9, 10],
                [11, 12, 13, 14, 15, 16, 17],
                [18, 19, 20, 21, 22, 23, 24],
                [25, 26, 27, 28, 29, 30, 31]]
            })
        } else if (this.state.month === 'August') {
            this.setState({
                month: 'September',
                calendar: [[1, 2, 3, 4, 5, 6, 7],
                [8, 9, 10, 11, 12, 13, 14],
                [15, 16, 17, 18, 19, 20, 21],
                [22, 23, 24, 25, 26, 27, 28],
                [29, 30, '', '', '', '', '']]
            })
        } else if (this.state.month === 'September') {
            this.setState({
                month: 'October',
                calendar: [['', '', 1, 2, 3, 4, 5],
                [6, 7, 8, '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '']]
            })
        } 
    }

    previousMonth() {
        if(this.state.month === 'October') {
            this.setState({
                month: 'September',
                calendar: [[1, 2, 3, 4, 5, 6, 7],
                [8, 9, 10, 11, 12, 13, 14],
                [15, 16, 17, 18, 19, 20, 21],
                [22, 23, 24, 25, 26, 27, 28],
                [29, 30, '', '', '', '', '']]
            })
        } else if (this.state.month === 'September') {
            this.setState({
                month: 'August',
                calendar: [['', '', '', '', 1, 2, 3],
                [4, 5, 6, 7, 8, 9, 10],
                [11, 12, 13, 14, 15, 16, 17],
                [18, 19, 20, 21, 22, 23, 24],
                [25, 26, 27, 28, 29, 30, 31]]
            })
        } else {
            this.setState({
                month: 'July',
                calendar: [['', 1, 2, 3, 4, 5, 6],
                [7, 8, 9, 10, 11, 12, 13],
                [14, 15, 16, 17, 18, 19, 20],
                [21, 22, 23, 24, 25, 26, 27],
                [28, 29, 30, 31, '', '', '']]
            })
        }
    }

    selectDate(e) {
        this.props.changeCheckInDate(e.target.value);
        if (this.state.month === 'July') {
            this.props.changeCheckInMonth('07/')
        } else if (this.state.month === 'August') {
            this.props.changeCheckInMonth('08/')
        } else if (this.state.month === 'September') {
            this.props.changeCheckInMonth('09/')
        } else if (this.state.month === 'October') {
            this.props.changeCheckInMonth('10/')
        }
    }

    render() {
        return (
            <div className="calender-component">
                <label className="date-label">
                    <span className="date">Dates</span>
                </label>
                <div className="date-selector">
                    <div className="check-in-container">
                        <div className="checkin-input-container">
                            <input className="checkin-input" onClick={this.props.showCheckIn} placeholder={this.props.checkInMonth + this.props.checkInDate}>
                            </input>
                        </div>
                    </div>
                    <div className="checkin-arrow-container" aria-hidden="true" role="presentation">
                        <svg className="checkin-arrow"viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false">
                            <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" ></path>
                        </svg>
                    </div>
                    <div className="check-out-container">
                        <div className="checkout-input-container">
                            <input className="checkout-input" onClick={this.props.showCheckOut} placeholder="Checkout">
                            </input>
                        </div>
                    </div>
                </div>
                <div className="checkin-calender">
                    <div className="calender">
                        <button className="previous-month-button" onClick={this.previousMonth.bind(this)}>
                            <svg className="left-arrow" viewBox="0 0 1000 1000">
                            <path d="M 336 275 L 126 485 h 806 c 13 0 23 10 23 23 s -10 23 -23 23 H 126 l 210 210 c 11 11 11 21 0 32 c -5 5 -10 7 -16 7 s -11 -2 -16 -7 L 55 524 c -11 -11 -11 -21 0 -32 l 249 -249 c 21 -22 53 10 32 32 Z" />
                            </svg>
                        </button>
                        <div className="month">
                            {this.state.month} 2019
                        </div>
                        <button className="next-month-button" onClick={this.nextMonth.bind(this)}>
                            <svg className="right-arrow" viewBox="0 0 1000 1000">
                            <path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z" />
                            </svg>
                        </button>
                        <div className="calender-week">
                            <div className="calender-day">Su</div>
                            <div className="calender-day">Mo</div>
                            <div className="calender-day">Tu</div>
                            <div className="calender-day">We</div>
                            <div className="calender-day">Th</div>
                            <div className="calender-day">Fr</div>
                            <div className="calender-day">Sa</div>
                        </div>
                    </div>
                    <table className="table-container">
                        <tbody className="calender-container">
                            {this.state.calendar.map((week) => (
                                <tr className="calender-row">
                                    {week.map((day) => (
                                        <td className="day">
                                            <input className="day-button" type="button" onClick={this.selectDate.bind(this)} value={day}></input>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CheckInCalender;