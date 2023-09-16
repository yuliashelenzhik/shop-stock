import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    //Get all products
    getAllProducts: builder.query<any, void>({
      query: () => "/products",
    }),

    //Login mutation
    login: builder.mutation<any, User>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        await queryFulfilled
          .then((result) => {
            console.log(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useLoginMutation } = api;
