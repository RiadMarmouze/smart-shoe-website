// Import the Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCTHFx7cLKG8cb8M4VTU9ebg_GFDyCnac",
    authDomain: "shoe-website-3bb3a.firebaseapp.com",
    projectId: "shoe-website-3bb3a",
    storageBucket: "shoe-website-3bb3a.appspot.com",
    messagingSenderId: "1092099815127",
    appId: "1:1092099815127:web:6b15835ef919f57a28e292",
    measurementId: "G-V8567X1B1X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore instance
export { db };
