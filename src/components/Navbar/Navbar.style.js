import styled from 'styled-components';

export const Footer = styled.footer``;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.colors.secondary};
	font-weight: 300;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 75px;
	border-top: 0.5px solid ${({ theme }) => theme.colors.secondary30};
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
	transition: color 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);
	color: ${(props) => props.theme.colors[props.color]};
	p {
		font-size: 0.5rem;
		text-transform: uppercase;
		margin-top: 10px;
		letter-spacing: 1px;
	}

	svg {
		transform: scale(1.5);
	}

	&:hover {
		transform: scale(1.05);
		color: ${({ theme }) => theme.colors.primary};
	}

	&:active {
		color: ${({ theme }) => theme.colors.primary30};
	}
`;
