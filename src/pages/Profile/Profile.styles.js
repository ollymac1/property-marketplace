import styled from 'styled-components';

export const ProfileHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
`;

export const SignOutButton = styled.button`
	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.secondary};
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

export const CreateListingButton = styled.button`
	width: 100%;
	background: ${({ theme }) => theme.colors.secondary30};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 20px;
	margin-top: 40px;
	transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
	cursor: pointer;

	&:hover {
		transform: scale(1.01);
		box-shadow: 0px 0px 0.75rem rgba(109, 109, 109, 0.08),
			0px 0px 1px rgba(109, 109, 109, 0.32),
			0px 0.5rem 1rem -0.5rem rgba(24, 26, 44, 0.3);
	}

	&:active {
		background: ${({ theme }) => theme.colors.secondary};
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
`;

export const ProfileDetailsForm = styled.form`
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

export const ButtonGroup = styled.div`
	display: flex;
	gap: 5px;
	color: white;

	button {
		background: transparent;
		border: none;
		border-radius: 5px;
		background: ${({ theme }) => theme.colors.secondary30};
		cursor: pointer;
		padding: 5px 10px;
		color: ${({ theme }) => theme.colors.white};

		&:hover {
			background: ${({ theme }) => theme.colors.secondary};
		}
	}
`;
