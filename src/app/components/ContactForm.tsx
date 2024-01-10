"use client";

import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
import { validationSchema } from "./ValidationSchema";

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
  const [errors, setErrors] = useState<any>({});
  const [status, setStatus] = useState<string>("");
  const handleStates = (key: string, value: string) => {
    setUser((user) => ({
      ...user,
      [key]: value,
    }));
    validationSchema
      .validateAt(key, { [key]: value })
      .then(() => {
        setErrors((prevErrors:any) => ({
          ...prevErrors,
          [key]: undefined, // Clear the error for the current field
        }));
      })
      .catch((error) => {
        setErrors((prevErrors:any) => ({
          ...prevErrors,
          [key]: error.message, // Update the error for the current field
        }));
      });
  };
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      await validationSchema.validate(user, { abortEarly: false });
      // Validation passed, proceed with form submission
      console.log("Form submitted:", user);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user?.name,
          email: user?.email,
          phone: user?.phone,
          message: user?.message,
        }),
      });
      if (res.status === 200) {
        setUser({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("sucess");
      } else {
        setStatus("error");
      }
    } catch (validationErrors:any) {
      // Validation failed, update errors state
      const newErrors:any = {};
      Array.isArray(validationErrors.inner) &&
        validationErrors.inner.forEach((error: any) => {
          newErrors[error.path] = error.message;
        });
      setErrors(newErrors);
    }
  };
  return (
    <form className={styles.contact_form}>
      <div className={styles.input_field}>
        Enter your name
        <label className={styles.label} htmlFor="username">
          <input
            type="text"
            id="username"
            value={user?.name}
            onChange={(e) => handleStates("name", e.target.value)}
            placeholder="Enter you Name"
            className={mulish.className}
            autoComplete="off"
          />
          {errors?.name && <p style={{ color: "red" }}>{errors?.name}</p>}
        </label>
      </div>
      <div className={styles.input_field}>
        Enter your email
        <label className={styles.label} htmlFor="Email">
          <input
            type="text"
            id="Email"
            value={user?.email}
            onChange={(e) => handleStates("email", e.target.value)}
            placeholder="Enter you Email"
            className={mulish.className}
            autoComplete="off"
          />
          {errors?.email && <p style={{ color: "red" }}>{errors?.email}</p>}
        </label>
      </div>
      <div className={styles.input_field}>
        Enter your phone
        <label className={styles.label} htmlFor="phone">
          <input
            type="text"
            id="phone"
            value={user?.phone}
            onChange={(e) => handleStates("phone", e.target.value)}
            placeholder="Enter you Phone"
            className={mulish.className}
            autoComplete="off"
          />
          {errors?.phone && <p style={{ color: "red" }}>{errors?.phone}</p>}
        </label>
      </div>
      <div className={styles.input_field}>
        Message
        <label className={styles.label} htmlFor="phone">
          <textarea
            rows={5}
            id="textarea"
            value={user?.message}
            onChange={(e) => handleStates("message", e.target.value)}
            placeholder="Enter you Message"
            className={mulish.className}
            autoComplete="off"
            required
          />
          {errors?.message && <p style={{ color: "red" }}>{errors?.message}</p>}
        </label>
      </div>
      <div>
        {status === "sucess" && (
          <p className={styles.success_msg}>Thank you for your message</p>
        )}
        {status === "error" && (
          <p className={styles.error_msg}>
            There is error while submitting message
          </p>
        )}
        <button
          type="submit"
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
          className={mulish.className}
          onClick={(e) => handleSubmit(e)}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
