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
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading]= useState(true);


    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    //Google SignIn
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                const destination = location?.state?.from || '/';
                history.replace(destination);
                console.log(result.user)
            })
            .catch((error) => {
                setError(error.message);
              })
              .finally(()=>setIsLoading(false));
    };

    //SignOut
    //  logout
    const handleSignOut = () => {
        // setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error);
            })
        //   .finally(()=> setIsLoading(false));
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                // ...
            }
              setIsLoading(false);
        });
    }, []);

    return {
        isLoading,
        user,
        googleSignIn,
        handleSignOut
    }
}

export default useFirebase;