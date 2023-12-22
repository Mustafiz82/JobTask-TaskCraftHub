import { createContext, useEffect, useState } from "react";
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updatePassword,
	updateProfile,
} from "firebase/auth";
import { app } from "../../firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const axiosPublic = useAxiosPublic();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const SignUp = (email, pass) => {
		return createUserWithEmailAndPassword(auth, email, pass);
	};

	const SignIN = (email, pass) => {
		return signInWithEmailAndPassword(auth, email, pass);
	};

	const googleSignIn = () => {
		return signInWithPopup(auth, provider);
	};

	const profile = (displayName, PhotoUrl) => {
		return updateProfile(auth.currentUser, {
			displayName: displayName,
			photoURL: PhotoUrl,
		});
	};

	const githubprovider = new GithubAuthProvider();

	const githubLogin = () => {
		return signInWithPopup(auth, githubprovider)
			
	};
	// const newPassword = getASecureRandomPassword();
	
	const UpdatePassword = (newPassword) => {

		console.log(newPassword ,"newPassword");
		
		const user = auth.currentUser; 
		updatePassword(user , newPassword)
		.then(() => {
			console.log("seccess");
		})
		.catch((error) => {
			// An error ocurred
			console.log(error);
		});
	}

	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// setUser(user);
				setUser(user);
				console.log(user);
				setLoading(false);

				
			} else {
				console.log("user is signed Out");
				setUser(null);
				
			}
		});

		return () => {
			return unsubscribe;
		};
	}, []);

	const authObj = {
		user,
		SignIN,
		googleSignIn,
		SignUp,
		profile,
		logOut,
		loading,UpdatePassword,githubLogin
	};

	return (
		<AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
