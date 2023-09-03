import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  orderBy,
  query,
  doc,
  getDoc,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "./lib/firebaseConfig";
import { PostContent } from "./PostContent";

export const addPosts = async (title: string, text: string) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      post_id: uuidv4(),
      title,
      body: text,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPosts = async () => {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return data;
};

export const getPostBySlug = async (slug: string) => {
  const q = query(collection(db, "posts"), where("post_id", "==", slug));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return data[0];
};
