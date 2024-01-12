import { Mulish } from "next/font/google";
import { useOptimistic, useState, useRef } from "react";
import styles from "../../contact/contact.module.css";
const mulish = Mulish({
  weight: ["1000"],
  subsets: ["cyrillic-ext"],
  display: 'swap',
});

export default function Thread({ messages, sendMessage }:any) {
  const formRef:any = useRef();
  async function formAction(formData:any) {
    addOptimisticMessage(formData.get("message"));
    formRef.current.reset();
    await sendMessage(formData);
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true
      }
    ]
  );

  return (
    <>
      {optimisticMessages.map((message:any, index:any) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
      <div className={styles.input_field}>
        Enter your name
        <label className={styles.label} htmlFor="username">
          <input
            type="text"
            id="username"
            // value={user?.name}
            // onChange={(e) => handleStates("name", e.target.value)}
            // placeholder="Enter you Name"
            className={mulish.className}
            autoComplete="off"
          />
          {/* {errors?.name && <p style={{ color: "red" }}>{errors?.name}</p>} */}
        </label>
      </div>
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
        >
          Send Message
        </button>
      </form>
    </>
  );
}