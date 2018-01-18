import cart from './cartReducer'
import * as actions from '../constants/actionTypes'

describe('reducers', () => {
    describe('cart', () => {
        const INITIAL_STATE = {
            products: {},
        }

        const STATE = {
            products: {
                "8": {
                    "id": 8,
                    "name": "Product 8",
                    "comments": "",
                    "price": 15.00,
                    "tax": 22,
                    "quantity": 1
                }
            }
        }

        const INCREASED_STATE = {
            products: {
                "8": {
                    "id": 8,
                    "name": "Product 8",
                    "comments": "",
                    "price": 15.00,
                    "tax": 22,
                    "quantity": 2
                }
            }
        }

        it('should provide the initial state', () => {
            expect(cart(undefined, {})).toEqual(INITIAL_STATE)
        })

        it('should handle ADD_TO_CART action', () => {
            expect(cart(INITIAL_STATE, {
                type: actions.ADD_PRODUCT, product: {
                    "id": 8,
                    "name": "Product 8",
                    "comments": "",
                    "price": 15.00,
                    "tax": 22,
                }
            })).toEqual(STATE)
        })


        it('should handle REMOVE_PRODUCT action', () => {
            expect(cart(STATE, {
                type: actions.REMOVE_PRODUCT, productId: 8
            })).toEqual(INITIAL_STATE)
        })

        it('should handle DECREASE_QUANTITY action', () => {
            expect(cart(STATE, {
                type: actions.DECREASE_QUANTITY, productId: 8
            })).toEqual(INITIAL_STATE)
        })

        it('should handle INCREASE_QUANTITY action', () => {
            expect(cart(STATE, {
                type: actions.INCREASE_QUANTITY, productId: 8
            })).toEqual(INCREASED_STATE)
        })

    })
})
