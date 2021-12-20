import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { AUTHORS } from "./utils/constants";

// function App() {
//   const [messageList, setMessageList] = useState([]);

//   const handleAddMessage = (newMessage) => {
//     setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
//   };

//   return (
//     <>
//       <h3>HEADER</h3>
//       <div className="App">
//         <Form onAddMessage={handleAddMessage} />
//         {messageList.map(({ text, author }) => (
//           <div>
//             {author}: {text}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
function App() {
  const [messageList, setMessageList] = useState([]);

  const handleAddMessage = (newMessage) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  const handleSubmit = (text) => {
    const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
    handleAddMessage(newMessage);
  };

  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        handleAddMessage({
          text: "iambot",
          author: AUTHORS.BOT,
          id: `msg-${Date.now()}`,
        });
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messageList]);

  return (
    <>
      <h3>HEADER</h3>
      <div className="App">
        <Form onSubmit={handleSubmit} />
        <MessageList messages={messageList} />
        <Button title={3} />
      </div>
    </>
  );
}

export default App;
