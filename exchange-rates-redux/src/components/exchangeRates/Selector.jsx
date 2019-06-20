import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData, loading, selectCurrency, selectDate } from '../../store/actions/exchangeRates.actions'
import './exchange-rates.scss';
import { bindActionCreators } from 'redux'

import DatePicker from "react-datepicker";
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";


const arrCurrencies = [ 'EUR','USD','GBP', 'ZZZ' ];


const Selector = (props) => {

    const onFetchClick = () => {
        props.loading();
        props.fetchData();
    };

    const onCurrencySelected = (e) =>{
        const newCurrency = e.target.value;
        props.selectCurrency(newCurrency);
    };

    const onDateSelected = (val) => {
        const m = moment(val);
        props.selectDate(m.format("YYYY-MM-DD"));
    };

    const currentDate = (props.date)?moment(props.date).toDate():null;

    return (
            <div className="selector">

                <div className="lbl">Base:</div>

                <select value={props.base?props.base:'default'} onChange={onCurrencySelected}>
                    <option value=""></option>
                    {arrCurrencies.map((cur,key)=>{
                        return <option value={cur} key={key} >{cur}</option>

                    })}

                </select>

                <div className="lbl">Date:</div>
                <DatePicker
                    selected={currentDate}
                    onChange={onDateSelected}
                />

                <button type="button" className="btn btn-primary" onClick={onFetchClick} data-test="btn-fetch">Fetch data</button>

            </div>

    );

};

Selector.propTypes = {
    fetchData: PropTypes.func.isRequired,
    selectCurrency: PropTypes.func.isRequired,
    selectDate: PropTypes.func.isRequired,
    loading: PropTypes.func.isRequired,
    base: PropTypes.string,
    date: PropTypes.string
};

const mapState = state => {
    return {
        base: state.exchangeRates.base,
        date: state.exchangeRates.date
    }
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchData,
        loading,
        selectCurrency,
        selectDate
    },
    dispatch,
);

export default connect(mapState, mapDispatchToProps)(Selector)