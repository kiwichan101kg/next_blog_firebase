import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./lib/firebaseConfig";

export const addPosts = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "yamada",
      last: "takayuki",
      born: 1998,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};
