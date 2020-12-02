import React from "react";
import { shallow } from "enzyme";

import { MenuItem } from "./menu-item.component";

describe("MenuItem component", () => {
    let wrapper;
    let mockMatch;
    let mockHistory;
    const linkUrl = "/shop/oils";
    const imageUrl = "testImage";
    const size = "large";

    beforeEach(() => {
        mockHistory = {
            push: jest.fn(),
        };

        mockMatch = {
            url: "/shop",
        };

        const mockProps = {
            title: "oils",
            imageUrl,
            size,
            history: mockHistory,
            linkUrl,
            match: mockMatch,
        };

        wrapper = shallow(<MenuItem {...mockProps} />);
    });

    it("should render MenuItem component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should call history push with the right string when MenuItemContainer is clicked", () => {
        wrapper.find("MenuItemContainer").simulate("click");
        expect(mockHistory.push).toHaveBeenCalledWith(
            `${mockMatch.url}${linkUrl}`
        );
    });

    it("should pass size to MenuItemConatiner as the prop size", () => {
        expect(wrapper.find("MenuItemContainer").prop("size")).toBe(size);
    });

    it("should pass imageUrl to BackgroundImageContainer as the prop imageUrl", () => {
        expect(wrapper.find("BackgroundImageContainer").prop("imageUrl")).toBe(
            imageUrl
        );
    });
});
