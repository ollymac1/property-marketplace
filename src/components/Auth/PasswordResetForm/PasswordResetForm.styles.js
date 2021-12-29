import styled from 'styled-components';

export const ResetFormStyles = styled.div`
	max-width: 25rem;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 4rem;

	p {
		span {
			border-bottom: 0.5px solid ${({ theme }) => theme.colors.secondary};
			padding-bottom: 2px;
			cursor: pointer;
			transition: 2s all cubic-bezier(0.075, 0.82, 0.165, 1);
			font-weight: 500;

			&:hover {
				border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
			}
		}
	}
`;
export const Header = styled.div`
	margin-bottom: 30px;
`;
