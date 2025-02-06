import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductData } from "../../../constants/product"

const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyjson.com",
  timeout: 100000,
});

export const ShoppingApi = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query<ProductData[], void>({
      query: () => "/products?limit=100",
      transformResponse: (response: { products: ProductData[] }) =>
        response.products,
    }),
  }),
});

export const { useGetProductsQuery } = ShoppingApi;
