import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const fakeStoreCategoryAPI = createApi({
	reducerPath: 'fakeStoreCategory', // Unique name for the reducer path
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://fakestoreapi.com/products/categories',
	}),
	tagTypes: [],
	endpoints: (builder) => ({
		getCategoryByName: builder.query<string[], void>({
			query: () => '',
		}),
	}),
});
// Export hooks for usage in functional components
export const { useGetCategoryByNameQuery } = fakeStoreCategoryAPI;
