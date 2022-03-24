import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
//protected routes
import AuthRoute from './components/routes/AuthRoute';
import StripeSuccess from './pages/stripe-success';
import StripeCancel from './pages/stripe-cancel';
import Account from './pages/Account';
import Basic from './pages/plans/Basic';
import Advanced from './pages/plans/Advanced';
import Premium from './pages/plans/Premium';


function App() {
  return (
    <div className="App">
      <Router>
        <>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{
        duration:3000,
      }} />
      <Routes>
         <Route  exact path='/' element={<Home/>}/>
         <Route exact path='/register' element={<Register/>}/>
         <Route exact path='/login' element={<Login/>}/>
         {/* protected route */}
         
         <Route 
         element = {
           <AuthRoute>
             <StripeSuccess />
           </AuthRoute>
         }
         path='/stripe/success'
         />

      <Route 
         element = {
           <AuthRoute>
             <StripeCancel />
           </AuthRoute>
         }
         path='/stripe/cancel'
         />

<Route 
         element = {
           <AuthRoute>
             <Account />
           </AuthRoute>
         }
         path='/account'
         />

<Route 
         element = {
           <AuthRoute>
             <Basic />
           </AuthRoute>
         }
         path='/basic'
         />

<Route 
         element = {
           <AuthRoute>
             <Advanced />
           </AuthRoute>
         }
         path='/advanced'
         />

<Route 
         element = {
           <AuthRoute>
             <Premium />
           </AuthRoute>
         }
         path='/premium'
         />

         {/* end of protected route */}
      </Routes>
      </>
      </Router>
     
    </div>
  );
}

export default App;
