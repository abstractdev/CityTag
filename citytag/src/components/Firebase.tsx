import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIEYVQG5JGqdLF45w2-nURDajj0ZWRfkM",
  authDomain: "citytag-ce456.firebaseapp.com",
  projectId: "citytag-ce456",
  storageBucket: "citytag-ce456.appspot.com",
  messagingSenderId: "885118851658",
  appId: "1:885118851658:web:f9f815c8fba31c4de3a4b3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

//Firebase functions
export async function checkFirebaseForMatch() {
  const temp: any[] = [];

  const querySnapshot = await getDocs(collection(db, "ny"));
  querySnapshot.forEach((doc) => {
    temp.push(doc.data());
  });
  temp.forEach((e: { div: string }) => {
    console.log(e.div);
  });
}
