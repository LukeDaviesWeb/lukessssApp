import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsl0XpOgGLDgnv47dp4UlMxr62nfLuDQE",
  authDomain: "lukessssapp.firebaseapp.com",
  databaseURL: "https://lukessssapp.firebaseio.com",
  projectId: "lukessssapp",
  storageBucket: "lukessssapp.appspot.com",
  messagingSenderId: "854251645698",
  appId: "1:854251645698:web:c25a4ea80c88120ccab01b",
};

const app = Firebase.initializeApp(firebaseConfig);

export const db = app.database();
