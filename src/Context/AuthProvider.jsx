import {useEffect, useState } from 'react';
import {AuthContext} from './AuthContext'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {app} from '../Firebase/Firebase.config';

export const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
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
        logInUser
    }

    return <AuthContext value={userData}>
        {children}
    </AuthContext>
};

