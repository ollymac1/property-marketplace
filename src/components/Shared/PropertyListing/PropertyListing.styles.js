import styled from 'styled-components';

export const StyledPropertyListing = styled.div`
	border: 1px solid black;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	display: flex;
	flex-direction: column;
	transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
	opacity: 0.9;
	margin-bottom: 20px;

	&:hover {
		transform: scale(1.01);
		box-shadow: 0px 0px 0.75rem rgba(109, 109, 109, 0.08),
			0px 0px 1px rgba(109, 109, 109, 0.32),
			0px 0.5rem 1rem -0.5rem rgba(24, 26, 44, 0.6);
		opacity: 1;
	}
`;
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Price = styled.div`
	font-weight: bold;
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
`;

export const RegularPrice = styled.div`
	margin-bottom: 3px;
`;

export const WeeklyPrice = styled.div`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.secondary50};
`;

export const Chips = styled.div`
	display: flex;
	gap: 5px;
	height: 100%;
`;

export const Title = styled.div`
	font-size: 1.5rem;
	margin-top: 10px;
`;
export const SubTitle = styled.div`
	font-size: 0.8rem;
`;

export const SummaryInformation = styled.div`
	padding: 15px;
	min-height: 170px;
`;

export const SummaryIcons = styled.div`
	background: ${({ theme }) => theme.colors.lightGrey};
	display: flex;
	gap: 15px;
	justify-content: flex-start;
	align-items: center;
	padding: 5px;
`;

export const IconGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3px;
	p {
		font-size: 0.6rem;
	}
`;

export const DetailsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	img {
		min-height: 115px;
		max-height: 250px;
		border-top-left-radius: 5px;
		object-fit: cover;
		margin: 0 auto;
		width: 100%;
		height: 100%;
	}

	@media only screen and (max-width: 1100px) {
		display: flex;
		flex-direction: column;
	}
`;

export const ListingSummary = styled.div`
	display: grid;
	grid-template-rows: auto 35px;
`;

export const CTAFooter = styled.div`
	background: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.white};
	margin-top: -5px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	p {
		font-size: 0.6rem;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
