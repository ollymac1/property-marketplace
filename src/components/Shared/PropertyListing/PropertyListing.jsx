import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import NumberFormat from 'react-number-format';
import {
	CTAFooter,
	DetailsContainer,
	ListingSummary,
	Price,
	RegularPrice,
	WeeklyPrice,
	StyledPropertyListing,
	SubTitle,
	Title,
	SummaryIcons,
	IconGroup,
	SummaryInformation,
	Header,
	Chips,
	Wishlist,
} from './PropertyListing.styles';
import Chip from '../Chip/Chip';
import { AiOutlineCar } from 'react-icons/ai';
import { MdBed, MdOutlineSquareFoot } from 'react-icons/md';
import { BiBath } from 'react-icons/bi';
import { BsHouseDoor } from 'react-icons/bs';

import AddToWishlist from '../AddToWishlist/AddToWishlist';

function PropertyListing({ listing, id, onDelete }) {
	//Calculated % discount if a discounted price exisits
	let discountPercentage = 0;
	if (listing.discountedPrice) {
		discountPercentage = Math.round(
			((listing.regularPrice - listing.discountedPrice) /
				listing.regularPrice) *
				100
		);
	}

	//Calculate Weekly Rental amount
	let weeklyPrice = null;

	if (listing.listingType == 'rent') {
		if (listing.discountedPrice) {
			weeklyPrice = Math.round((listing.discountedPrice * 12) / 52);
		} else {
			weeklyPrice = Math.round((listing.regularPrice * 12) / 52);
		}
	}

	return (
		<StyledPropertyListing>
			<Link to={`category/${listing.listingType}/${id}`}>
				<DetailsContainer>
					<img src={listing.imgUrls[0]} alt={listing.name} />
					<ListingSummary>
						<SummaryInformation>
							<Header>
								<Price>
									<RegularPrice>
										<NumberFormat
											value={listing.regularPrice}
											displayType={'text'}
											thousandSeparator={true}
											prefix={'£'}
										/>
										{listing.listingType == 'rent' && <span> pcm</span>}
									</RegularPrice>
									<WeeklyPrice>
										<NumberFormat
											value={weeklyPrice}
											displayType={'text'}
											thousandSeparator={true}
											prefix={'£'}
										/>
										{listing.listingType == 'rent' && <span> pw</span>}
									</WeeklyPrice>
								</Price>
								<Chips>
									{listing.listingType == 'rent' && (
										<Chip
											text={listing.furnished ? 'Furnishes' : 'unfurnished'}
										/>
									)}
									{listing.discountedPrice && (
										<Chip text={`Reduced by ${discountPercentage}%`} />
									)}
								</Chips>
							</Header>

							<Title>{listing.name}</Title>
							<SubTitle>{listing.address}</SubTitle>
						</SummaryInformation>
						<SummaryIcons>
							<IconGroup>
								<BsHouseDoor /> <p>{listing.propertyType}</p>
							</IconGroup>
							<IconGroup>
								<MdBed /> <p>{listing.bedrooms} bedrooms</p>
							</IconGroup>
							<IconGroup>
								<BiBath /> <p>{listing.bathrooms} bathrooms</p>
							</IconGroup>
							<IconGroup>
								<MdOutlineSquareFoot />{' '}
								<p>
									<NumberFormat
										value={listing.floorArea}
										displayType={'text'}
										thousandSeparator={true}
									/>{' '}
									sq ft
								</p>
							</IconGroup>
							{listing.parking && (
								<IconGroup>
									<AiOutlineCar /> <p>Parking</p>
								</IconGroup>
							)}
						</SummaryIcons>
					</ListingSummary>
				</DetailsContainer>
			</Link>
			<CTAFooter>
				<p>
					Listed on{' '}
					{dayjs(listing.timestamp.toDate()).format(' ddd DD MMM YYYY')}
				</p>
				<AddToWishlist id={id} />
			</CTAFooter>
		</StyledPropertyListing>
	);
}

export default PropertyListing;
