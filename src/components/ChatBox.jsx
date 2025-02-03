import React from "react";
import Message from "./Message";

const ChatBox = () => {

  const messages = [
    {
        id: 1,
        name: "John Doe",
        text: "Hello there!"
    },
    {
        id: 2,
        name: "Temba Bavuma",
        text: "Hii guys!"
    },
  ]

  return (
    <div className="pb-44 pt-20 containerWrap">
        {messages.map(message => (
            <Message key={message.id} message={message}/>
        ))}
    </div>
  );
};

export default ChatBox;
