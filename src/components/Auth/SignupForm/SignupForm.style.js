import styled from 'styled-components';

export const SignupFormStyles = styled.div`
	max-width: 25rem;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 4rem;
`;

export const Header = styled.div`
	h3 {
		line-height: 2rem;
		margin-bottom: 20px;
		font-size: 1.7rem;
	}

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

export const SocialLogin = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 40px;
`;

export const EmailText = styled.div`
	margin-top: 40px;

	p {
		width: 100%;
		text-align: center;
		font-size: 0.7rem;
		font-weight: 600;
	}
`;

export const EmailForm = styled.form``;
