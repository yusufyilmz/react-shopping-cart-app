import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { removeProduct } from '../actions/index';

const CartButton = ({ onClick, label, id, className, iconClassName }) => {

    return <button id={id} type="button"
        className={className}
        onClick={() => onClick()}>
        <i className={iconClassName}></i>
        <span>{label}</span>
    </button>
}

CartButton.propTypes = {
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
}


export default CartButton;