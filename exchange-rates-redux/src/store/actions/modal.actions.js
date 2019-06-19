import { MODAL_SHOW, MODAL_HIDE } from './';

export const modalShow = (type, message) => dispatch => {
    dispatch({
        type: MODAL_SHOW,
        payload: {
            type: type,
            message: message
        }
    });
};

export const modalHide = (type, message) => dispatch => {
    dispatch({
        type: MODAL_HIDE
    });
};