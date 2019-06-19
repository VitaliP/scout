import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { modalHide } from '../../../store/actions/modal.actions';

class Modal extends Component {

    constructor(props) {
        super(props);

        this.hideModal = this.hideModal.bind(this);
        this.preventPropogation = this.preventPropogation.bind(this);
    }

    onFetchClick() {
        this.props.fetchData();
    }

    hideModal() {
        this.props.modalHide();
    }

    preventPropogation(e) {
        e.stopPropagation();
    }

    render() {
        if (!this.props.modalState) return false;

        let modalTitle;
        switch (this.props.params.type) {
            case 'alert': modalTitle = "Alert"; break;
            default: modalTitle = 'unknown'; break;
        }

        return <div className="modal-container" onClick={this.hideModal} data-test="modal">

            <div className="modal-dialog" role="document" onClick={this.preventPropogation}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" data-test="title">{modalTitle}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.hideModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p data-test="msg">{this.props.params.message}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.hideModal}>OK</button>
                    </div>
                </div>
            </div>

        </div>;

    }
}

Modal.propTypes = {
    modalState: PropTypes.bool.isRequired,
    params: PropTypes.object
};

const mapStateToProps = state => {
    return {
        modalState: state.modal.modalState,
        params: state.modal.params
    }

};


export default connect(mapStateToProps, {modalHide})(Modal)