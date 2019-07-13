import React from 'react';
import styles from '../style.css';

class Quote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.checkInSelected && this.props.checkOutSelected) {
            let nights = Number(this.props.checkOutDay) - Number(this.props.checkInDay);
            let initFee = this.props.price * nights;
            let serviceFee =  this.props.serviceFee.slice(0, -3);
            let cleaningFee =  this.props.cleaningFee.slice(0, -3);
            let localTaxes =  this.props.localTaxes.slice(0, -3);
            let total = Number(initFee) + Number(serviceFee) + Number(cleaningFee) + Number(localTaxes);

            return (
                <div className={styles.quoteContainer}>
                    <div className={styles.topFeeContainer}>
                        <div className={styles.feeType}>
                            {'$' + this.props.price + ' x ' + nights + ' nights'}
                        </div>
                        <div className={styles.feeTotal}>
                            {'$' + initFee}
                        </div>
                    </div>
                    <div className={styles.feeContainer}>
                        <div className={styles.feeType}>
                            Cleaning Fee
                        </div>
                        <div className={styles.feeTotal}>
                            {'$' + cleaningFee}
                        </div>
                    </div>
                    <div className={styles.feeContainer}>
                        <div className={styles.feeType}>
                            Service Fee
                        </div>
                        <div className={styles.feeTotal}>
                            {'$' + serviceFee}
                        </div>
                    </div>
                    <div className={styles.feeContainer}>
                        <div className={styles.feeType}>
                            Occupancy taxes and fees
                        </div>
                        <div className={styles.feeTotal}>
                            {'$' + localTaxes}
                        </div>
                    </div>
                    <div className={styles.feeContainer}>
                        <div className={styles.bottomFeeType}>
                            Total
                        </div>
                        <div className={styles.bottomFeeTotal}>
                            {'$' + total}
                        </div>
                    </div>
                </div>

            )
        } else {
            return <div></div>
        }
    }
}

export default Quote;