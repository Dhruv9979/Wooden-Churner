import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
	ContactContainer,
	Title,
	ContactForm,
	AddressInfo,
	TextArea,
	TextAreaInput,
	TextAreaLabel,
} from "./contact.styles";

const ContactPage = () => {
	const [contactInfo, setContactInfo] = useState({ name: "", email: "", message: "" });
	const { name, email, message } = contactInfo;

	const handleChange = (event) => {
		const { name, value } = event.target;

		setContactInfo({ [name]: value });
	};
	return (
		<ContactContainer>
			<ContactForm>
				<Title>Contact Us</Title>
				<span>
					Please get in touch and our expert support team will answer all your questions.
				</span>
				<FormInput
					type="text"
					name="name"
					value={name}
					onChange={handleChange}
					label="Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<TextArea>
					<TextAreaLabel className={message.length ? "shrink" : ""}>
						Message
					</TextAreaLabel>
					<TextAreaInput
						type="text"
						name="message"
						value={message}
						onChange={handleChange}
						required
						rows={5}
					/>
				</TextArea>
				<CustomButton type="submit">SEND MESSAGE</CustomButton>
			</ContactForm>
			<AddressInfo>
				<Title>Address:</Title>
				<span>
					Shree Ramkrishna Oil Mills <br />
					Mayur Colony, Near P-JOG High School, Kothrud Area, <br />
					Pune 411038.
				</span>
				<br />
				<Title>Telephone:</Title>
				<span>+91 8007000739</span>
				<br />
				<Title>Email:</Title>
				<span>woodenchurner@gmail.com</span>
			</AddressInfo>
		</ContactContainer>
	);
};

export default ContactPage;
