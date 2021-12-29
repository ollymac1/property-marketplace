import styled from 'styled-components';

export const NavStyles = styled.nav`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
`;

export const Links = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;

	@media only screen and (min-width: 1100px) {
		justify-content: flex-end;
	}
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
		margin-top: 5px;
	}

	svg {
		font-size: 1.2rem;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
	}

	&:active {
		color: ${({ theme }) => theme.colors.secondary};
	}

	@media only screen and (min-width: 1100px) {
		//flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 20px;

		svg {
			font-size: 1rem;
		}

		p {
			font-size: 0.6rem;

			text-transform: capitalize;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}

		&:active {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
