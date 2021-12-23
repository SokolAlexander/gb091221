import React, { useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import { Router } from "./components/Router";
import { store } from "./store";
import { ProfileContext } from "./utils/ProfileContext";

function App() {
  const [name, setName] = useState("default");
  return (
    <Provider store={store}>
      <ProfileContext.Provider value={{ name, setName }}>
        <Router />
      </ProfileContext.Provider>
    </Provider>
  );
}

export default App;

// HOF
// const foo = (a, b) => a + b;
// const bar = (a, b) => a * b;

// const wrapper =
//   (func) =>
//   (...args) => {
//     console.log("function called");
//     return func(...args);
//   };

// const fooWithLogger = wrapper(foo);

// foo(1, 2);
// fooWithLogger(1, 2);
