"use client";
import React, { useState } from "react";
import { deliverMeassage } from "../actions/action";
import Thread from "./interFace/page";

export default function Chat() {
    const [messages, setMessages] = useState<any>([
      { text: "Hello there!", sending: false, key: 1 }
    ]);
    async function sendMessage(formData:any) {
      const sentMessage = await deliverMeassage(formData.get("message"));
      setMessages((messages:any) => [...messages, { text: sentMessage }]);
    }
    return <Thread messages={messages} sendMessage={sendMessage} />;
  }
  