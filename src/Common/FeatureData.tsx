import React, { useEffect, useState } from 'react';
import { Card, Space, Typography } from 'antd';
const { Title } = Typography;

const FeatureData = () => {
	const [featureData, setFeatureData] = useState<any[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('./FeatureData.json');
				console.log(response);
				const data = await response.json();
				console.log(data);
				setFeatureData(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);
	return (
		<Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
			{featureData.map((item) => (
				<>
					<Card key={'items' + item?.id}>
						<Title level={1}>{item?.title}</Title>
						<p>{item?.description}</p>
					</Card>
				</>
			))}
		</Space>
	);
};

export default FeatureData;
