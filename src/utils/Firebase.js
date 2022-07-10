// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, getDoc, query, where, Timestamp, orderBy, increment } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFRcdQx6mV_GtgSPonCrI6-A8q6DeMC5o",
  authDomain: "compfest-cantent.firebaseapp.com",
  projectId: "compfest-cantent",
  storageBucket: "compfest-cantent.appspot.com",
  messagingSenderId: "627038365121",
  appId: "1:627038365121:web:66fbd7e1b4b78463663b40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const sg = getStorage(app); 

export {
 db,
 sg,
 ref,
 uploadBytesResumable,
 getDownloadURL,
 collection,
 addDoc,
 getDocs,
 doc,
 updateDoc,
 getDoc,
 query,
 where,
 Timestamp,
 orderBy,
 increment
};
