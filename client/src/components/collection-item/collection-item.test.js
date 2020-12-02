import React from "react";
import { shallow, mount } from "enzyme";
import { CollectionItem } from "./collection-item.component";

describe("CollectionItem component", () => {
    let wrapper;
    let mockAddItem;
    let mockMatch;
    let imageUrl = "https://i.ibb.co/bRYN3Bx/Almond-Oil.png";
    let mockName = "Almond Oil";
    let mockPrice = "10 - 20";
    let mockRouteName = "oils";

    beforeEach(() => {
        mockMatch = {
            url: "/shop/oils",
        };
        const mockProps = {
            item: {
                imageUrl: imageUrl,
                price: mockPrice,
                name: mockName,
                routeName: mockRouteName,
            },
            match: mockMatch,
        };

        wrapper = shallow(<CollectionItem {...mockProps} />);
    });

    it("should render CollectionItem Component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should not render AddButton on the Collection Page", () => {
        expect(wrapper.find("AddButton").exists()).toBeFalsy();
    });

    it('should render AddButton on Product Page', () => {
        mockAddItem = jest.fn();
        const mockProps = {
            item: {
                imageUrl: imageUrl,
                price: mockPrice,
                name: mockName,
                routeName: undefined,
            },
            addItem: mockAddItem,
            match: mockMatch,
        };
    
        wrapper = shallow(<CollectionItem {...mockProps} />);
    
        wrapper.find("AddButton").simulate("click");
    
        expect(mockAddItem).toHaveBeenCalled();
    });

    it("should render imageUrl as a prop on BackgroundImage", () => {
        expect(wrapper.find("BackgroundImage").prop("imageUrl")).toBe(imageUrl);
    });

    it("should render name prop in NameContainer", () => {
        expect(wrapper.find("NameContainer").text()).toBe(mockName);
    });

    it("should render price prop in PriceContainer", () => {
        const price = '₹' + mockPrice;
        expect(wrapper.find("PriceContainer").text()).toBe(price);
    });
});
