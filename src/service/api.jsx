import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_MOVIE_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

// https://api.themoviedb.org/3.movie/now_playing
// https://api.themoviedb.org/3.movie/popular
// https://api.themoviedb.org/3.movie/popular?api_key=717ccf6765dcaa577801cadcc372f394

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getAllNowPlayingMovies: builder.query({
      query: () => (`/now_playing?api_key=${apiKey}`),
    }),
    getAllPopularMovies: builder.query({
      query: () => (`/popular?api_key=${apiKey}`),
    }),
  }),
});

export const { useGetAllNowPlayingMoviesQuery, useGetAllPopularMoviesQuery } = movieApi;

