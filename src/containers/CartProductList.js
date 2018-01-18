
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import CartProduct from '../components/CartProduct';
import { removeProduct, increaseQuantity, decreaseQuantity, addComment } from '../actions/index';
import _ from 'lodash'

class CartProductList extends Component {

    constructor(props) {
        super(props);
    }

    renderProducts() {
        return _.map(this.props.products, (item) => {
            return (
                <CartProduct key={item.id}
                    id={item.id}
                    name={item.name}
                    comments={item.comments}
                    price={item.price}
                    tax={item.tax}
                    quantity={item.quantity}
                    removeProduct={(id) => {
                        this.props.removeProduct(id)
                    }}
                    addComment={(id, comment) => {
                        this.props.addComment(id, comment)
                    }}
                    increaseQuantity={(id) => {
                        this.props.increaseQuantity(id)
                    }}
                    decreaseQuantity={(id) => {
                        this.props.decreaseQuantity(id)
                    }}
                />
            )
        })
    }
    render() {
        return (
            <div ref={node => { this.node = node; }}>
                <table className="app-table table table-hover " >
                    <thead className="app-table-header">
                        <tr>
                            <th name="id"  ># </th>
                            <th name="name"  >Name </th>
                            <th name="comments"  >Comments </th>
                            <th name="price"  >Price </th>
                            <th name="tax"  >Tax </th>
                            <th name="quantity"  >Quantity </th>
                            <th name="total"  >Total Item </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProducts()}
                    </tbody>

                </table>
            </div>
        );
    }
}

CartProductList.propTypes = {
    products: PropTypes.any.isRequired,
}


const mapStateToProps = state => ({
    products: state.cart.products
})

const mapDispatchToProps = dispatch => ({
    removeProduct: (id) => dispatch(removeProduct(id)),
    addComment: (id, comment) => dispatch(addComment(id, comment)),
    increaseQuantity: (id) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(decreaseQuantity(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartProductList)