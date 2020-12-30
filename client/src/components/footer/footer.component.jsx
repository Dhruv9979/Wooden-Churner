import React from 'react';

import { ReactComponent as Waves } from '../../assets/waves-top.svg';

import {
    FooterContainer,
    VegetarianImg,
	WavesContainer,
	ContentContainer,
} from './footer.styles';

export const Footer = () => {
    return (
        <FooterContainer>
            <WavesContainer>
                <Waves />
            </WavesContainer>
            <ContentContainer>
                All our products are pure vegetarian
                <VegetarianImg
                    src={'https://i.ibb.co/DgS6wvV/vegetarian.png'}
                />
                <br /> <br />
                Copyright &copy; 2020 Shree Ramkrishna Oil Mills | All Rights
                Reserved <br />
                <br /> Privacy Policy | Return & Refund Policy
            </ContentContainer>
        </FooterContainer>
    );
};

export default Footer;
