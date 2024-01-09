"use client";
import React, { useEffect } from "react";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";
import { setMovies } from "@/redux/Slice/HandleSlice";
import { useDispatch, useSelector } from "react-redux";

const Movie: React.FC = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: any) => state?.movies?.movies);

  const url:
    | string
    | undefined = `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en`;
  useEffect(() => {
    apiData();
  }, []);
  async function apiData() {
    const options: any = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
        "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
      },
    };

    const res = await fetch(url as string, options);
    const data = await res.json();
    dispatch(setMovies(data.titles));
  }

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1 style={{ fontWeight: 900, fontSize: "xx-large" }}>
            Series & Movie
          </h1>
          <div className={styles.card_section}>
            {Array.isArray(movies) &&
              movies.map((curElem) => {
                return <MovieCard key={curElem.id} {...curElem} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
