import React from 'react';
import { Layout, Flex, Space } from 'antd';
import HeaderMenu from '../Common/HeaderMenu';
import Model from '../Common/Model';
import Slider from '../Common/Slider';
import {
	layoutStyle,
	headerLogoStyle,
	headerMenuStyle,
	footerStyle,
} from '../utils/PageCss';
import Products from '../services/product/Products';
import { FooterLayout } from '../Common/FooterLayout';
import { HEADER } from '../Common/constant';
const { Header, Footer, Content } = Layout;

const Product: React.FC = () => {
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
						<Space
							direction="horizontal"
							size="middle"
							style={{ display: 'flex' }}
						>
							<Products />
						</Space>
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

export default Product;
