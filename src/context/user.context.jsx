import {createContext,useState,useEffect} from 'react';
//actual value want to access
import { onAuthStateChangedListener,createUserDocucmentFromAuth } from '../utils/firebase/firebase.util';
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,

});

//Provider is the actual component 
export const UserProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value={currentUser,setCurrentUser    };
    useEffect(()=>{
        const unsubscribe =onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocucmentFromAuth(user);
            }
            setCurrentUser(user);
        })
    },[]);
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}