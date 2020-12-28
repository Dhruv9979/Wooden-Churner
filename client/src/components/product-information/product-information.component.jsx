import React from 'react';

import { ProductInfoContainer } from './product-information.styles';

const ProductInformation = ({ description, name }) => {
    const { information, use } = description;
    const { rich_way, benefits } = use || {};

    return (
        <ProductInfoContainer>
            <h2>Description</h2>
            {rich_way && (
                <p>
                    <strong>A Rich way to use {name}</strong>
                    {rich_way?.map((i) => (
                        <li key={Math.random().toString(36).substring(7)}>
                            {i}
                        </li>
                    ))}
                </p>
            )}
            {benefits && (
                <p>
                    <strong>Benefits</strong>
                    {benefits?.map((i) => (
                        <li key={Math.random().toString(36).substring(7)}>
                            {i}
                        </li>
                    ))}
                </p>
            )}
            {information && (
                <p>
                    <strong>General Information</strong>
                    {information?.map((i) => (
                        <li key={Math.random().toString(36).substring(7)}>
                            {i}
                        </li>
                    ))}
                </p>
            )}
        </ProductInfoContainer>
    );
};

export default ProductInformation;
