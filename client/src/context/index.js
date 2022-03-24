import {useState, useEffect, createContext} from 'react';
import axios from 'axios';

const UserContext = createContext();




const UserProvider = ({children}) => {
    const[state,setState] = useState({
        user: {},
        token:''
    });

    const[text,setText]= useState([]);

    useEffect(()=>{
      setState(JSON.parse(localStorage.getItem('auth')));
    },[])

    
    useEffect(()=>{
        setText()
    },[])
    //axios config
   const token = state && state.token ? state.token : '';
   axios.defaults.baseURL = process.env.REACT_APP_API;
   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

   return(
       <UserContext.Provider value={[state,setState]}>
           {children}
       </UserContext.Provider>
   )

}

export {UserContext, UserProvider};