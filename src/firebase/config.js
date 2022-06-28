import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {

  apiKey: "AIzaSyAV1X22ZZVyO3W3wpOa_BrxdgY8Kcd2YDA",
  
  authDomain: "reactjs-alvarezkenyi.firebaseapp.com",
  
  projectId: "reactjs-alvarezkenyi",
  
  storageBucket: "reactjs-alvarezkenyi.appspot.com",
  
  messagingSenderId: "875895582530",
  
  appId: "1:875895582530:web:5f60cd8ee70cd85e73a2db"

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)