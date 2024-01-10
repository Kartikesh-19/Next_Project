"use client";
import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
const Header = ({pageTitle}:any) => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href={"/"} >
          <div style={{display:'flex', justifyContent:'space-between',fontSize:28, fontWeight:"bolder",gap:"5px"}}>

          <Image
            src="/logo.png"
            // priority={true}
            // quality={75}
            style={{backgroundColor:'#ffffff'}}
            alt="my logo image"
            width={150}
            height={40}
          />
          <span >{pageTitle}</span>
          </div>
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
