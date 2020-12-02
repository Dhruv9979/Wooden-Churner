import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './homepage.component';

it("should render Homepage", () => {
    const home = shallow(<HomePage />);
    expect(home).toMatchSnapshot();
});