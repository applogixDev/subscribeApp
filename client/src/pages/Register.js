import React, {useState, useContext} from "react";
import './styles.css';
import Input from "../components/Input";
import Button from "../components/Button";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';
import { UserContext } from '../context';


const Register = ({history}) =>{
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[state,setState] = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    try{
      e.preventDefault();
      const {data} = await axios.post("/register",{
        name,
        email,
        password
      });
      console.log(data);
      if(data.error)
      {
        toast.error(data.error)
      }
      else
      {
        setName('');
        setEmail('');
        setPassword('');
        toast.success(`Hi ${data.user.name},registration is successful,please login`);
        setState(data);
        localStorage.setItem('auth',JSON.stringify(data));
        navigate('/');
      };
     
     
    }
    catch(err)
    {
      console.log(err)
      toast.error("Something went wrong. Try again");
    }
    
  }

    return(
        <>
          <div className="d-flex justify-content-center cont">
              <div className="container align-items-center d-flex"> 
                  <div className="row col-md-6 offset-md-3 text-center">
                    <h1 className="pt-5 fw-bold heading-text">Let's Get Started</h1>
                    <p className="lead pb-4 sub-headings">
                      Sign up for free. No credit card required.
                    </p>

                    <div className="form-group">
                       <Input className="labels-bg" label="Name" value={name} setValue={setName} type="text"/>
                       <Input label="Email" value={email} setValue={setEmail} type="email"/>
                       <Input label="Password" value={password} setValue={setPassword} type="password"/>

                       <div className="d-grid">
                        <Button handleClick={handleClick} type="primary"  text="Register"/>
                       </div>
                       
                    </div>

                  </div>

                  {/* <div className="row">
                     <pre>{JSON.stringify({name,email,password})}</pre>
                  </div> */}
              </div>
          </div>

        </>
    );
}

export default Register;