import styled from 'styled-components';

export const ProfileHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
`;

export const SignOutButton = styled.button`
	background: ${({ theme }) => theme.colors.primary};
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		transform: scale(1.03);
		box-shadow: 0px 0px 0.75rem rgba(109, 109, 109, 0.08),
			0px 0px 1px rgba(109, 109, 109, 0.32),
			0px 0.5rem 1rem -0.5rem rgba(24, 26, 44, 0.3);
	}

	&:active {
		transform: scale(1);
		box-shadow: none;
	}
`;

export const ProfileDetails = styled.div`
	width: 98%;
	max-width: 600px;
`;

export const ProfileDetailsHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;

	button {
		background: none;
		border: none;
		font-weight: 500;
		color: ${({ theme }) => theme.colors.primary30};
		padding-bottom: 2px;
		cursor: pointer;

		&:hover {
			border-bottom: 1px solid ${({ theme }) => theme.colors.primary30};
		}
	}
`;

export const ProfileDetailsForm = styled.form`
	color: red;
	input {
		border: 0.5px solid ${({ theme }) => theme.colors.grey};
		border-radius: 5px;
		margin-bottom: 10px;
		padding: 10px;
		width: 100%;

		&:focus {
			outline: none;
		}
	}
`;
