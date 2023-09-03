import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./lib/firebaseConfig";

export const addPosts = async (title: string, text: string) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title,
      text,
      createAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPosts = async () => {
  const q = query(collection(db, "posts"), orderBy("createAt", "desc"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));

  return data;
};
