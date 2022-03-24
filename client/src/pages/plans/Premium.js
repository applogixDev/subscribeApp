import React,{useContext, useEffect } from 'react';
import { UserContext } from "../../context";
import { useMatch,useNavigate } from 'react-router-dom'

const Premium = ({path,url,children}) => {
    const [state, setState] = useContext(UserContext);
    let match = useMatch('/premium');
    const navigate = useNavigate();
    useEffect(() => {
      let result = [];
      const check = () =>
        state && 
        state.user && 
        state.user.subscriptions &&
        state.user.subscriptions.map((sub) => {
          result.push(sub.plan.nickname);
        });
        check();
        //console.log('Match =>', match)
  
        const plan = match.pathname.split('/')[1].toUpperCase()
        if(!result.includes(plan))
        {
          navigate('/')
        }
    }, [state && state.user]);
    return(
        <>
          <div className='container-fluid'>
              <div className='row py-5 bg-light text-center'>
                 <h1 className='display-4 fw-bold'>Premium</h1>
                 <p className='lead'>Choose Courses To Access</p>
              </div>

          </div>

         <div className='container py-5'>
           <div className='row'>
              <div className='col-md-8 p-5 rounded bg-dark text-light'>
                 <ul className='lead'>
                     <li>Full Stack Development</li>
                     <li>Frontend Development</li>
                     <li>Backend Development</li>
                     <li>Automation Testing</li>
                     <li>Devops</li>
                 </ul>
              </div>

              <div className='col-md-4'>
                <h4>About Courses</h4>
                <p>Choose courses from javascript development, automation testing and devops</p>
              
               <h4>Email Support</h4>
                <p>support@stats.com</p>
              </div>
           </div>
         </div>
        </>

    );
}

export default Premium;