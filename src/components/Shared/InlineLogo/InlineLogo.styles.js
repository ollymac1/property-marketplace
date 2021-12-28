import styled from 'styled-components';

export const InlineLogoStyles = styled.div`
	display: flex;
	align-items: center;
	font-family: ${({ theme }) => theme.fonts.logo};
	letter-spacing: 2px;
	margin-bottom: 20px;

	img {
		width: 30px;
		margin-top: -4px;
		margin-right: 5px;
	}
`;
