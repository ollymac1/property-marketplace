import styled from 'styled-components';

export const MainContainerStyled = styled.main`
	max-width: 1400px;
	min-height: calc(100vh - 130px);
	padding: 3rem 5px;
	margin: auto;

	@media only screen and (max-width: 1100px) {
		padding: 25px 5px 50px 5px;
	}
`;
