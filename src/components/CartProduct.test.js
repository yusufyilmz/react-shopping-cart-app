import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import CartProduct from './CartProduct'
import sinon from 'sinon';

const testModal = () => {
    const actions = {
        increaseQuantity: sinon.spy(),
        decreaseQuantity: sinon.spy(),
        removeProduct: sinon.spy(),
        addComment: sinon.spy()
    }

    const props = {
        id: 1,
        name: "test name",
        comments: "test comments",
        price: 2,
        tax: 3,
        quantity: 4,
    }

    const component = <CartProduct {...actions} {...props} />

    return {
        component: shallow(component),
        actions: actions
    }

}
describe("CartProduct", () => {

    it("CartProduct render components", () => {
        const { component } = testModal()
        expect(component).exist
    })

    it("CartProduct render text", () => {
        const { component } = testModal()
        expect(component.text()).contains('1 test name 2 € 3 %')
        expect(component.text()).contains('8.24 €')
    })


    it("CartProduct should call increaseQuantity button click", () => {
        const { component, actions } = testModal()
        let button = component.find('#increaseQuantity')
        button.simulate('click')
        expect(actions.increaseQuantity.calledOnce).to.equal(true);
    })

    it("CartProduct should call decreaseQuantity button click", () => {
        const { component, actions } = testModal()
        let button = component.find('#decreaseQuantity')
        button.simulate('click')
        expect(actions.decreaseQuantity.calledOnce).to.equal(true);
    })

    it("CartProduct should call removeProduct button click", () => {
        const { component, actions } = testModal()
        let button = component.find('#removeProduct')
        button.simulate('click')
        expect(actions.removeProduct.calledOnce).to.equal(true);
    })
})
