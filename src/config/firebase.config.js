// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestre';

const firebaseConfig = {
	apiKey: 'AIzaSyCoMuGFY8nPtxoR_15PcJlMt3qwnQxlHm0',
	authDomain: 'propertymarketplace-36e19.firebaseapp.com',
	projectId: 'propertymarketplace-36e19',
	storageBucket: 'propertymarketplace-36e19.appspot.com',
	messagingSenderId: '956601047488',
	appId: '1:956601047488:web:2193c8bc793f723cced025',
	measurementId: 'G-5ECQC8LY2J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
