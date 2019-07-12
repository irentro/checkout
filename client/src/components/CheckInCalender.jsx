import React from 'react';
import axios from 'axios';

class CheckInCalender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dates: []
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

    render() {

        return (
            <div className="calender-component">
                <label className="date-label">
                    <span className="date">Dates</span>
                </label>
                <div className="date-selector">
                    <div className="check-in-container">
                        <div className="checkin-input-container">
                            <input className="checkin-input" onClick={this.props.showCheckIn} placeholder="Check-in">
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
                        <button className="previous-month-button">
                            <svg className="left-arrow" viewBox="0 0 1000 1000">
                            <path d="M 336 275 L 126 485 h 806 c 13 0 23 10 23 23 s -10 23 -23 23 H 126 l 210 210 c 11 11 11 21 0 32 c -5 5 -10 7 -16 7 s -11 -2 -16 -7 L 55 524 c -11 -11 -11 -21 0 -32 l 249 -249 c 21 -22 53 10 32 32 Z" />
                            </svg>
                        </button>
                        <div className="month">
                            July 2019
                        </div>
                        <button className="next-month-button">
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
                            <tr className="calender-row">
                                <td className="day"></td>
                                <td className="day">1</td>
                                <td className="day">2</td>
                                <td className="day">3</td>
                                <td className="day">4</td>
                                <td className="day">5</td>
                                <td className="day">6</td>
                            </tr>
                            <tr className="calender-row">
                                <td className="day">7</td>
                                <td className="day">8</td>
                                <td className="day">9</td>
                                <td className="day">10</td>
                                <td className="day">11</td>
                                <td className="day">12</td>
                                <td className="day">13</td>
                            </tr>
                            <tr className="calender-row">
                                <td className="day">14</td>
                                <td className="day">15</td>
                                <td className="day">16</td>
                                <td className="day">17</td>
                                <td className="day">18</td>
                                <td className="day">19</td>
                                <td className="day">20</td>
                            </tr>
                            <tr className="calender-row">
                                <td className="day">21</td>
                                <td className="day">22</td>
                                <td className="day">23</td>
                                <td className="day">24</td>
                                <td className="day">25</td>
                                <td className="day">26</td>
                                <td className="day">27</td>
                            </tr>
                            <tr className="calender-row">
                                <td className="day">28</td>
                                <td className="day">29</td>
                                <td className="day">30</td>
                                <td className="day">31</td>
                                <td className="day"></td>
                                <td className="day"></td>
                                <td className="day"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CheckInCalender;