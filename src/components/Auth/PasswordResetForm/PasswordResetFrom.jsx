import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import { Header, ResetFormStyles } from './PasswordResetForm.styles';
import InlineLogo from '../../Shared/InlineLogo/InlineLogo';
import {
	EmailForm,
	EmailInput,
	SignInButton,
} from '../SignInForm/SignInForm.styles';

function PasswordResetFrom() {
	const [email, setEmail] = useState();

	const onChange = (e) => {
		setEmail(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		try {
			const auth = getAuth();
			await sendPasswordResetEmail(auth, email);
			toast.success('email sent!');
		} catch (error) {
			toast.error('Could not reset email');
		}
	};

	return (
		<ResetFormStyles>
			<Header>
				<InlineLogo />
				<h3>Password Reset</h3>
				<p>
					Just looking to{' '}
					<Link to='/sign-in'>
						<span>Sign in?</span>
					</Link>
				</p>
			</Header>
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

				<SignInButton>Reset password</SignInButton>
			</EmailForm>
		</ResetFormStyles>
	);
}

export default PasswordResetFrom;
