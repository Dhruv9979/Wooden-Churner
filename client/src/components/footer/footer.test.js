import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './footer.component';

it('should render Footer component', () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});