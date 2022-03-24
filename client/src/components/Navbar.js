import { HomeTwoTone } from "@ant-design/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

import { useNavigate} from 'react-router-dom';
import { UserContext } from '../context';

const Navbar = () => {

  const[state,setState] = useContext(UserContext);
  const navigate = useNavigate();
  const logout = () =>{
    setState({user:{},token:''});
    localStorage.removeItem('auth');
    navigate('/login');

  }

  console.log("State => ", state);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg text-white">
        <div className="container-fluid">
          <a className="navbar-brand text-white" to="#">
            Subscription App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>

{state && state.token ? (

<div className="btn-group">
<button className="btn btn-secondary btn-md dropdown-bg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
{state.user.email}
</button>
<ul className="dropdown-menu">
         <li className="nav-item dropdown-item">
           <Link className="nav-link" to="/account">
             Account
           </Link>
         </li>

         <li className="nav-item dropdown-item">
           <Link onClick={logout} className="nav-link" to="">
             Log out
           </Link>
         </li>

       </ul>
</div>
   
   

) : (
  <>
    <li className="nav-item">
                <Link className="nav-link text-white" to="/register">
                  Register
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">
                  Log In
                </Link>
              </li>
  </>
)}

            

             

             
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
