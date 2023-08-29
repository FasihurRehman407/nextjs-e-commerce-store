import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://127.0.0.1:3001'

export const nodeApi = createApi({
  reducerPath: 'nodeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),

  // Entities of API
  tagTypes: [],

  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body
      })
    })
  })
})

export const { useLoginMutation } = nodeApi
