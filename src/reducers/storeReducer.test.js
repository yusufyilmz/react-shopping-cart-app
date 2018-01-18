import store from './storeReducer'
import * as actions from '../constants/actionTypes'

describe('reducers', () => {
    describe('store', () => {
        const INITIAL_STATE = {
            products: [],
        }

        const STATE = {
            products: [
                { "id": 0, "name": "Product 0",  "price": 8.00, "tax": 7 },
                { "id": 1, "name": "Product 1", "price": 11.00, "tax": 19 },
                { "id": 2, "name": "Product 2",  "price": 13.00, "tax": 7 },
                { "id": 3, "name": "Product 3", "price": 15.00, "tax": 19 },
                { "id": 4, "name": "Product 4",  "price": 11.00, "tax": 19 },
                { "id": 5, "name": "Product 5",  "price": 11.00, "tax": 22 },
                { "id": 6, "name": "Product 6",  "price": 13.00, "tax": 19 },
                { "id": 7, "name": "Product 7",  "price": 14.00, "tax": 7 },
                { "id": 8, "name": "Product 8",  "price": 15.00, "tax": 22 }
            ]
        }

        it('should provide the initial state', () => {
            expect(store(undefined, {})).toEqual(INITIAL_STATE)
        })


        it('should handle GET_ALL_PRODUCTS action', () => {
            expect(store(INITIAL_STATE, {
                type: actions.GET_ALL_PRODUCTS
            })).toEqual(STATE)
        })

    })
})
