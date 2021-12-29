import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
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
import { BsEye } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

function SignInForm() {
	const [showPassword, setShowpassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const auth = getAuth();
			const userCredentials = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			if (userCredentials.user) {
				navigate('/profile');
			}
		} catch (error) {
			toast.error('Invalid login details');
		}
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

			<EmailForm onSubmit={onSubmit}>
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
					<Link to='/forgot	-password'>
						<span>Forgotten Password</span>
					</Link>
				</p>

				<SignInButton>Sign in</SignInButton>
			</EmailForm>
		</SignInFormStyles>
	);
}

export default SignInForm;
