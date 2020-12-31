import React, { useState, useEffect } from 'react';

import Directory from '../../components/directory/directory.component';
import Modal from '../../components/modal/modal.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
    const [modalState, setModalState] = useState(true);
    let toggleModalState = () => setModalState(!modalState);
    useEffect(() => {
        return () => {
            toggleModalState();
        }
    }, [])
    return (
        <HomePageContainer>
            <Modal
                modalState={modalState}
                toggleModalState={toggleModalState}
                form={false}
				header="Please Sign In/Sign Up by visiting to Sign in Page to add items to cart."
				text="This will help you to check and order again all of your previous orders, and also track them."
            />
            <Directory />
        </HomePageContainer>
    );
};

export default HomePage;
