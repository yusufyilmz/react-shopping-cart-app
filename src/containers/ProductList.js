
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Product from '../components/Product';
import { addProduct, getAllProducts } from '../actions/index';
import _ from 'lodash'

class ProductList extends Component {

    constructor(props) {
        super(props);
    }

    renderProducts() {
        return _.map(this.props.products, (item) => {
            return (
                <Product key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    tax={item.tax}
                    addProduct={(id) => {
                        this.props.addProduct(id)
                    }}
                />
            )
        })
    }


    render() {
        return (
            <table className="app-table table table-hover ">
                <thead className="app-table-header">
                    <tr>
                        <th name="id"># </th>
                        <th name="name">Name </th>
                        <th name="price">Price </th>
                        <th name="tax">Tax </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderProducts()}
                </tbody>

            </table>
        );
    }
}

ProductList.propTypes = {
    products: PropTypes.any.isRequired,
}


const mapStateToProps = state => ({
    products: state.store.products
})

const mapDispatchToProps = dispatch => ({
    addProduct: (id) => dispatch(addProduct(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)