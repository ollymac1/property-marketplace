import styled from 'styled-components';

export const SocialButtonStyled = styled.button`
	width: 100%;
	padding: 5px 0;
	letter-spacing: 0.5px;
	background: none;
	border-radius: 5px;
	border: 0.5px solid ${({ theme }) => theme.colors.secondary};
	transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;

	&:hover {
		transform: scale(1.03);
		box-shadow: 0px 0px 0.75rem rgba(109, 109, 109, 0.08),
			0px 0px 1px rgba(109, 109, 109, 0.32),
			0px 0.5rem 1rem -0.5rem rgba(24, 26, 44, 0.6);
	}

	img {
		width: 30px;
	}

	p {
		font-weight: 500;
		font-size: 0.9rem;
	}
`;
