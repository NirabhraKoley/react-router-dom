import React from "react";

export const getMoviesData = async () => {
  try {
    const resp = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${
        import.meta.env.VITE_API_KEY
      }&s=titanic&page=1`
    );
    const data = resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
