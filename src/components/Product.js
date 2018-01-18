import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CartButton from './CartButton';

class Product extends Component {

    render() {
        return (
            <tr >
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.props.price} &euro; </td>
                <td>{this.props.tax} % </td>
                <td>
                    <CartButton onClick={() => this.props.addProduct(this.props.id)}
                        id="addProduct"
                        className="app-productremove-btn"
                        iconClassName="glyphicon glyphicon-plus-sign"
                    />
                </td>

            </tr>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    addProduct: PropTypes.func.isRequired
}



export default Product