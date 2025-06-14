// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtSswrTlFG_sw1nTQjqmPtSFT65mziZtw",
  authDomain: "coder-react-e39af.firebaseapp.com",
  projectId: "coder-react-e39af",
  storageBucket: "coder-react-e39af.firebasestorage.app",
  messagingSenderId: "486018655967",
  appId: "1:486018655967:web:5f02ac567ccb7982ceeb6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)