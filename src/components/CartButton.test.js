import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import CartButton from './CartButton'
import sinon from 'sinon';

const testModal = () => {
    const actions = {
        onClick: sinon.spy(),
    }
    const props = {
        type : "add",
        className: "test class",
        iconClassName: "test icon class",
        id : "testId",
        label: "test label"
    }
    const component = <CartButton {...actions} {...props} />

    return {
        component: shallow(component),
        actions: actions
    }

}
describe("CartButton", () => {

    it("CartButton render components", () => {
        const { component } = testModal()
        expect(component).exist
    })

    it("CartButton render text", () => {
        const { component } = testModal()
        expect(component.text()).equals('test label')
    })

    it("CartButton should call onClick button click", () => {
        const { component, actions } = testModal()
        let button = component.find('#testId')
        button.simulate('click')
        expect(actions.onClick.calledOnce).to.equal(true);
    })

})
