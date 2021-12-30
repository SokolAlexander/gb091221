import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Router } from "./components/Router";
import { persistor, store } from "./store";
import { ProfileContext } from "./utils/ProfileContext";

import "./App.css";

function App() {
  const [name, setName] = useState("default");
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProfileContext.Provider value={{ name, setName }}>
          <Router />
        </ProfileContext.Provider>
      </PersistGate>
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
