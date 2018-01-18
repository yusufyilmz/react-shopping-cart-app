import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../actions/index';
import _ from 'lodash'
import CartPrice from '../components/CartPrice';

class CartTotalPrice extends Component {

    constructor(props) {
        super(props);
    }

    calculatePrices(products) {
        let prices = []
        prices.push({ "key": "Net Total", "value": this.calculateTotalPrice(products) });
        prices.push({ "key": "Tax", "value": this.calculateTaxPrice(products) });

        _.forEach(this.calculateIndividualTaxPrices(products), (value, key) => {
            prices.push({ "key": key + ' %', "value": value.toFixed(2) });
        })
        prices.push({ "key": "Grand Total", "value": this.calculateGrandTotalPrice(products) });
        return prices

    }

    calculateIndividualTaxPrices(products) {
        let taxDictionary = {}
        _.forEach(products, (n) => {
            if (n.tax in taxDictionary) {
                taxDictionary[n.tax] += (n.quantity * (n.price * n.tax) / 100)
            }
            else {
                taxDictionary[n.tax] = (n.quantity * (n.price * n.tax) / 100)
            }
        })

        return taxDictionary;
    }


    calculateTotalPrice(products) {
        return _.reduce(products, (sum, n) => {
            return sum + n.quantity * n.price;
        }, 0).toFixed(2)
    }

    calculateTaxPrice(products) {
        return _.reduce(products, (sum, n) => {
            return sum + (n.quantity * (n.price * n.tax) / 100)
        }, 0).toFixed(2);
    }

    calculateGrandTotalPrice(products) {
        return _.reduce(products, (sum, n) => {
            return sum + (n.quantity * (n.price + (n.price * n.tax) / 100));
        }, 0).toFixed(2);
    }

    renderPrices() {
        return _.map(this.calculatePrices(this.props.products), (price) => {
            return <CartPrice key={price["key"]} label={price["key"]} price={price["value"]} />
        })
    }

    render() {
        return (
            <div className="app-totalcart-table ">
                {this.renderPrices()}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    products: state.cart.products
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, null)(CartTotalPrice)