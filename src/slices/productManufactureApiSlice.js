import { apiSlice } from "./apiSlice";
const PRODUCT_MANUFACTURE_URL = '/api/product-manufacture/products';

export const productManufactureApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addProduct: builder.mutation({
            query: (formData) => ({
                url: `${PRODUCT_MANUFACTURE_URL}`,
                method: 'POST',
                body: formData
            })
        }),

        getAllProduct: builder.query ({
            query: ({page, limit}) => ({
                url: `${PRODUCT_MANUFACTURE_URL}?page=${page}&&limit=${limit}`,
                method: "GET",
            }),
        })
    })
})

export const { useAddProductMutation, useGetAllProductQuery } = productManufactureApiSlice;