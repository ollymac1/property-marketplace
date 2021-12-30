import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	collection,
	getDocs,
	query,
	where,
	orderBy,
	limit,
	startAfter,
} from 'firebase/firestore';
import { db } from '../config/firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Shared/Spinner/Spinner';
import MainContainer from '../components/Shared/MainContainer/MainContainer';
import PageHeader from '../components/Shared/PageHeader/PageHeader';
import PropertyListings from '../components/Shared/PropertyListings/PropertyListings';

function Offers() {
	const [listings, setListings] = useState(null);
	const [loading, setLoading] = useState(true);

	const params = useParams();

	useEffect(() => {
		const getListings = async () => {
			try {
				//Set query reference
				const listingRef = collection(db, 'listings');

				//Create query
				const q = query(
					listingRef,
					where('offer', '==', true),
					orderBy('timestamp', 'desc'),
					limit(10)
				);

				//Execute query
				const querySnap = await getDocs(q);

				const listings = [];

				querySnap.forEach((doc) => {
					return listings.push({
						id: doc.id,
						data: doc.data(),
					});
				});

				setListings(listings);
				setLoading(false);
			} catch (error) {
				toast.error('Could not fetch listing');
			}
		};

		getListings();
	}, []);

	return (
		<MainContainer>
			<PageHeader text={'Property on offer'} />
			{loading ? (
				<Spinner />
			) : listings && listings.length > 0 ? (
				<PropertyListings listings={listings} />
			) : (
				<p>There is currently no proprety listed for offer</p>
			)}
		</MainContainer>
	);
}

export default Offers;
