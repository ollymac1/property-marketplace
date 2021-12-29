import PropertyListing from '../PropertyListing/PropertyListing';
import { PropertyListingsContainer } from './PropertyListings.styles';

function PropertyListings({ listings }) {
	return (
		<PropertyListingsContainer>
			<h3>Search Results</h3>
			{listings.map((listing, index) => (
				<PropertyListing key={index} listing={listing.data} id={listing.id} />
			))}
		</PropertyListingsContainer>
	);
}

export default PropertyListings;
