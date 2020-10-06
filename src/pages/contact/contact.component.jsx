import React from "react";

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

class ContactPage extends React.Component {
	constructor() {
		super();

		this.state = {
			name: "",
			email: "",
			message: "",
		};
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { name, email, message } = this.state;
		console.log(message.length);
		return (
			<ContactContainer>
				<ContactForm>
					<Title>Contact Us</Title>
					<span>
						Please get in touch and our expert support team will answer all your
						questions.
					</span>
					<FormInput
						type="text"
						name="name"
						value={name}
						onChange={this.handleChange}
						label="Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
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
							onChange={this.handleChange}
							required
							rows={5}
						/>
					</TextArea>
					<CustomButton type="submit">SEND MESSAGE</CustomButton>
				</ContactForm>
				<AddressInfo>
					<Title>Address:</Title>
					<span>
						Shree Ramkrishna Oil Mills <br /> Mayur Colony, Near P-JOG High School,
						Kothrud Area, <br />
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
	}
}

export default ContactPage;
