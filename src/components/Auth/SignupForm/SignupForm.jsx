import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InlineLogo from '../../Shared/InlineLogo/InlineLogo';
import SocialButton from '../../Shared/SocialButton/SocialButton';
import {
	EmailForm,
	EmailText,
	Header,
	SignupFormStyles,
	SocialLogin,
} from './SignupForm.style';
import google from '../../../assets/img/logos/google-logo.png';
import facebook from '../../../assets/img/logos/facebook-logo.png';
import { BsEye } from 'react-icons/bs';

function SignupForm() {
	const [showPassword, setShowpassword] = useState(false);
	const [formData, setFormDate] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const navigate = useNavigate();

	const onChange = () => {};

	return (
		<SignUpFormStyles>
			{/* Header */}
			<Header>
				<InlineLogo />
				<h3>Sign in to save properties and much more </h3>
				<p>
					No account? <span>Register</span>
				</p>
			</Header>

			{/* Social Login  */}
			<SocialLogin>
				<SocialButton text='Google' icon={google} />
				<SocialButton text='Facebook' icon={facebook} />
			</SocialLogin>

			{/* Email text */}
			<EmailText>
				<p>- or sign in with your email - </p>
			</EmailText>

			{/* Email Form */}

			<EmailForm>
				<input
					type='email'
					placeholder='Email'
					id='email'
					value={email}
					onChange={onChange}
				/>
				<div>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Password'
						id='password'
						value={password}
						onChange={onChange}
					/>
					<BsEye onClick={(prevState) => setShowpassword(!prevState)} />
				</div>
			</EmailForm>
		</SignUpFormStyles>
	);
}

export default SignupForm;
