// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		productLength: 0,
	},
	reducers: {
		setProductLength: (state, action) => {
			state.productLength = action.payload;
		},
	},
});

export const { setProductLength } = productSlice.actions;
export const selectProductLength = (state) => state.product.productLength;
export default productSlice.reducer;
