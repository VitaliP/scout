import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { loading } from '../../store/actions/exchangeRates.actions'

import Controls from './Controls';
// import Add from './Add';
import Selector from './Selector';
import DataTable from './DataTable';
import './exchange-rates.scss';
import Loading from '../gui/common/Loading';
import Error from '../gui/common/Error';

import { bindActionCreators } from 'redux'

const ExchangeRates = (props) => {

    return (
        <div className="main">

            <Selector />

            {props.screenState==='loading' && <Loading /> }
            {props.screenState==='error' && <Error /> }

            {props.screenState==='display' && (

                <div>
                    <Controls />
                    <DataTable />
                </div>

            )}



        </div>
    );
};

ExchangeRates.propTypes = {
    screenState: PropTypes.string.isRequired
};

const mapState = state => {

    return {
        screenState: state.exchangeRates.screenState,
    }

};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
    },
    dispatch,
);


export default connect(mapState, mapDispatchToProps)(ExchangeRates)