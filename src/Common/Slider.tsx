import React from 'react';
import { Layout, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import { SLIDER } from './constant';

const { Title } = Typography;

const Slider = () => {
	const location = useLocation();
	const { pathname } = location;
	const pathArray = pathname.split('/');
	const pageName = pathArray[pathArray.length - 1];

	return (
		<Layout
			style={{
				textAlign: 'center',
				padding: '12% 0',
				background: '#99cc00',
			}}
		>
			<Title level={2}>
				{pathname === '/' ? 'Home' : pageName} {SLIDER.SLIDER_HEADING_TEXT}
			</Title>
		</Layout>
	);
};

export default Slider;
