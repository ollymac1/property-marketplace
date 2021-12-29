import { Link } from 'react-router-dom';
import { CategoryStyled } from './Category.styled';

function Category({ category }) {
	return (
		<Link to={category.link}>
			<CategoryStyled>
				<img src={category.imageURL} alt={category.title} />
				<p>{category.title}</p>
			</CategoryStyled>
		</Link>
	);
}

export default Category;
