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
    const vh = document.documentElement.offsetHeight;
    const innerHieght = window.innerHeight;

    console.log('window inner height: ', window.innerHeight);

    console.log(
        'document Element client hieght: ',
        document.documentElement.clientHeight
    );

    console.log(
        'document Element scroll hieght: ',
        document.documentElement.scrollHeight
    );

    console.log(
        'document Element offset height: ',
        document.documentElement.offsetHeight
    );

    console.log(
        'document element scrolltop: ',
        document.documentElement.scrollTop
    );

    console.log('window page Y Offset: ', window.pageYOffset);

    console.log(
        'window document body offsetheight: ',
        window.document.body.offsetHeight
    );

    return (
        <ModalContainer className={modalState} vh={vh}>
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
