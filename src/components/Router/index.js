import { onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { auth } from "../../service/firebase";
import { initAuthTracking, signIn, signOut } from "../../store/profile/actions";
import { Articles } from "../Articles";

import { ChatList } from "../ChatList";
import Chats from "../Chats";
import { Home } from "../Home";
import { NoMatch } from "../NoMatch";
import { PrivateOutlet } from "../PrivateOutlet";
import Profile from "../Profile";
import { PublicOutlet } from "../PublicOutlet";

export const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthTracking());
  }, []);

  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink
            style={(props) => ({ color: props.isActive ? "green" : "blue" })}
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="/chats"
          >
            Chats
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="profile"
          >
            PROFILE
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
            to="articles"
          >
            Articles
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<PublicOutlet />}>
          <Route path="" element={<Home />} />
          <Route path="signup" element={<Home isSignUp />} />
        </Route>
        <Route path="chats" element={<PrivateOutlet />}>
          <Route path="" element={<ChatList />}>
            <Route path=":chatId" element={<Chats />} />
          </Route>
        </Route>
        <Route path="/profile" element={<PrivateOutlet />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

// const [msgs, setMsgs] = useState({});
// useEffect(() => {
//   onValue(messagesRef, (snapshot) => {
//     const newMsgs = {};

//     snapshot.forEach((chatMsgsSnap) => {
//       newMsgs[chatMsgsSnap.key] = Object.values(
//         chatMsgsSnap.val().messageList || {}
//       );
//     });

//     setMsgs(newMsgs);
//   });
// }, []);

// const handleSendMessage = useCallback(
//   (newMessage) => {
//     // dispatch(addMessage(chatId, newMessage));
//     // sendMessage(chatId, newMessage);
//     push(getChatMsgsListRefById(chatId), newMessage);
//   },
//   [chatId, sendMessage]
// );

// set(getChatMsgsRefById(newChat.id), { empty: true });

// export const getChatMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);
