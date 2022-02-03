import initializeAuthentication from "../Firebase/firebase.init"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";

initializeAuthentication();

const useFirebase = ()=>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider(); 

    const googleSignIn = ()=>{
        signInWithPopup(auth, provider)
        .then((resutl)=>{
            console.log(resutl.user)
        })
    }
    return{
        googleSignIn
    }
}

export default useFirebase;