import styled from 'styled-components';

export const NavStyles = styled.nav`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;

	@media only screen and (min-width: 1100px) {
		width: 400px;
	}
`;

export const Links = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
`;

export const Link = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	transition: color 1s cubic-bezier(0.215, 0.61, 0.355, 1);
	color: ${(props) => props.theme.colors[props.color]};

	p {
		font-size: 0.5rem;
		text-transform: uppercase;
		margin-top: 10px;
		letter-spacing: 1px;
	}

	svg {
		transform: scale(1.4);
	}

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
	}

	&:active {
		color: ${({ theme }) => theme.colors.secondary};
	}

	@media only screen and (min-width: 1100px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 20px;

		svg {
			display: none;
		}

		p {
			font-size: 0.7rem;
			margin-top: 1px;
			margin-left: 2px;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}

		&:active {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
