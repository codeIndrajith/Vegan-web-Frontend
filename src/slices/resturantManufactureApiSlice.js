import { apiSlice } from "./apiSlice";
const RESTURANT_MANUFACTURE_URL = "/api/resturant-manufacture";

export const resturantManufactureApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addShop: builder.mutation({
      query: (formData) => ({
        url: `${RESTURANT_MANUFACTURE_URL}/shops`,
        method: "POST",
        body: formData,
      }),
    }),

    getAllShops: builder.query({
      query: ({ page, limit }) => ({
        url: `${RESTURANT_MANUFACTURE_URL}/shops?page=${page}&&limit=${limit}`,
        method: "GET",
      }),
    }),

    getAllFoods: builder.query({
      query: ({ page, limit }) => ({
        url: `${RESTURANT_MANUFACTURE_URL}/foods?page=${page}&&limit=${limit}`,
        method: "GET",
      }),
    }),

    getFood: builder.query({
      query: (id) => ({
        url: `${RESTURANT_MANUFACTURE_URL}/foods/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddShopMutation,
  useGetAllShopsQuery,
  useGetAllFoodsQuery,
  useGetFoodQuery,
} = resturantManufactureApiSlice;
