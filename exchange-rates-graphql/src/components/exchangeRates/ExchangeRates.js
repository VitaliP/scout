import React, {  } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Loading from "../gui/loading/Loading";
import LoadingError from "../gui/loadingError/LoadingError";
import DataTable from "./DataTable.js";

import { ApolloConsumer } from 'react-apollo';

const FETCH_DATA = gql`
  {
    latest {
      base,
      date,
      rates {
        id,
        val
      }
    }
  }
`;

const GET_SCREEN_STATE = gql`
  {
    screenState @client
  }
`;

const ExchangeRates = () => {
        return (
            <Query query={GET_SCREEN_STATE}>
                {({ data }) => {

                    if (data.screenState === 'init') {
                        return (

                            <div className="main">

                                <ApolloConsumer>
                                    {client => (
                                    <button type="button"
                                            className="btn btn-primary"
                                            onClick={() => client.writeData({ data: {
                                                screenState: 'fetching'
                                            } })}
                                            data-test="btn-fetch">Fetch data</button>

                                    )}
                                </ApolloConsumer>

                            </div>

                        )
                    }

                    return (


                        <div className="main">
                                <Query query={FETCH_DATA}>
                                    {({ loading, error, data, client }) => {
                                        if (loading) return <Loading />;
                                        if (error) {
                                            return <LoadingError/>;
                                        }

                                        return (
                                            <DataTable data={data.latest} />
                                        );
                                    }}
                                </Query>
                        </div>
                    )

                }}
            </Query>
        )
};


export default ExchangeRates;