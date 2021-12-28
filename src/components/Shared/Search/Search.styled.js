import styled from 'styled-components';

export const InputGroup = styled.div`
	height: 35px;
	width: 650px;
	display: grid;
	grid-template-columns: 92% auto;
	border: 1px solid ${(props) => props.theme.colors[props.border]};
	border-radius: 5px;
	background: #2a2d48;

	input {
		border: none;
		background: none;
		padding: 5px;
		color: white;

		&:focus {
			outline: none;
		}
	}

	button {
		border: 0;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
		color: ${({ theme }) => theme.colors.secondary};
		background-color: ${({ theme }) => theme.colors.primary};
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
		width: 100%;
		height: 100%;

		svg {
			font-size: 1.2rem;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
			background-color: ${({ theme }) => theme.colors.secondary50};
		}
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 94px;
	left: 0;
	background: rgba(0, 0, 0);
	opacity: 0.6;
	height: 100vh;
	width: 100vw;
	display: ${(props) => props.display};
	transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
