
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearChart } from '../actions/index';
import CartButton from '../components/CartButton';


class CartHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-header" >
                <CartButton onClick={() => this.props.openAddProduct()}
                    label="Add New Product"
                    id="openAddProduct"
                    className="app-header-add-btn btn"
                    iconClassName="glyphicon glyphicon-plus" />
                <CartButton onClick={() => this.props.clearChart()}
                    label="Clear Chart"
                    id="clearbutton"
                    className="app-header-clear-btn btn"
                    iconClassName="glyphicon glyphicon-trash" />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    clearChart: () => dispatch(clearChart())
})


export default connect(null, mapDispatchToProps)(CartHeader)