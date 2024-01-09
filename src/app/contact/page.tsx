"use client"
import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";
import { Mulish } from 'next/font/google';
import { useSelector } from "react-redux";

const mulish = Mulish({
  weight: ["1000"],
  subsets: ["cyrillic-ext"],
  display: 'swap',
});

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2 className={mulish.className}>
            we'd love to hear <span> from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3757439724122!2d76.68573707610328!3d30.707835586834488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefaabdca956b%3A0xd58540d41c7211a7!2sContriverz!5e0!3m2!1sen!2sin!4v1704373835744!5m2!1sen!2sin"
        width="600"
        height="450"
        className={styles.mapping}
        // allowFullScreen="" // Fix: Use 'allowFullScreen' instead of 'allowfullscreen'
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
