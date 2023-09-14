import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
