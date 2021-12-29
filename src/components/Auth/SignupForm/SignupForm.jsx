import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../config/firebase.config';
import InlineLogo from '../../Shared/InlineLogo/InlineLogo';
import SocialButton from '../../Shared/SocialButton/SocialButton';
import {
	EmailForm,
	TextInput,
	EmailText,
	Header,
	PasswordInput,
	SignUpButton,
	SignUpFormStyles,
	SocialLogin,
} from './SignUpForm.styles';
import google from '../../../assets/img/logos/google-logo.png';
import facebook from '../../../assets/img/logos/facebook-logo.png';
import { BsEye } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

function SignInForm() {
	const [showPassword, setShowpassword] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		name: '',
	});

	const navigate = useNavigate();

	const { email, password, name } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		// Register a new user
		try {
			const auth = getAuth();
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredential.user;
			updateProfile(auth.currentUser, { displayName: name });

			// Add user to firestore
			const formDataCopy = { ...formData };
			delete formDataCopy.password;
			formDataCopy.timestamp = serverTimestamp();

			await setDoc(doc(db, 'users', user.uid), formDataCopy);

			// Redirect to homepage
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SignUpFormStyles>
			{/* Header */}
			<Header>
				<InlineLogo />
				<h3>Sign in to save properties and much more </h3>
				<p>
					Already Registered?{' '}
					<Link to='/sign-in'>
						<span>Sign in</span>
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
				<p>- or sign up with your email - </p>
			</EmailText>

			{/* Email Form */}

			<EmailForm onSubmit={onSubmit}>
				<TextInput>
					<input
						type='text'
						placeholder='Name'
						id='name'
						value={name}
						onChange={onChange}
						required
					/>
				</TextInput>
				<TextInput>
					<input
						type='email'
						placeholder='Email'
						id='email'
						value={email}
						onChange={onChange}
						required
					/>
				</TextInput>

				<PasswordInput>
					<input
						type={showPassword ? 'text' : 'password'}
						placeholder='Create Password'
						id='password'
						value={password}
						onChange={onChange}
						required
					/>

					{!showPassword ? (
						<BsEye onClick={() => setShowpassword((prevState) => !prevState)} />
					) : (
						<AiOutlineEyeInvisible
							onClick={() => setShowpassword((prevState) => !prevState)}
						/>
					)}
				</PasswordInput>

				<SignUpButton>Sign up</SignUpButton>
			</EmailForm>
		</SignUpFormStyles>
	);
}

export default SignInForm;
