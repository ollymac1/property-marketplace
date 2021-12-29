import styled from 'styled-components';

export const CategoriesContainer = styled.div`
	margin-top: 20px;

	h3 {
		margin-bottom: 10px;
	}
`;

export const CategoriesStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	grid-gap: 1rem;
`;
