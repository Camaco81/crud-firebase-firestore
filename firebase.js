  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs,
    onSnapshot,
    doc,
    deleteDoc,
    getDoc,
    updateDoc 
     } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
    // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8kGFV8s8s_EU4o9J9h5ERCxt6Hy-Hv38",
    authDomain: "aprendiendo-firebase-e07d9.firebaseapp.com",
    projectId: "aprendiendo-firebase-e07d9",
    storageBucket: "aprendiendo-firebase-e07d9.appspot.com",
    messagingSenderId: "924917737471",
    appId: "1:924917737471:web:20c33aa5876520697c69ca"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firestore
  const db= getFirestore();

  export const saveTask=(title, description)=>
  addDoc(collection(db, "tasks"),{title,description})

  export const getTasks= ()=> getDocs(collection(db, "tasks"));

  export const ongetTask= (callback)=> onSnapshot(collection(db,"tasks"),callback);

  export const deleteTask= (id) => deleteDoc(doc(db, "tasks", id));

  export const getTask = (id) => getDoc(doc(db, "tasks", id));

  export const updateTask= (id, newFields)=>
  updateDoc(doc(db,"tasks",id),newFields);





