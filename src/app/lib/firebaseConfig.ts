import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth, GoogleAuthProvider } from "firebase/auth";

// .envファイルで設定した環境変数をfirebaseConfigに入れる
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
};

let firebaseApp: FirebaseApp;
let auth: Auth;
let db: Firestore;
let provider: GoogleAuthProvider;

// サーバーサイドでレンダリングするときにエラーが起きないようにするための記述
if (typeof window !== "undefined" && !getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
  auth = getAuth(firebaseApp);
  db = getFirestore(firebaseApp);
  provider = new GoogleAuthProvider();
} else {
  // クライアント側ではインスタンスを初期化しない
  firebaseApp = {} as FirebaseApp;
  auth = {} as Auth;
  db = {} as Firestore;
  provider = {} as GoogleAuthProvider;
}

export { firebaseApp, auth, db, provider };
