import styled from 'styled-components';

export const SocketContainer = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${({ theme }) => theme.colors.darkGrey};
`;
export const SocialContainer = styled.div`
	display: flex;
	width: 200px;
	justify-content: space-between;

	svg {
		font-size: 1rem;
		cursor: pointer;

		&:hover {
			color: ${({ theme }) => theme.colors.secondary};
		}
	}
`;

export const CopyrightContainer = styled.div`
	font-size: 0.6rem;
`;

export const NoticeContainer = styled.div`
	font-size: 0.6rem;
	padding: 0 10px;
`;
