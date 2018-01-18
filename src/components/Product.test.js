import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import Product from './Product'
import sinon from 'sinon';

const testModal = () => {
    const actions = {
        addProduct: sinon.spy(),
    }

    const props = {
        id: 1,
        name: "test name",
        price: 2,
        tax: 3,
    }

    const component = <Product {...actions} {...props} />

    return {
        component: shallow(component),
        actions: actions
    }

}
describe("Product", () => {

    it("Product render components", () => {
        const { component } = testModal()
        expect(component).exist
    })

    it("Product render text", () => {
        const { component } = testModal()
        expect(component.text()).contains('1 test name 2 € 3 %')
    })


    it("Product should call addProduct button click", () => {
        const { component, actions } = testModal()
        let button = component.find('#addProduct')
        button.simulate('click')
        expect(actions.addProduct.calledOnce).to.equal(true);
    })

})
