// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWt84_6sKiCVLVrhif_7CN-R-Uw9-P0s8",
  authDomain: "task-management-client-33a2e.firebaseapp.com",
  projectId: "task-management-client-33a2e",
  storageBucket: "task-management-client-33a2e.firebasestorage.app",
  messagingSenderId: "104814256001",
  appId: "1:104814256001:web:f8f0932b7707144c4b5280"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);