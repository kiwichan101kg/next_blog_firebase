import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./lib/firebaseConfig";

export const addPosts = async (title: string, text: string) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title,
      text,
      date: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  console.log(data);

  return data;
};
