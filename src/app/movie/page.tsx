import React from 'react';
import MovieCard from '@/app/components/MovieCard';
import styles from '@/app/styles/common.module.css';

const Movie: React.FC = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url: string | undefined = process.env.RAPID_KEY;

  const options: RequestInit = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
    },
  };

  const res = await fetch(url as string, options);
  const data = await res.json();
  const main_data: any[] = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1 style={{ fontWeight: 900, fontSize: 'xx-large' }}>Series & Movie</h1>
          <div className={styles.card_section}>
            {Array.isArray(main_data) &&
              main_data.map((curElem) => {
                return <MovieCard key={curElem.id} {...curElem} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
