

import * as actions from '../constants/actionTypes';

export const clearChart = () => dispatch => {
    dispatch(clearAllProductFromChat())
}

export const addProduct = (productId) => (dispatch, getState) => {
    dispatch(addProductToChat(getState().store.products[productId]))
}

export const addComment = (productId, comment) => (dispatch, getState) => {
    dispatch(addCommentToChart(getState().cart.products[productId] , comment))
}

export const removeProduct = (productId) => dispatch => {
    dispatch(removeProductFromChart(productId))
}


export const increaseQuantity = (productId) => dispatch => {
    dispatch(increaseQuantityFromChat(productId))
}

export const decreaseQuantity = (productId) => dispatch => {
    dispatch(decreaseQuantityFromChat(productId))
}

const increaseQuantityFromChat = productId => ({
    type: actions.INCREASE_QUANTITY,
    productId
})

const decreaseQuantityFromChat = productId => ({
    type: actions.DECREASE_QUANTITY,
    productId
})

const addProductToChat = product => ({
    type: actions.ADD_PRODUCT,
    product
})

const addCommentToChart = ( product, comment) => ({
    type: actions.ADD_COMMENT,
    product,
    comment
})

const clearAllProductFromChat = () => ({
    type: actions.CLEAR_CHART,
})

const removeProductFromChart = productId => ({
    type: actions.REMOVE_PRODUCT,
    productId
})



