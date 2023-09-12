import {initializeApp} from 'firebase/app';
import {getAuth, 
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments= async (collectionKey,objectsToAdd,field)=>{
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object)=>{
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    });
    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments=async()=>{
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);
    const querySnapshot=await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
        const {title,items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    },{});
    return categoryMap;

}



export const createUserDocucmentFromAuth = async(userAuth,additionalInfo={}) =>{
    if(!userAuth) return;
    const userDocRef = doc(db, 'users',userAuth.uid);
   
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
    return await signInWithEmailAndPassword(auth,email,password);
}
export const  signOutUser=async()=>await signOut(auth);
export const onAuthStateChangedListener = (callback)=>{
    onAuthStateChanged(auth,callback);
}