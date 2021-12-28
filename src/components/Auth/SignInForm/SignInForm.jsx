import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InlineLogo from '../../Shared/InlineLogo/InlineLogo';
import SocialButton from '../../Shared/SocialButton/SocialButton';
import {
	EmailForm,
	EmailInput,
	EmailText,
	Header,
	PasswordInput,
	SignInButton,
	SignInFormStyles,
	SocialLogin,
} from './SignInForm.styles';
import google from '../../../assets/img/logos/google-logo.png';
import facebook from '../../../assets/img/logos/facebook-logo.png';
import { BsEye, BsFolderPlus } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

function SignInForm() {
	const [showPassword, setShowpassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const navigate = useNavigate();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	return (
		<SignInFormStyles>
			{/* Header */}
			<Header>
				<InlineLogo />
				<h3>Sign in to save properties and much more </h3>
				<p>
					No account?{' '}
					<Link to='/sign-up'>
						<span>Register</span>
					</Link>
				</p>
			</Header>

			{/* Social OAuth Login  */}
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
				<EmailInput>
					<input
						type='email'
						placeholder='Email'
						id='email'
						value={email}
						onChange={onChange}
					/>
				</EmailInput>

				<PasswordInput>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Password'
						id='password'
						value={password}
						onChange={onChange}
					/>

					{!showPassword ? (
						<BsEye onClick={() => setShowpassword((prevState) => !prevState)} />
					) : (
						<AiOutlineEyeInvisible
							onClick={() => setShowpassword((prevState) => !prevState)}
						/>
					)}
				</PasswordInput>
				<p>
					<Link to='/sign-up'>
						<span>Forgotten Password</span>
					</Link>
				</p>

				<SignInButton>Sign in</SignInButton>
			</EmailForm>
		</SignInFormStyles>
	);
}

export default SignInForm;
