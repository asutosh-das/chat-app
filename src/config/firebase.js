
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore/lite";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyCyNhGUuuBDpib1OlcfBZcJ_-28TCVCGak",
  authDomain: "chat-app-gs-ac6ec.firebaseapp.com",
  projectId: "chat-app-gs-ac6ec",
  storageBucket: "chat-app-gs-ac6ec.firebasestorage.app",
  messagingSenderId: "146866739056",
  appId: "1:146866739056:web:290da8e2823b47b38d61b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user =  res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using chat app",
            lastseen:Date.now()
        }) 
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    } catch (error) {
        console.error(error);
        toast.error(error.code)
    }
}

const login = async(email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.error(error);
        toast.error(error.code);
    }
}

export {signup,login}