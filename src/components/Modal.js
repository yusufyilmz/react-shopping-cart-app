

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);

    }

    componentWillMount() {
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    handleOutsideClick(e) {
        if (!this.node.contains(e.target)) {
            this.closeModal()
        }
    }

    closeModal() {
        document.removeEventListener('click', this.handleOutsideClick, false);
        this.props.closeModal()
    }

    render() {
        return (
            <div>
                <div className="app-modal" >
                    <div className="app-modal-content" ref={node => { this.node = node; }}>
                        <div >
                            <button className="app-modal-close" onClick={this.closeModal.bind(this)}  >
                                <i className="glyphicon glyphicon-remove-sign"></i>
                            </button>
                        </div>
                        <div className="app-modal-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal
