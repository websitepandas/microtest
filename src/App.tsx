import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import './App.css';
import ContactUs from './pages/ContactUs';
import Product from './pages/Product';
import Company from './pages/Company';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product" element={<Product />} />
				<Route path="/company" element={<Company />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</Router>
	);
}

export default App;
