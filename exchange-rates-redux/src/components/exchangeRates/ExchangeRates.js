import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchData, loading } from '../../store/actions/exchangeRates.actions'

class ExchangeRates extends Component {

    constructor(props) {
        super(props);


        this.renderInit = this.renderInit.bind(this);
        this.renderError = this.renderError.bind(this);
        this.renderLoading = this.renderLoading.bind(this);
        this.renderData = this.renderData.bind(this);
        this.onFetchClick = this.onFetchClick.bind(this);

    }

    onFetchClick() {
        this.props.loading();
        this.props.fetchData();
    }

    renderInit() {

        return (
            <div className="main">

                <button type="button" className="btn btn-primary" onClick={this.onFetchClick} data-test="btn-fetch">Fetch data</button>

            </div>
        )

    }

    renderError() {
        return (
            <div className="main">
                <div className="alert alert-danger" role="alert">
                    Data loading error. &nbsp;&nbsp;

                    <button type="button" className="btn btn-light btn-sm" onClick={this.onFetchClick}>Try again</button>

                </div>
            </div>
        )
    }

    renderLoading() {

        return (
            <div className="main">

                <div className="spinner-border" role="status">

                </div>

                <span className="loading-lbl" data-test="loading">Loading...</span>



            </div>
        )

    }

    renderData() {

        const data = this.props.screenData;

        const rates = _.chain(data.rates)
            .toPairs()
            .map((item)=>{
                return {
                    currency: item[0],
                    rate: item[1]
                };
            })
            .sortBy('currency')
            .value();

        return (
            <div className="main">

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">{data.base} x</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Rate</th>
                    </tr>
                    </thead>
                    <tbody>

                    {rates.map((row,index)=>{

                        return (
                            <tr key={index}>
                                <td></td>
                                <td>{row.currency}</td>
                                <td>{row.rate}</td>
                            </tr>
                        )

                    })}

                    </tbody>
                </table>

            </div>
        )

    }

    render() {

        switch (this.props.screenState) {

            case 'init':
                return this.renderInit();

            case 'display':
                return this.renderData();

            case 'loading':
                return this.renderLoading();

            case 'error':
            default:
                return this.renderError();

        }

    }
}

ExchangeRates.propTypes = {
    fetchData: PropTypes.func.isRequired,
    screenData: PropTypes.object,
    screenState: PropTypes.string.isRequired
};

const mapState = state => {

    return {
        screenData: state.exchangeRates.screenData,
        screenState: state.exchangeRates.screenState
    }

};

const mapDispatch = dispatch => {
    return {
        fetchData: () => dispatch(fetchData()),
        loading: () => dispatch(loading())
    }
};


export default connect(mapState, mapDispatch)(ExchangeRates)