import _ from 'lodash';
import React from 'react'


const DataTable = (props) => {

    const rates = _.chain(props.data.rates)
        .sortBy('id')
        .value();

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">{props.data.base} x</th>
                <th scope="col">Currency</th>
                <th scope="col">Rate</th>
            </tr>
            </thead>
            <tbody>

            {rates.map((row,index)=>{

                return (
                    <tr key={index}>
                        <td></td>
                        <td>{row.id}</td>
                        <td>{row.val}</td>
                    </tr>
                )

            })}

            </tbody>
        </table>
    )
};

export default DataTable;