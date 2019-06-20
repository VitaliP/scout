import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newExchangeRate } from '../../store/actions/exchangeRates.actions'
import { bindActionCreators } from 'redux'

class AddForm extends Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const currency = this.refs['currency'].value;
        const rate = this.refs['rate'].value;


        this.props.newExchangeRate(currency, rate);

        return false;

    }

    render() {


        return (
            <div className="add">

                <form onSubmit={this.onSubmit}>

                    <div>
                        <label htmlFor="currency">
                            Currency:<br />
                            <input name="currency" ref="currency" />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="rate">
                            Rate:
                            <br />
                            <input name="rate" ref="rate" />
                        </label>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>



                </form>




            </div>
        )
    }


}

AddForm.propTypes = {
    newExchangeRate: PropTypes.func.isRequired
};

const mapState = state => {
    return {}
};


const mapDispatchToProps = dispatch => bindActionCreators(
    {
        newExchangeRate
    },
    dispatch,
);


export default connect(mapState, mapDispatchToProps)(AddForm)