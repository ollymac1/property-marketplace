import MainContainer from '../components/Shared/MainContainer/MainContainer';
import PageHeader from '../components/Shared/PageHeader/PageHeader';
import Categories from '../components/Shared/Categories/Categories';
import { categoriesList } from '../components/Shared/categories';

function Explore() {
	return (
		<MainContainer>
			<PageHeader text='Discover property' />
			<Categories categories={categoriesList} />
		</MainContainer>
	);
}

export default Explore;
