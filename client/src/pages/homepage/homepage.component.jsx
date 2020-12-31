import React, { useState, useEffect } from 'react';

import Directory from '../../components/directory/directory.component';
import Modal from '../../components/modal/modal.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
    const [modalState, setModalState] = useState(true);
    let toggleModalState = () => setModalState(false);

// This is to only show the modal once when the curstomer is using the website on their device for the first time ever.
    useEffect(() => {
        let pop_status = localStorage.getItem('pop_status');
          if(!pop_status){
            setModalState(true);
            localStorage.setItem('pop_status',1);
          } else toggleModalState();
    }, []);


    return (
        <HomePageContainer>
            {modalState && <Modal
                modalState={modalState}
                toggleModalState={toggleModalState}
                form={false}
				header="Please Sign In/Sign Up by visiting to Sign in Page to add items to cart."
				text="This will help you to check and order again all of your previous orders, and also track them."
            />}
            <Directory />
        </HomePageContainer>
    );
};

export default HomePage;
