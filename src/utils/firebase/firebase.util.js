import {initializeApp} from 'firebase/app';
import {getAuth, 
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword} 
    from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';




const firebaseConfig = {

    apiKey: "AIzaSyArs7-rW2HjNeA7PymtZkgyq2X8D1DODqg",
  
    authDomain: "drain-clothing-store-db.firebaseapp.com",
  
    projectId: "drain-clothing-store-db",
  
    storageBucket: "drain-clothing-store-db.appspot.com",
  
    messagingSenderId: "17778526665",
  
    appId: "1:17778526665:web:6045fe89635a933c70c018"
  
  };
  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);

export const db = getFirestore();

export const createUserDocucmentFromAuth = async(userAuth,additionalInfo={}) =>{
    if(!userAuth) return;
    const userDocRef = doc(db, 'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    
    if(!userSnapShot.exists()) {
        const{ displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ... additionalInfo
            });
        }catch(error){
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email||!password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email||!password) return;
    return await signInAuthUserWithEmailAndPassword(auth,email,password);
}