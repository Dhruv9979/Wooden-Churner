import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { ReactComponent as CloseIcon } from '../../assets/close.svg';

import {
    ModalContainer,
    ModalInner,
    CloseContainer,
    ModalHeader,
    ModalText,
    Text,
} from './modal.styles';

const Modal = ({
    modalState,
    toggleModalState,
    form,
    header,
    text,
    buttonText,
    onSubmit,
    onChange,
    emailId,
}) => {
    const height = document.documentElement.scrollHeight;

    console.log('window inner height: ', window.innerHeight);

    return (
        <ModalContainer className={modalState} height={height} >
            <ModalInner>
                <ModalText>
                    <ModalHeader>{header}</ModalHeader>
                    <Text>{text}</Text>
                    {form && (
                        <form onSubmit={onSubmit}>
                            <FormInput
                                type="emailId"
                                name="emailId"
                                value={emailId}
                                handleChange={onChange}
                                label="Email Id"
                                required
                            />

                            <CustomButton type="submit">
                                {buttonText}
                            </CustomButton>
                        </form>
                    )}
                </ModalText>
                <CloseContainer to="#" onClick={toggleModalState}>
                    <CloseIcon />
                </CloseContainer>
            </ModalInner>
        </ModalContainer>
    );
};

export default Modal;
