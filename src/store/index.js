import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { articlesReducer } from "./articles/reducer";

import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { messagesSaga } from "./messages/sagas";
import { profileReducer } from "./profile/reducer";

const persistConfig = {
  key: "gbMessenger",
  storage,
  blacklist: ["profile"],
};

const rootReducer = combineReducers({
  messages: messagesReducer,
  chats: chatsReducer,
  profile: profileReducer,
  articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
// sagaMiddleware.run(messagesSaga);
