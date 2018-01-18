import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartProductList from './CartProductList';
import CartHeader from './CartHeader';
import CartTotalPrice from './CartTotalPrice';
import ProductAdd from './ProductAdd';

class CartApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isProductAdd: false
    }
  }
  render() {
    return (
      <div className="app">
        <h1> Your cart</h1>
        <CartHeader
          openAddProduct={() => {
            this.setState({ isProductAdd: true })
          }} />
        <CartProductList  />
        <CartTotalPrice />
        <ProductAdd
          isOpen={this.state.isProductAdd}
          close={() => {
            this.setState({ isProductAdd: false })
          }} />
      </div>
    );
  }
}

export default CartApp