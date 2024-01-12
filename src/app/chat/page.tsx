"use client";
import React, { useState } from "react";
import { deliverMeassage } from "../actions/action";
import Thread from "./interFace/page";

export default function Chat() {
    const [messages, setMessages] = useState<any>([
      { text: "Hello there!", sending: false, key: 1 }
    ]);
    console.log('messages',messages);
    
    async function sendMessage(formData: any) {
        try {
          // Assuming deliverMessage returns an object with a "text" property
          const sentMessage = await deliverMeassage(formData.get("message"));
      
          // Check if sentMessage is not null before updating the state
          console.log('=======>sentMessage',sentMessage)
          if (sentMessage) {
            setMessages((messages: any) => [
              ...messages,
              { text: sentMessage.text, key: messages.length + 1 }
            ]);
          }
        } catch (error) {
          console.error("Error sending message:", error);
        }
      }
    return <Thread messages={messages} sendMessage={sendMessage} />;
  }
  