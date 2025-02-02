import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/auth';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data
            })
        }),

        register: builder.mutation({
            query: (formData) => ({
                url: `${USERS_URL}/register`,
                method: 'POST',
                body: formData
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = usersApiSlice;