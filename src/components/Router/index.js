import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route, NavLink } from "react-router-dom";
import App from "../../App";
import { ChatList } from "../ChatList";
import Chats from "../Chats";
import { Home } from "../Home";
import { NoMatch } from "../NoMatch";
import Profile from "../Profile";

export const Router = () => (
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
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="chats" element={<ChatList />}>
        <Route
          path=":chatId"
          element={
            <Chats />
          }
        />
      </Route>
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NoMatch />} />
    </Routes>
  </BrowserRouter>
);
