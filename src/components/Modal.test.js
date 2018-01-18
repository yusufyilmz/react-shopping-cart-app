import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import Modal from './Modal'
import sinon from 'sinon';


const testModal = () => {
    const actions = {
        closeModal: sinon.spy()
    }

    const children = "test text"
    const component = <Modal {...actions} children={children} />

    return {
        component: shallow(component),
        actions: actions
    }
}

describe("Modal", () => {

    it("Modal render components", () => {
        const { component } = testModal()
        expect(component.text()).equal('test text')

    })

    it("Modal should call close button click", () => {
        const { component, actions } = testModal()
        let button =  component.find('button')
        button.simulate('click')
        expect(actions.closeModal.calledOnce).to.equal(true);
    })
})
