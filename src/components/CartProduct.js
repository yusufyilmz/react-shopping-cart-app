import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CartButton from './CartButton';

class CartProduct extends Component {

    calculateTotalPrice() {
        return (this.props.quantity * (this.props.price + (this.props.price * this.props.tax / 100))).toFixed(2)
    }

    render() {
        return (
            <tr >
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>
                    <input type="text" value={this.props.comments} onChange={(e) => this.props.addComment(this.props.id, e.target.value)} />
                </td>
                <td>{this.props.price} &euro; </td>
                <td>{this.props.tax} % </td>
                <td style={{ width: 100 }} >
                    <CartButton onClick={() => this.props.decreaseQuantity(this.props.id)}
                        id="decreaseQuantity"
                        className="app-productdecrease-btn"
                        iconClassName="glyphicon glyphicon-minus-sign"
                    />
                    {this.props.quantity}
                    <CartButton onClick={() => this.props.increaseQuantity(this.props.id)}
                        id="increaseQuantity"
                        className="app-productincrease-btn"
                        iconClassName="glyphicon glyphicon-plus-sign"
                    />
                </td>
                <td>{this.calculateTotalPrice()} &euro; </td>
                <td>
                    <CartButton onClick={() => this.props.removeProduct(this.props.id)}
                        id="removeProduct"
                        className="app-productremove-btn"
                        iconClassName="glyphicon glyphicon-remove-sign"
                    />
                </td>
            </tr>
        );
    }
}

CartProduct.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    comments: PropTypes.string,
    price: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    removeProduct: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired,
    decreaseQuantity: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired,

}


export default CartProduct