import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import soundfile from '../../assets/Badam_Jingle_30_Sec_Food.mp3';

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
    AudioPlayerContainer,
} from './product.styles';

export const ProductPage = ({ items }) => {
    const history = useHistory();

    const { audio, name, products, description } = items;

    const { food, cosmetic, diya } = audio || {};

    console.log(food, cosmetic);

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
                text="This will help you to check and order again all of your previous orders, and also track them."
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
            {diya && (
                <AudioPlayerContainer>
                    <AudioPlayer
                        src={diya}
                        layout="horizontal-reverse"
                        customAdditionalControls={[]}
                        showJumpControls={false}
                        customVolumeControls={[]}
                        header="Diya/Lamp Purpose"
                    />
                    <br />
                </AudioPlayerContainer>
            )}

            {food && (
                <AudioPlayerContainer>
                    <AudioPlayer
                        src={food}
                        layout="horizontal-reverse"
                        customAdditionalControls={[]}
                        showJumpControls={false}
                        customVolumeControls={[]}
                        header="Cooking Purposes"
                    />
                </AudioPlayerContainer>
            )}
            <br />
            {cosmetic && (
                <AudioPlayerContainer>
                    <AudioPlayer
                        src={cosmetic}
                        layout="horizontal-reverse"
                        customAdditionalControls={[]}
                        showJumpControls={false}
                        customVolumeControls={[]}
                        header="Skin/Hair Care"
                    />
                </AudioPlayerContainer>
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
