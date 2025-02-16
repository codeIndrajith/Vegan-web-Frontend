import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/auth";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),

    register: builder.mutation({
      query: (formData) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: formData,
      }),
    }),

    buyProduct: builder.mutation({
      query: (payload) => ({
        url: `/api/users/buyProducts`,
        method: "POST",
        body: payload,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useBuyProductMutation,
} = usersApiSlice;
