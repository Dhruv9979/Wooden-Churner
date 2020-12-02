import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './cart-item.component';

it('should render cart item component', () => {
    const mockItem = {
        imageUrl: 'https://i.ibb.co/bRYN3Bx/Almond-Oil.png',
        price: 50,
        name: 'Almond Oil',
        quantity: 5
    };
    const wrapper = shallow(<CartItem item={mockItem} />);
    expect(wrapper).toMatchSnapshot();
});