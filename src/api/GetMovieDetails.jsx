import React from "react";
import { useParams } from "react-router-dom";

export const GetMovieDetails = async ({ params }) => {
  //   const params = useParams();
//   console.log(params);
  const id = params.movieID;

  try {
    const resp = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
