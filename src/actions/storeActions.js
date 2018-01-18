

import * as actions from '../constants/actionTypes';

export const getAllProducts = () => dispatch => {
    dispatch({
        type: actions.GET_ALL_PRODUCTS,
    })
}

