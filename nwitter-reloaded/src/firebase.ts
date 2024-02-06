import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLBW2PnmCAv1BfAbhuUm4oIdaWgE9RKI4",
  authDomain: "nwitter-reloaded-b9cdf.firebaseapp.com",
  projectId: "nwitter-reloaded-b9cdf",
  storageBucket: "nwitter-reloaded-b9cdf.appspot.com",
  messagingSenderId: "462168328432",
  appId: "1:462168328432:web:e16bc22118afd0d7f3da35",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
