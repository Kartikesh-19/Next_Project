"use client"

import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleStates=(key:string,value:string)=>{
    setUser((user)=>({
        ...user,
        [key]:value
    }))
  }

  return (
    <form className={styles.contact_form}>
      <div className={styles.input_field}>
        Enter your name
        <label className={styles.label} htmlFor="username">
          <input
            type="text"
            id="username"
            value={user?.name}
            onChange={(e)=>handleStates("name",e.target.value)}
            placeholder="Enter you Name"
            className={mulish.className}
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        Enter your email
        <label className={styles.label} htmlFor="Email">
          <input
            type="text"
            id="Email"
            value={user?.email}
            onChange={(e)=>handleStates("email",e.target.value)}
            placeholder="Enter you Email"
            className={mulish.className}
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        Enter your phone
        <label className={styles.label} htmlFor="phone">
          <input
            type="text"
            id="phone"
            value={user?.phone}
            onChange={(e)=>handleStates("phone",e.target.value)}
            placeholder="Enter you Phone"
            className={mulish.className}
            autoComplete="off"
          />
        </label>
      </div>
      <div className={styles.input_field}>
        Message
        <label className={styles.label} htmlFor="phone">
          <textarea
            rows={5}
            id="phone"
            value={user?.message}
                onChange={(e)=>handleStates("message",e.target.value)}
            placeholder="Enter you Message"
            className={mulish.className}
            autoComplete="off"
            required
          />
        </label>
      </div>
      <div>
        <button type="submit"      
         style={{
              borderRadius: 20,
              backgroundColor: "#000",
              color: "#fff",
              textAlign: "center",
              fontWeight: 400,
              width:150,
              height:35
            }}
            className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
