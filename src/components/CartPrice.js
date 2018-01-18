import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { removeProduct } from '../actions/index';

const CartPrice = ({ label, price }) => {
    if (label === "Net Total" || label === "Grand Total" || label === "Tax") {
        return (<p style={{ fontWeight: "bold" }}>
            {label} :
         <span style={{ float: "right" }}>{price} &euro;</span>
        </p>)
    }
    else {

        return (<p style={{ fontWeight: "normal" }}>
            &#8594; {label} :
         <span style={{ float: "right" }}>{price} &euro;</span>
        </p>)
    }
}

CartPrice.propTypes = {
    label: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}


export default CartPrice;