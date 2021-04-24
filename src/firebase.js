import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3dmqqbK3kIp2mNTRMEZ8MS59JPXEUcYE",
  authDomain: "drive-clone-7524c.firebaseapp.com",
  projectId: "drive-clone-7524c",
  storageBucket: "drive-clone-7524c.appspot.com",
  messagingSenderId: "15174418691",
  appId: "1:15174418691:web:fe1c09b0c98d69e7b42936",
  measurementId: "G-NGBGKREKDP",
};

const app = firebase.initializeApp(firebaseConfig);

export const storage = app.storage();
export const database = {
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  folders: firebase.collection("folders"),
  files: firebase.collection("files"),
};
export const currentTimeStamp = firebase.firestore.FieldValue.serverTimestamp();

export default app;
