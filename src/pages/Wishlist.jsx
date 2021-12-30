import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../config/firebase.config';
import { toast } from 'react-toastify';

import Spinner from '../components/Shared/Spinner/Spinner';
import MainContainer from '../components/Shared/MainContainer/MainContainer';
import PageHeader from '../components/Shared/PageHeader/PageHeader';
import PropertyListings from '../components/Shared/PropertyListings/PropertyListings';

function Wishlist() {
	const [listings, setListings] = useState(null);
	const [loading, setLoading] = useState(true);

	const auth = getAuth();
	const params = useParams();

	useEffect(() => {
		const getWishlist = async () => {
			const docRef = doc(db, 'users', auth.currentUser.uid);
			const docSnap = await getDoc(docRef);

			const data = [];

			if (docSnap.exists()) {
				docSnap.data().wishlist.forEach(async (item) => {
					const docRef = doc(db, 'listings', item);
					const docSnap = await getDoc(docRef);

					if (docSnap.exists()) {
						return data.push({
							id: docSnap.id,
							data: docSnap.data(),
						});
					} else {
						// doc.data() will be undefined in this case
						console.log('No such document!');
					}
				});

				setListings(data);
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
			setLoading(false);
		};

		getWishlist();
	}, []);

	return (
		<MainContainer>
			<PageHeader text={'Wishlist'} />
			{loading ? (
				<Spinner />
			) : listings && listings.length > 0 ? (
				<PropertyListings listings={listings} />
			) : (
				<p>You haven't added anything to your wishlist</p>
			)}
		</MainContainer>
	);
}

export default Wishlist;
