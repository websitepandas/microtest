import React, { useState } from 'react';
import { Flex, Menu } from 'antd';
// import { useSelector } from 'react-redux';
// import { selectProductLength } from '../store/productSlice';
import { useGetProductByNameQuery } from '../services/product';
import Model from './Model';

interface MenuItem {
	label: React.ReactNode;
	key: string;
}

interface HeaderMenuProps {
	mode?: 'horizontal' | 'vertical';
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ mode = 'horizontal' }) => {
	const [current, setCurrent] = useState('');

	// const productLength = useSelector(selectProductLength);
	const { data: products } = useGetProductByNameQuery();
	const productCount = products?.length;
	const items: MenuItem[] = [
		{
			label: (
				<a href="/" rel="noopener noreferrer">
					Home
				</a>
			),
			key: 'Home',
		},
		{
			label: (
				<a href="/product" rel="noopener noreferrer">
					Products ({productCount})
				</a>
			),
			key: 'product',
		},
		{
			label: (
				<a href="/Company" rel="noopener noreferrer">
					Company
				</a>
			),
			key: 'alipay',
		},
		{
			label: (
				<a href="/contact-us" rel="noopener noreferrer">
					Contact
				</a>
			),
			key: 'alipay',
		},
	];

	const onClick = (item: { key: React.SetStateAction<string> }) => {
		setCurrent(item.key);
	};

	return (
		<>
			<Flex>
				<div style={{ border: '1px solid #000', width: '95%' }}>
					<Menu onClick={onClick} selectedKeys={[current]} mode={mode}>
						{items.map((item) => (
							<Menu.Item key={item.key}>{item.label}</Menu.Item>
						))}
					</Menu>
				</div>
				<div>
					<Model />
				</div>
			</Flex>
		</>
	);
};

export default HeaderMenu;
