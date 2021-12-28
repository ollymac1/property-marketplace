import styled from 'styled-components';

export const MenuStyles = styled.ul`
	display: flex;
	color: ${({ theme }) => theme.colors.secondary};
	list-style: none;
	padding: 10px 20px;
	font-size: 0.7rem;

	li {
		margin-right: 20px;

		&:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	}
`;
