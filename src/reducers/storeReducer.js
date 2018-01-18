import * as actions from '../constants/actionTypes'
import _products from '../constants/product.json'

const INITIAL_STATE = {
    products: [],
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: _products
            };
        default:
            return state;
    }
}
