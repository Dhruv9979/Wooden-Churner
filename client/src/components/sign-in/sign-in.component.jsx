import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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
} from './sign-in.styles';

import Modal from '../modal/modal.component';

const SignIn = ({
    emailSignInStart,
    googleSignInStart,
    resetPasswordStart,
}) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    const [emailId, setEmailId] = useState('');

    const submitResetPassword = async (event) => {
        event.preventDefault();

        resetPasswordStart(emailId);
        toggleResetPasswordModalState();
        toggleLinkSentModalState();
    };

    const changeResetPassword = (event) => {
        const { value } = event.target;

        setEmailId(value);
    };

    const [resetPasswordModalState, setResetPasswordModalState] = useState(
        false
    );

    const toggleResetPasswordModalState = () => {
        setResetPasswordModalState(!resetPasswordModalState);
    };

    const [linkSentModalState, setLinkSentModalState] = useState(false);

    const toggleLinkSentModalState = () => {
        setLinkSentModalState(!linkSentModalState);
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
            <ForgotPasswordContainer
                to="#"
                onClick={toggleResetPasswordModalState}
            >
                Forgot password?
            </ForgotPasswordContainer>
            <Modal
                modalState={resetPasswordModalState}
                toggleModalState={toggleResetPasswordModalState}
                form={true}
                header="Forgot your password?"
                text="Don't worry! Just fill in your email and we'll send
                            you a link to reset your password."
                buttonText="Reset Password"
                onSubmit={submitResetPassword}
                onChange={changeResetPassword}
                emailId={emailId}
            />
            <Modal
                modalState={linkSentModalState}
                toggleModalState={toggleLinkSentModalState}
                form={false}
                header="Link to reset your password has been sent to the specified email."
                buttonText="OK"
            />
        </SignInContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
    resetPasswordStart: (emailId) => dispatch(resetPasswordStart({ emailId })),
});

export default connect(null, mapDispatchToProps)(SignIn);
