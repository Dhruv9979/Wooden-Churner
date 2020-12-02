import React from "react";
import { shallow } from "enzyme";

import { Header } from "./header.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

describe("Header component", () => {
    let wrapper;
    let mockSignOutStart;

    beforeEach(() => {
        mockSignOutStart = jest.fn();

        const mockProps = {
            hidden: true,
            currentUser: {
                uid: "123",
            },
            signOutStart: mockSignOutStart,
        };

        wrapper = shallow(<Header {...mockProps} />);
    });

    it("should render Header component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe("if current user is present", () => {
        it("should render sign out link", () => {
            expect(wrapper.find("OptionDiv").at(0).text()).toBe("SIGN OUT");
        });

        it("should call signOutStart when clicked on Sign out link", () => {
            wrapper.find("OptionDiv").at(0).simulate("click");
            expect(mockSignOutStart).toHaveBeenCalled();
        });
    });

    describe('if current user is null', () => {
        it('should render sign in link', () => {
            const mockProps = {
                hidden: true,
                currentUser: null,
                signOutStart: mockSignOutStart
            };
            const newWrapper = shallow(<Header {...mockProps} />)

            expect(newWrapper.find("OptionLink").at(3).text()).toBe("SIGN IN");
        });
    });

    describe('if CartDropDown is hidden', () => {
        it('should not render CartDropDown', () => {
            expect(wrapper.exists(CartDropdown)).toBe(false);
        });
    });

    describe('if current user is null and CartDropDown is not hidden', () => {
        it('should render cart dropdown', () => {
            const mockProps = {
                hidden: false,
                currentUser: null,
                signOutStart: mockSignOutStart
            };

            const newWrapper = shallow(<Header {...mockProps} />);

            expect(newWrapper.exists(CartDropdown)).toBe(true);
        });
    });
});
