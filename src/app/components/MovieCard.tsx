"use client"
import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const MovieCard = (val: any) => {
  const { type, id, synopsis, title } = val?.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={val?.jawSummary?.backgroundImage?.url ?? "/logo.png"}
            alt={title}
            width={450}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h1>{title.slice(0, 18)}</h1>
          <p>{synopsis.slice(0, 66)}</p>
          <Link href={`/movie/${id}`}>
            <button
            style={{
              borderRadius: 20,
              border:"1px solid #000",
              backgroundColor: "#000",
              color: "#fff",
              textAlign: "center",
              fontWeight: 400,
              width: 150,
              height: 35,
              transition: "background-color 0.3s ease-in-out", // Add transition property
              cursor: "pointer", // Add pointer cursor for better user experience
            }}
            onMouseEnter={(e:any) => {
              e.target.style.backgroundColor = "#fff"; 
              e.target.style.color="#000"// Change background color on hover
            }}
            onMouseLeave={(e:any) => {
              e.target.style.backgroundColor = "#000";
              e.target.style.color="#fff" // Revert back to original color on mouse leave
            }}
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
