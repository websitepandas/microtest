import { useGetProductByNameQuery } from '../product';
import { useGetCategoryByNameQuery } from '../categories';
import { Col, Row, Card } from 'antd';
import { setProductLength } from '../../store/productSlice';
import { useDispatch } from 'react-redux';
const { Meta } = Card;
const Products = () => {
	const dispatch = useDispatch();
	const {
		data: products,
		error: productsError,
		isLoading: productsLoading,
	} = useGetProductByNameQuery();
	const {
		data: categories,
		error: categoriesError,
		isLoading: categoriesLoading,
	} = useGetCategoryByNameQuery();

	// console.log(categories, 'categories');
	// console.log(products, 'products');
	if (productsLoading || categoriesLoading) {
		return <div>Loading...</div>;
	}

	// Handle errors
	if (productsError) {
		return <div>Error fetching products: {getErrorMessage(productsError)}</div>;
	}

	if (categoriesError) {
		return (
			<div>Error fetching categories: {getErrorMessage(categoriesError)}</div>
		);
	}
	// Check if categories is not undefined before using it
	if (!categories) {
		return <div>No categories available</div>;
	}
	console.log(products.length, 'heeee');
	dispatch(setProductLength(products.length));
	return (
		<>
			<Row gutter={40}>
				{products?.map(
					(item: {
						category: string;
						title: string;
						image: string | undefined;
						description: string;
						price: number;
						rating: {
							rate: number;
						};
					}) => {
						return (
							<Col className="gutter-row" span={4}>
								<Card
									title={item?.category}
									hoverable
									bordered={true}
									cover={
										<img height={200} alt={item?.title} src={item?.image} />
									}
								>
									<Meta
										title={item?.title}
										description={
											item.description.length > 50
												? `${item.description.substring(0, 60)}...`
												: item.description
										}
									/>
									<p>{item?.price}</p>
									<p>{item?.rating.rate}</p>
								</Card>
							</Col>
						);
					}
				)}
			</Row>
		</>
	);
};
// Helper function to extract error message
const getErrorMessage = (error: any) => {
	// Customize this function based on your error structure
	if (error.status) {
		return `Error: ${error.status} - ${error.data}`;
	} else {
		return 'An error occurred';
	}
};
export default Products;
