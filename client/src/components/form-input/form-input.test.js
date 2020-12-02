import React from 'react';
import { shallow }from 'enzyme';
import FormInput from './form-input.component';

describe('FormInput component', () => {
    let wrapper;
    let mockHandleChange;

    beforeEach(() => {
        mockHandleChange = jest.fn();

        const mockProps = {
            label: 'email',
            handleChange: mockHandleChange,
            value: 'test@gmail.com'
        };

        wrapper = shallow(<FormInput {...mockProps} />);
    });

    it('should render FormInput component', () => {
        expect(wrapper).toMatchSnapshot();    
    });

    it('should call handleChange method when input changes', () => {
        wrapper.find("FormInputContainer").simulate("change");
        expect(mockHandleChange).toHaveBeenCalled();
    });

    it('should render FormInputLabel is there is label', () => {
        expect(wrapper.exists("FormInputLabel")).toBe(true);
    });

    it('should not render FormInputLabel if there is no label', () => {
        const mockProps = {
            label: '',
            handleChange: mockHandleChange,
            value: 'test@gmail.com'
        };

        const newWrapper = shallow(<FormInput { ...mockProps } />)
        expect(newWrapper.exists("FormInputLabel")).toBe(false);
    });
});