import React from 'react';
import { Layout, Flex, Typography, Row, Col } from 'antd';
import HeaderMenu from '../Common/HeaderMenu';
import Model from '../Common/Model';
import Slider from '../Common/Slider';
import {
	layoutStyle,
	headerLogoStyle,
	headerMenuStyle,
	contentStyle,
	contentBodySiderStyle,
	footerStyle,
} from '../utils/PageCss';
import FeatureData from '../Common/FeatureData';
import { BODY, HEADER } from '../Common/constant';
import { FooterLayout } from '../Common/FooterLayout';
const { Header, Footer, Content } = Layout;

const { Title } = Typography;

const Company: React.FC = () => {
	return (
		<Flex>
			<Layout style={layoutStyle}>
				<Header style={headerLogoStyle}>{HEADER.LOGO_TEXT}</Header>
				<Header style={headerMenuStyle}>
					<Flex>
						<div style={{ width: '95%' }}>
							<HeaderMenu />
						</div>
						<div>
							<Model />
						</div>
					</Flex>
				</Header>
				<Content style={{ padding: '0 48px', margin: '20px 0' }}>
					<Slider />
				</Content>
				<Content style={{ padding: '0 48px', margin: '20px 0' }}>
					<Layout>
						<FeatureData />
					</Layout>
				</Content>
				<Content style={{ padding: '0 48px', margin: '20px 0' }}>
					<Layout>
						<Row>
							<Col span={16} style={contentStyle}>
								<Title level={1}>{BODY.HEADING}</Title>
								<p>{BODY.HEADING_DESCRIPTION}</p>
								<Title level={2}>{BODY.SUB_HEADING}</Title>
								<p>{BODY.SUB_HEADING_DESCRIPTION}</p>
							</Col>
							<Col span={8} style={contentBodySiderStyle}>
								<Title level={1}> {BODY.NAVIGATIONS_HEADING_TEXT}</Title>
								<HeaderMenu mode="vertical" />
							</Col>
						</Row>
					</Layout>
				</Content>
				<Footer style={footerStyle}>
					<Layout style={{ background: '#fff', padding: 10 }}>
						<FooterLayout />
					</Layout>
				</Footer>
			</Layout>
		</Flex>
	);
};

export default Company;
