import React,{useContext} from 'react';
import {  Navigate  } from 'react-router-dom';
import { isAuth } from '../../utils/utilities';

const AuthRoute = ({children}) =>
{
   
   
  if(isAuth()) return children;
  else return <Navigate to='/login'/>

   
}

export default AuthRoute;

