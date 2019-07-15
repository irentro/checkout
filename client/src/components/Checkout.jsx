import React from 'react';
import Guests from './Guests.jsx';
import Dates from './Dates.jsx';
import Quote from './Quote.jsx';
import axios from 'axios';
import styles from '../style.css';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            listing: {},
            numGuests: 1,
            adults: 1,
            children: 0,
            infants: 0,
            guestText: ' guest',
            infantText: "",
            checkInDate: 'Check-in',
            checkInMonth: '',
            checkInSelected: false,
            checkOutDate: 'Checkout',
            checkOutMonth: '',
            checkOutSelected: false,
            maxGuests: 0
        }
    }

    componentDidMount() {
        axios.get('/listings')
        .then(res => {
            console.log(res.data[13])
            this.setState({
                listing: res.data[13],
                price: res.data[13].per_night_price.slice(0, -3),
                extraGuestFee: res.data[13].extra_guest_fee.slice(0, -3),
                maxGuests: res.data[13].max_guests
            })
        })
    }

    checkInSelected() {
        console.log('checkin is true');
        this.setState({
            checkInSelected: true
        })
    }

    checkOutSelected() {
        console.log('checkout is true');
        this.setState({
            checkOutSelected: true
        })
    }

    changeCheckOutMonth(month) {
        this.setState({
            checkOutMonth: month
        })
    }

    changeCheckOutDate(day) {
        this.setState({
            checkOutDate: String(day) + '/2019',
            checkOutDay: day
        })
        console.log(this.state.checkOutDate)
    }

    changeCheckInMonth(month) {
        this.setState({
            checkInMonth: month
        })
    }

    changeCheckInDate(day) {
        this.setState({
            checkInDate: String(day) + '/2019',
            checkInDay: day
        })
        console.log(this.state.checkInDate)
    }

    incrementAdults() {
        if (this.state.numGuests === 1) {
            this.setState({
                guestText: ' guests'
            })
        }

        if (this.state.numGuests < this.state.maxGuests) {
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

        if (this.state.numGuests < this.state.maxGuests) {
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
        let price = Number(this.state.price) + (Number(this.state.numGuests - 1) * Number(this.state.extraGuestFee));

        return (
            <div className={styles.checkoutContainer}>
                <div className={styles.price}>${price}</div>
                <div className={styles.perNight}>per night</div>

                <div className={styles.starsContainer}>
                    <div className={styles.starsBar}>
                        <svg className={styles.stars} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <svg className={styles.stars} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <svg className={styles.stars} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <svg className={styles.stars} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <svg className={styles.stars} viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='#008489'><path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/></svg>
                        <div className={styles.reviewCount}>
                            <p className={styles.reviews}>127</p>
                        </div>
                    </div>
                </div>

                <div className={styles.lineContainer}>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.bookingForm}>
                    <Dates 
                        changeCheckInDate={this.changeCheckInDate.bind(this)}
                        changeCheckInMonth={this.changeCheckInMonth.bind(this)}
                        changeCheckOutDate={this.changeCheckOutDate.bind(this)}
                        changeCheckOutMonth={this.changeCheckOutMonth.bind(this)}
                        checkInDate={this.state.checkInDate}
                        checkInMonth={this.state.checkInMonth}
                        checkOutDate={this.state.checkOutDate}
                        checkOutMonth={this.state.checkOutMonth}
                        checkInSelected={this.checkInSelected.bind(this)}
                        checkOutSelected={this.checkOutSelected.bind(this)}
                        />

                    <Guests 
                        numGuests={this.state.numGuests} 
                        adults={this.state.adults}
                        children={this.state.children}
                        infants={this.state.infants}
                        guestText={this.state.guestText}
                        infantText={this.state.infantText}
                        incrementAdults={this.incrementAdults.bind(this)}
                        incrementChildren={this.incrementChildren.bind(this)}
                        incrementInfants={this.incrementInfants.bind(this)}
                        decrementAdults={this.decrementAdults.bind(this)}
                        decrementChildren={this.decrementChildren.bind(this)}
                        decrementInfants={this.decrementInfants.bind(this)}
                    />

                    <Quote 
                        checkInSelected={this.state.checkInSelected} 
                        checkOutSelected={this.state.checkOutSelected}
                        price={price}
                        cleaningFee={this.state.listing.cleaning_fee}
                        localTaxes={this.state.listing.local_taxes}
                        serviceFee={this.state.listing.service_fee}
                        checkInDay={this.state.checkInDay}
                        checkOutDay={this.state.checkOutDay}
                    />

                    <button className={styles.reserveButton}>Reserve</button>
                    <p className={styles.noChargeText}>You won’t be charged yet</p>

                </div>

                <div className={styles.bottomLine}>
                    <div className={styles.line}></div>
                </div>
                <div> 
                    <p className={styles.text1}>
                    This place is getting a lot of attention.
                    </p>
                </div>
                <img  className={styles.lightbulb} src='https://a0.muscache.com/airbnb/static/packages/icon-uc-light-bulb.1ffc0407.gif'/>
                <p className={styles.text2}>It’s been viewed 500+ times in the past week.</p>
            </div>
        )
    }
}

export default Checkout;