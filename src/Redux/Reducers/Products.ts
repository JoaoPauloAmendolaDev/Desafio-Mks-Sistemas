import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl : 'https://mks-frontend-challenge-api.herokuapp.com/api/v1/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products?page=1&rows=8&sortBy=name&orderBy=ASC"
        }),
    }),
})

export const { useGetAllProductsQuery} = productsApi
export {productsApi}