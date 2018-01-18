import * as actions from '../constants/actionTypes'
import _ from 'lodash'

const INITIAL_STATE = {
    products: {},
}

export default function (state = INITIAL_STATE, action) {

    let product;
    switch (action.type) {
        case actions.ADD_COMMENT:
            return {
                ...state,
                products:
                    {
                        ...state.products,
                        [action.product.id]: { ...action.product, quantity: action.product.quantity, comments: action.comment }
                    }
            };
        case actions.CLEAR_CHART:
            return {
                ...state,
                products: []
            };
        case actions.REMOVE_PRODUCT:
            return {
                ...state,
                products: _.omit(state.products, action.productId)
            };
        case actions.INCREASE_QUANTITY:
            product = _.find(state.products, (o) => o.id === action.productId)
            product.quantity += 1;
            return {
                ...state,
                products: { ...state.products, [action.productId]: product }
            };
        case actions.DECREASE_QUANTITY:
            product = _.find(state.products, (o) => o.id === action.productId)
            if (product.quantity === 1) {
                return {
                    ...state,
                    products: _.omit(state.products, action.productId)
                };
            }
            else {
                product.quantity -= 1;
                return {
                    ...state,
                    products: { ...state.products, [action.productId]: product }
                };
            }
        case actions.ADD_PRODUCT:
            product = _.find(state.products, (o) => o.id === action.product.id)
            if (product) {
                product.quantity += 1;
                return {
                    ...state,
                    products: { ...state.products, [action.product.id]: product }
                };
            }
            action.product.quantity = 1
            action.product.comments = ""

            return {
                ...state,
                products: { ...state.products, [action.product.id]: action.product }
            };
        default:
            return state;
    }
}
