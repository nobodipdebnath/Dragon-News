import {useEffect, useState } from 'react';
import {AuthContext} from './AuthContext'
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import {app} from '../Firebase/Firebase.config';

export const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const upDateProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [auth]);

    const userData = {
        user,
        setUser,
        createUser,
        signOutUser,
        logInUser,
        loading,
        setLoading,
        upDateProfile,
        googleLogin,
        githubLogin
    }

    return <AuthContext value={userData}>
        {children}
    </AuthContext>
};

