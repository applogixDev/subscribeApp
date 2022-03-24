import React,{useEffect, useState, useContext} from "react";
import { useNavigate} from 'react-router-dom';
import "./styles.css";
import PriceCard from "../components/cards/PriceCard";
import axios from 'axios';
import { UserContext } from "../context";

const Home = (props) => {
  const[state,setState] = useContext(UserContext);
  const [prices,setPrices] = useState([]);
  const[userSubscriptions,setUserSubscriptions] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
     fetchPrices();
  },[]);

  useEffect(() => {
    let result = [];
    const check = () =>
      state && 
      state.user && 
      state.user.subscriptions &&
      state.user.subscriptions.map((sub) => {
        result.push(sub.plan.id);
      });
      check();
    setUserSubscriptions(result);
  }, [state && state.user]);


  const fetchPrices = async () => {
    const {data} = await axios.get('/prices');
    console.log("get prices",data);
    setPrices(data);
   
  };

  
  
const handleClick = async (e,price) =>{
  e.preventDefault();
  if(userSubscriptions && userSubscriptions.includes(price.id))
  {
    navigate(`/${price.nickname.toLowerCase()}`)
    return;
  }
  //console.log(`plan clicked`,price.id);
  if(state && state.token)
  {
    const {data} = await axios.post('/create-subscription',{
      priceId: price.id,
    });
    window.open(data);
  } else {
     navigate('/register');
  }
  

}
  return (
    <div className="container-fluid">
      <div className="row  text-center">
        <h1 className="pt-5 fw-bold heading-text">Flexible Plans To Enroll For Courses</h1>
        <p className="lead pb-4 sub-headings">
          Choose a plan that works best for you
        </p>
      </div>
{/* col-md-6 offset-md-3 */}
      <div className="row  col-md-6 offset-md-3 text-center">
        {/* {plans.map((plan)=>{
          return <PriceCard key={plan.id}{...plan}  ></PriceCard>

        })} */}
         
        {prices && 
        prices.map((price)=> ( 
        <PriceCard 
        key={price.id} 
        price={price}  
        handleSubscription={handleClick}
        userSubscriptions={userSubscriptions}
        />
        ))}

       
       
      </div>
    </div>
  );
};

export default Home;
