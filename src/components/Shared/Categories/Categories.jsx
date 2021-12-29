import Category from '../Category/Category';
import { CategoriesContainer, CategoriesStyled } from './Categories.styled';

function Categories({ categories }) {
	return (
		<CategoriesContainer>
			<h3>Categories</h3>
			<CategoriesStyled>
				{categories.map((category, index) => (
					<Category category={category} key={index} />
				))}
			</CategoriesStyled>
		</CategoriesContainer>
	);
}

export default Categories;
