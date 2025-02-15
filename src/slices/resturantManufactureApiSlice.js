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
      query: ({ page, limit, owner }) => {
        const queryParams = new URLSearchParams();

        if (page) queryParams.append("page", page);
        if (limit) queryParams.append("limit", limit);
        if (owner) queryParams.append("owner", owner);

        return {
          url: `${RESTURANT_MANUFACTURE_URL}/shops?${queryParams.toString()}`,
          method: "GET",
        };
      },
    }),

    getAllShopsName: builder.query({
      query: ({ owner }) => ({
        url: `${RESTURANT_MANUFACTURE_URL}/shops?limit=${100}&select=shopName&owner=${owner}`,
        method: "GET",
      }),
    }),

    addFood: builder.mutation({
      query: (formData) => ({
        url: `${RESTURANT_MANUFACTURE_URL}/foods`,
        method: "POST",
        body: formData,
      }),
    }),

    getAllFoods: builder.query({
      query: ({ page, limit, owner }) => {
        const queryParams = new URLSearchParams();

        if (page) queryParams.append("page", page);
        if (limit) queryParams.append("limit", limit);
        if (owner) queryParams.append("owner", owner);

        return {
          url: `${RESTURANT_MANUFACTURE_URL}/foods?${queryParams.toString()}`,
          method: "GET",
        };
      },
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
  useGetAllShopsNameQuery,
  useAddFoodMutation,
  useGetAllFoodsQuery,
  useGetFoodQuery,
} = resturantManufactureApiSlice;
