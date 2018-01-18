

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Modal from '../components/Modal'
import ProductList from './ProductList';

class ProductAdd extends Component {

    render() {
        return (
            <div>
                {this.props.isOpen === true &&
                    <Modal closeModal={() => this.props.close()}>
                        <ProductList />
                    </Modal>
                }
            </div>
        );
    }
}

ProductAdd.propTypes = {
    close: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
};


const mapStateToProps = state => ({
    addproduct: state.cart.addproduct,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, null)(ProductAdd)
