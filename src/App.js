import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './shared/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './shared/theme';
import Footer from './components/Navigation/Footer/Footer';
import Header from './components//Navigation/Header/Header';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import Wishlist from './pages/Wishlist';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route path='/' element={<Explore />} />
					<Route path='/offers' element={<Offers />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/wishlist' element={<Wishlist />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}

export default App;
