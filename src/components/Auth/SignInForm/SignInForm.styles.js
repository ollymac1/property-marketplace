import styled from 'styled-components';

export const SignInFormStyles = styled.div`
	max-width: 25rem;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 4rem;

	p {
		span {
			border-bottom: 0.5px solid ${({ theme }) => theme.colors.secondary};
			padding-bottom: 2px;
			cursor: pointer;
			transition: 2s all cubic-bezier(0.075, 0.82, 0.165, 1);
			font-weight: 500;

			&:hover {
				border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
			}
		}
	}
`;

export const Header = styled.div`
	h3 {
		line-height: 2rem;
		margin-bottom: 20px;
		font-size: 1.7rem;
	}
`;

export const SocialLogin = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 40px;
`;

export const EmailText = styled.div`
	margin: 30px 0;

	p {
		width: 100%;
		text-align: center;
		font-size: 0.7rem;
		font-weight: 600;
	}
`;

export const EmailForm = styled.form`
	input {
		border: none;
		padding: 10px;

		&:focus {
			outline: none;
		}
	}
`;

export const EmailInput = styled.div`
	border: 0.5px solid ${({ theme }) => theme.colors.grey};
	border-radius: 5px;
	margin-bottom: 10px;
	padding: 2px;
`;

export const PasswordInput = styled.div`
	display: grid;
	grid-template-columns: 90% auto;
	border: 0.5px solid ${({ theme }) => theme.colors.grey};
	border-radius: 5px;
	align-items: center;
	padding: 2px;
	margin-bottom: 20px;
`;

export const SignInButton = styled.button`
	margin-top: 30px;
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	border: none;
	background: ${({ theme }) => theme.colors.primary};
	cursor: pointer;
	transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);

	&:hover {
		transform: scale(1.05);
		box-shadow: 0px 0px 0.75rem rgba(178, 160, 6, 0.08),
			0px 0px 1px rgba(178, 160, 6, 0.32),
			0px 0.5rem 1rem -0.5rem rgba(178, 160, 6, 0.6);
	}
`;
