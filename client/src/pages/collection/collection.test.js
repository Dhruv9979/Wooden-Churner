import React from "react";
import { shallow } from "enzyme";

import { CollectionPage } from "./collection.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

describe('Collection Page', () => {
    let wrapper;
    let mockItems = {
        flours: { flour1: { id: 1 }, flour2: { id: 2 }, flour3: { id: 3 } },
    };
    
    beforeEach(() => {
        const mockCollection = {
            items: mockItems,
            title: "Flours",
        };
        
        wrapper = shallow(<CollectionPage collection={mockCollection} />);
    });
    
    it("should render the Collection Page", () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it("should render the same number of CollectionItems as collection object", () => {
        expect(wrapper.find(CollectionItem).length).toBe(Object.keys(mockItems).length);
    });
});
    