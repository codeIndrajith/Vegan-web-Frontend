import { apiSlice } from "./apiSlice";
const PRODUCT_MANUFACTURE_URL = "/api/product-manufacture/products";

export const productManufactureApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (formData) => ({
        url: `${PRODUCT_MANUFACTURE_URL}`,
        method: "POST",
        body: formData,
      }),
    }),

    getAllProduct: builder.query({
      query: ({ page, limit, owner }) => {
        const queryParams = new URLSearchParams();

        if (page) queryParams.append("page", page);
        if (limit) queryParams.append("limit", limit);
        if (owner) queryParams.append("owner", owner);

        return {
          url: `${PRODUCT_MANUFACTURE_URL}?${queryParams.toString()}`,
          method: "GET",
        };
      },
    }),

    getProduct: builder.query({
      query: (id) => ({
        url: `${PRODUCT_MANUFACTURE_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductQuery,
  useGetProductQuery,
} = productManufactureApiSlice;
