import styled from 'styled-components';

export const ChipStyled = styled.div`
	background: ${({ theme }) => theme.colors.primary};
	height: 100%;
	padding: 7px;
	font-size: 0.6rem;
	font-weight: bold;
	border-radius: 5px;
	text-transform: uppercase;
`;
