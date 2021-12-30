import styled from 'styled-components';

export const CategoryStyled = styled.div`
	cursor: pointer;
	transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);

	img {
		min-height: 115px;
		//height: 15vw;
		width: 100%;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		object-fit: cover;
		margin: 0 auto;
	}

	p {
		background: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.white};
		padding: 10px;
		margin-top: -43px;
		opacity: 0.8;
		font-size: 0.9rem;
	}

	&:hover {
		transform: scale(1.02);
		box-shadow: 0px 0px 0.75rem rgba(109, 109, 109, 0.08),
			0px 0px 1px rgba(109, 109, 109, 0.32),
			0px 0.5rem 1rem -0.5rem rgba(24, 26, 44, 0.6);
		p {
			opacity: 0.99;
		}
	}
`;
