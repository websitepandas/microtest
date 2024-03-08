import React from 'react';
import { FOOTER } from './constant';
import { Col, Row } from 'antd';
export const FooterLayout = () => {
	return (
		<Row>
			<Col span={12}>
				<p>{FOOTER.LEFT_TEXT}</p>
			</Col>
			<Col span={12}>
				<p style={{ textAlign: 'right' }}>{FOOTER.RIGHT_TEXT}</p>
			</Col>
		</Row>
	);
};
