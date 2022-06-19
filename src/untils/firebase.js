 import firebase from ".firebase";
 
 const firebaseConfig = {
    apiKey: "AIzaSyCPCVVC_-DXPUbvAzUW7rMOCUtI2IwrfpQ",
    authDomain: "farrukh-38ad1.firebaseapp.com",
    projectId: "farrukh-38ad1",
    storageBucket: "farrukh-38ad1.appspot.com",
    messagingSenderId: "61466681809",
    appId: "1:61466681809:web:00fae1176a2cfd953340f0"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
   const db=firebaseApp.firestore();
   const auth =firebase.auth();
   export {db , auth}