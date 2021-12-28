import styled from 'styled-components';

export const HeaderStyles = styled.header`
	height: 60px;
	background: ${({ theme }) => theme.colors.secondary};
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media only screen and (max-width: 1100px) {
		justify-content: center;
		height: 50px;

		nav {
			display: none;
		}
	}
`;

export const SearchContainer = styled.div`
	@media only screen and (max-width: 1100px) {
		display: none;
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	height: 100%;

	&:hover {
		opacity: 0.8;
	}

	h3 {
		color: ${({ theme }) => theme.colors.primary};
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 1rem;
		margin-left: 5px;
		font-weight: 300;
	}

	svg {
		width: 20px;
	}
`;

export const SecondaryMenuStyles = styled.div`
	background: ${({ theme }) => theme.colors.white};
	box-shadow: 2px 3px 10px -1px #d2d2d2;
`;
