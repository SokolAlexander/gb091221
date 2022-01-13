import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB6LSdT9h25Zz8KtnYg75Blr6sozhUtV9o",
  authDomain: "gb1301-773b5.firebaseapp.com",
  projectId: "gb1301-773b5",
  storageBucket: "gb1301-773b5.appspot.com",
  messagingSenderId: "486653947549",
  appId: "1:486653947549:web:92406bc925b20dd2c7ee74",
  databaseURL:
    "https://gb1301-773b5-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
  await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const msgsRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
