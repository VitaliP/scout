import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import { Mutation } from 'react-apollo';

const GET_MODAL = gql`
  {
    modal @client {
        modalState
        type
        message
    }
  }
`;


const HIDE_MODAL = gql`
  mutation HideModal($modal: Modal) {
    hideModal(modal: $modal) @client
  }
`;

const Modal = () => {
    return (
        <Query query={GET_MODAL}>
            {({ data, client }) => {

                if (data.modal.modalState) {

                    let modalTitle;
                    switch (data.modal.type) {
                        case 'alert': modalTitle = "Alert"; break;
                        default: modalTitle = 'unknown'; break;
                    }

                    return (

                    <Mutation mutation={HIDE_MODAL} variables={{}}>
                        {hideModal => (

                            <div className="modal-container" data-test="modal" onClick={hideModal}>

                                <div className="modal-dialog" role="document" onClick={(e)=> e.preventPropogation}>
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" data-test="title">{modalTitle}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={hideModal}>
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <p data-test="msg">{data.modal.message}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" onClick={hideModal}>OK</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )}
                    </Mutation>
                    )
                }
                return false;
            }}
        </Query>
    );
};

export default Modal;