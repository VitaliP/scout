import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './exchange-rates.scss';
import { bindActionCreators } from 'redux'


const prepareData = (rates, sortBy, sortDirection) => {

    let arrRates = _.chain(rates)
        .toPairs()
        .map((item)=>{
            return {
                currency: item[0],
                rate: item[1]
            };
        })
        .sortBy(sortBy)
        .value();

    if (sortDirection === 'desc') {
        arrRates.reverse();
    }

    return arrRates;

};


const DataTable = (props) => {

    const rates = prepareData(props.rates, props.sort.sortBy, props.sort.sortDirection);

    if (!rates || rates.length<1) {
        console.error("no data? why?");
        return false;
    }

    return (

        <table className="table">
            <thead>
            <tr>
                <th scope="col">Currency</th>
                <th scope="col">Rate</th>
            </tr>
            </thead>
            <tbody>

            {rates.map((row,index)=>{
                return (
                    <tr key={index}>
                        <td>{row.currency}</td>
                        <td>{row.rate}</td>
                    </tr>
                )

            })}

            </tbody>
        </table>

    );

};

DataTable.propTypes = {
    rates: PropTypes.object.isRequired,
    sort: PropTypes.object.isRequired
};

const mapState = state => {

    return {
        sort: state.exchangeRates.sort,
        rates: state.exchangeRates.rates
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {},
    dispatch,
);

export default connect(mapState, mapDispatchToProps)(DataTable)