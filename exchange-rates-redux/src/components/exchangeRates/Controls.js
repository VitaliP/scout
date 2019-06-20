import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sortAction } from '../../store/actions/exchangeRates.actions'
import { bindActionCreators } from 'redux'

const Controls = (props) => {

    const field = props.sort.sortBy;
    const direction = props.sort.sortDirection;

    const sortByCurrency = () => props.sortAction('currency', direction);
    const sortByRate = () => props.sortAction('rate', direction);

    const sortAsc = () => props.sortAction(field, 'asc');
    const sortDesc = () => props.sortAction(field, 'desc');

    let classesSortByCurrency = 'btn btn-sm ';
    let classesSortByRate = 'btn btn-sm ';
    let classesSortAsc = 'btn btn-sm ';
    let classesSortDesc = 'btn btn-sm ';
    classesSortByCurrency += (field === 'currency')?'btn-secondary':'btn-link';
    classesSortByRate += (field === 'rate')?'btn-secondary':'btn-link';
    classesSortAsc += (direction === 'asc')?'btn-secondary':'btn-link';
    classesSortDesc += (direction === 'desc')?'btn-secondary':'btn-link';

    return (
        <div className="controls">
            <button type="button" className={classesSortByCurrency} onClick={sortByCurrency}>Sort by Currency</button>
            &nbsp;
            <button type="button" className={classesSortByRate} onClick={sortByRate}>Sort by Rate</button>
            &nbsp;
            &nbsp;
            &nbsp;
            <button type="button" className={classesSortAsc} onClick={sortAsc}>ASC</button>
            &nbsp;
            <button type="button" className={classesSortDesc} onClick={sortDesc}>DESC</button>
        </div>
    )
};

Controls.propTypes = {
    sortAction: PropTypes.func.isRequired,
    sort: PropTypes.object.isRequired
};

const mapState = state => {

    return {
        sort: state.exchangeRates.sort
    }

};


const mapDispatchToProps = dispatch => bindActionCreators(
    {
        sortAction
    },
    dispatch,
);


export default connect(mapState, mapDispatchToProps)(Controls)