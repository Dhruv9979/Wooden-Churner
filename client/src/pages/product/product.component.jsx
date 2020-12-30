import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import CollectionItem from '../../components/collection-item/collection-item.component';
import ProductInformation from '../../components/product-information/product-information.component';
import Modal from '../../components/modal/modal.component';

import { selectProducts } from '../../redux/shop/shop.selectors';

import {
    ProductPageContainer,
    ProductTitle,
    ProductItemsContainer,
    OptionButton,
} from './product.styles';

export const ProductPage = ({ items, history }) => {
    const { name, products, description } = items;

    const [modalState, setModalState] = useState(false);

    const toggleModalState = () => {
        setModalState(!modalState);
    };

    return (
        <ProductPageContainer>
            <Modal
                modalState={modalState}
                toggleModalState={toggleModalState}
                form={false}
                header="Please Sign In/Sign Up by visiting to Sign in Page to add items to cart."
            />
            <OptionButton onClick={() => history.goBack()}>
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{ marginRight: '10px' }}
                />
                GO BACK
            </OptionButton>
            <ProductTitle>{name.toUpperCase()}</ProductTitle>
            {description && (
                <ProductInformation description={description} name={name} />
            )}
            <ProductItemsContainer>
                {Object.entries(products).map(([key, val]) => (
                    <CollectionItem
                        key={val.id}
                        item={val}
                        toggleModalState={toggleModalState}
                    />
                ))}
            </ProductItemsContainer>
            
        </ProductPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    items: selectProducts(
        ownProps.match.params.collectionId,
        ownProps.match.params.productId
    )(state),
});

export default connect(mapStateToProps)(ProductPage);
