import styled from 'styled-components';

export const FooterStyles = styled.footer`
	border-top: 0.5px solid ${({ theme }) => theme.colors.secondary30};
	display: flex;
	align-items: center;
	font-weight: 300;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 75px;
	background: white;

	@media only screen and (min-width: 1100px) {
		display: none;
	}
`;

export const SocketStyles = styled.footer`
	/* position: fixed;
	bottom: 0; */
	background: ${({ theme }) => theme.colors.lightGrey};
	width: 100%;
	padding: 10px 20px;
	@media only screen and (max-width: 1100px) {
		display: none;
	}
`;
