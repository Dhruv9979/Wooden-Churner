import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { ReactComponent as CloseIcon } from '../../assets/close.svg';

import {
    googleSignInStart,
    emailSignInStart,
    resetPasswordStart,
} from '../../redux/user/user.actions';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer,
    ForgotPasswordContainer,
    ModalContainer,
    ModalInner,
    CloseContainer,
    ModalHeader,
    ModalText,
    Text,
} from './sign-in.styles';

const SignIn = ({
    emailSignInStart,
    googleSignInStart,
    resetPasswordStart,
}) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });

    const [emailId, setEmailId] = useState('');

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    const submitResetPassword = async (event) => {
        event.preventDefault();

        resetPasswordStart(emailId);
        toggleModalState();
    };

    const changeResetPassword = (event) => {
        const { value } = event.target;

        setEmailId(value);
        console.log(value);
    };

    const [modalState, setmodalState] = useState(false);

    const toggleModalState = () => {
        setmodalState(!modalState);
    };

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={email}
                    label="Email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                <ButtonsBarContainer>
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign in with Google
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
            <ForgotPasswordContainer to="#" onClick={toggleModalState}>
                Forgot password?
            </ForgotPasswordContainer>
            <ModalContainer className={modalState}>
                <ModalInner>
                    <ModalText>
                        <ModalHeader>Forgot your password?</ModalHeader>
                        <Text>
                            Don't worry! Just fill in your email and we'll send
                            you a link to reset your password.
                        </Text>
                        <form onSubmit={submitResetPassword}>
                            <FormInput
                                type="emailId"
                                name="emailId"
                                value={emailId}
                                handleChange={changeResetPassword}
                                label="Email Id"
                                required
                            />

                            <CustomButton type="submit">
                                Reset Password
                            </CustomButton>
                        </form>
                    </ModalText>
                    <CloseContainer to="#" onClick={toggleModalState}>
                        <CloseIcon />
                    </CloseContainer>
                </ModalInner>
            </ModalContainer>
        </SignInContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
    resetPasswordStart: (emailId) => dispatch(resetPasswordStart({emailId})),
});

export default connect(null, mapDispatchToProps)(SignIn);
