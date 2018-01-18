import 'jsdom-global/register';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import CartPrice from './CartPrice'

const testModal = () => {
    const label = "test price"
    const price = 1
    const element = CartPrice({ label: label, price: price })
    return {
        component: shallow(element),
    }

}

describe("CartPrice", () => {

    it("CartPrice render components", () => {
        const { component } = testModal()
        expect(component).exist
    })

    it("CartPrice render text", () => {
        const { component } = testModal()
        expect(component.text()).equal('→ test price :1 €')
    })
})
