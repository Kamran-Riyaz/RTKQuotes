import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quotesApi = createApi({
  reducerPath: 'quotesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quotes-api-self.vercel.app/' }),
  endpoints: (builder) => ({
    getQuote: builder.query<{ quote: string; author: string }, void>({
      query: () => 'quote',
    }),
  }),
});

export const { useGetQuoteQuery } = quotesApi;