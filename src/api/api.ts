import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    //Get all products
    getAllProducts: builder.query<any, void>({
      query: () => "/products",
    }),

    // Add a new product
    addProduct: builder.mutation<any, Product>({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body: body,
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

    //Remove a product

    removeProduct: builder.mutation<void, number>({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        await queryFulfilled.catch((error) => {
          console.log(error);
        });
      },
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

    //Register a new user

    register: builder.mutation<any, NewUser>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
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

export const {
  useGetAllProductsQuery,
  useLoginMutation,
  useAddProductMutation,
  useRemoveProductMutation,
  useRegisterMutation,
} = api;
