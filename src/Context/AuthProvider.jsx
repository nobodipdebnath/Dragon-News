import {useEffect, useState } from 'react';
import {AuthContext} from './AuthContext'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
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
        upDateProfile
    }

    return <AuthContext value={userData}>
        {children}
    </AuthContext>
};

