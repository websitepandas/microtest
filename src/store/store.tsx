import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { fakeStoreProductsAPI } from '../services/product';
import { fakeStoreCategoryAPI } from '../services/categories';
import productReducer from './productSlice';
//import productsReducer from '../slices/productsSlice';
export const store = configureStore({
	reducer: {
		// Add the generated reducer as a specific top-level slice
		product: productReducer,
		[fakeStoreProductsAPI.reducerPath]: fakeStoreProductsAPI.reducer,
		[fakeStoreCategoryAPI.reducerPath]: fakeStoreCategoryAPI.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(fakeStoreProductsAPI.middleware)
			.concat(fakeStoreCategoryAPI.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
