import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { provider, auth, signInWithPopup } from "../config/firebaseConfig";

export const useGoogleSigin = () => {
    const [_error, setError] = useState(null)
    const [_loading, setLoading] = useState(false)

    const signInWithGoogle = async () => {
        try {
            setLoading(true)
            const result = await signInWithPopup(auth, provider);
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            localStorage.setItem('auth-token', result.user.refreshToken)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }
    return {
        signInWithGoogle,
        _error,
        _loading,
    }
}

const SignOut = () => {
    const handleSignOut = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('auth-token')
        } catch (error) {
            alert(error.message);
        }
    };
    useEffect(() => {
        if (confirm("are you sure?")) {
            handleSignOut();
        } else {
            return;
        }
    }, []);
};

export default SignOut;
