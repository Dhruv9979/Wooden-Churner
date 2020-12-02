import React from "react";
import { shallow } from "enzyme";

import { ProductPage } from "./product.component";
import CollectionItem from "../../components/collection-item/collection-item.component";

describe('Product Page', () => {
    let wrapper;
    let mockItems = {
        flours: { flour1: { id: 1 }, flour2: { id: 2 }, flour3: { id: 3 } },
    };
    
    beforeEach(() => {
        const mockProducts = {
            products: mockItems,
            name: "Flours",
        };
        
        wrapper = shallow(<ProductPage items={mockProducts} />);
    });
    
    it("should render the Product Page", () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it("should render the same number of Products as product object", () => {
        expect(wrapper.find(CollectionItem).length).toBe(Object.keys(mockItems).length);
    });
});
