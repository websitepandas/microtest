import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';
const Model: React.FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setOpen(true)}>
				<FacebookOutlined />
			</Button>
			<Modal
				title="Modal 1000px width"
				centered
				open={open}
				onOk={() => setOpen(false)}
				onCancel={() => setOpen(false)}
				width={1000}
			>
				<p>some contents...</p>
				<p>some contents...</p>
				<p>some contents...</p>
			</Modal>
		</>
	);
};

export default Model;
