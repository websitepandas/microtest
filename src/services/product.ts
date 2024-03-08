import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakeStoreProductsAPI = createApi({
	reducerPath: 'fakeStoreProducts',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products/' }),
	tagTypes: [],
	endpoints: (builder) => ({
		getProductByName: builder.query<any, void>({
			query: () => '',
		}),
	}),
});

// Export hooks for usage in functional components
export const { useGetProductByNameQuery } = fakeStoreProductsAPI;
