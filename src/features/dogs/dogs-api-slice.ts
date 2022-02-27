import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOGS_API_KEY = 'ef32e7d7-3f68-4a8e-83e3-74173374f84a';

interface Breed {
    id: string;
    name: string;
    image: {
        url: string
    }
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOGS_API_KEY);

            return headers;
        },
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breed[], number | void>({
                query(limit = 10) {
                    //template string
                    return `/breeds?limit=${limit}`;
                },
            })
        }
    }
});

export const { useFetchBreedsQuery } = apiSlice;