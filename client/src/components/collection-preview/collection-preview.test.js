import React from "react";
import { shallow } from "enzyme";

import { CollectionPreview } from "./collection-preview.component";
import CollectionItem from "../collection-item/collection-item.component";

describe("CollectionPreview component", () => {
    let wrapper;
    let mockMatch;
    let mockHistory;
    let mockRouteName = "almondoil";
    let mockItems = {
        oils: { almondOil: { id: 1 }, walnutOil: { id: 2 }, coconutOil: { id: 3 } },
    };

    beforeEach(() => {
        mockMatch = {
            url: "/shop/oils",
        };

        mockHistory = {
            push: jest.fn(),
        };

        const mockProps = {
            title: "oils",
            routeName: mockRouteName,
            items: mockItems,
            history: mockHistory,
            match: mockMatch,
        };

        wrapper = shallow(<CollectionPreview {...mockProps} />);
    });

    it("should render CollectionPreview component", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should call history.push with the right string when TitleContainer clicked", () => {
        wrapper.find("TitleContainer").simulate("click");

        expect(mockHistory.push).toHaveBeenCalledWith(
            `${mockMatch.url}/${mockRouteName}`
        );
    });
    describe("Carousel container", () => {

        it('should render Carousel', () => {
            expect(wrapper.exists("Carousel")).toBe(true);
        });

        it('should render the same number of items as in the collection object', () => {
            expect(wrapper.find(CollectionItem).length).toBe(Object.keys(mockItems).length);
        });
    });
});
