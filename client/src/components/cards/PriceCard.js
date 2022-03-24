import { useContext } from 'react';
import './priceCard.css';
import { UserContext } from '../../context';
const plans = [
  {
    id: 1,
    type: "Monthly",
    text1: "Get Access To Recorded Videos",
    text2: "On demand content",
    text3: "Learn according to your schedule",
    text4: "Queries Resolved through text message",
  },
  {
    id: 2,
    type: "One Time Payment",
    text1: "Group Training",
    text2: "Live Sessions",
    text3: "Recordings and content shared",
    text4: "Live Projects after completion",
  },
  {
    id: 3,
    type: "One Time Payment",
    text1: "One To One Training",
    text2: "Live Sessions",
    text3: "Recordings and content shared",
    text4: "Live Projects after completion",
  },
];

const PriceCard = ({ price,handleSubscription,userSubscriptions }) => {
  const[state] = useContext(UserContext);
  
  const dynamicType = (price) => {
    if (price.nickname === "BASIC") {
      return "Monthly";
    } else if (price.nickname === "ADVANCED") {
      return "One Time";
    } else if (price.nickname === "PREMIUM") {
      return "One Time";
    }
  };

  const dynamicText1 = (price) =>{
    if (price.nickname === "BASIC") {
      return "Access To Content";
    } else if (price.nickname === "ADVANCED") {
      return "Group Training";
    } else if (price.nickname === "PREMIUM") {
      return "One To One Training";
    }

  }

  const dynamicText2 = (price) =>{
    if (price.nickname === "BASIC") {
      return "On demand content";
    } else if (price.nickname === "ADVANCED") {
      return "Live Sessions";
    } else if (price.nickname === "PREMIUM") {
      return "Live Sessions";
    }

  }

  const dynamicText3 = (price) =>{
    if (price.nickname === "BASIC") {
      return "Learn according to your schedule";
    } else if (price.nickname === "ADVANCED") {
      return "Recordings and content shared";
    } else if (price.nickname === "PREMIUM") {
      return "Recordings and content shared";
    }

  }

  const dynamicText4 = (price) =>{
    if (price.nickname === "BASIC") {
      return "Queries Resolved through text message";
    } else if (price.nickname === "ADVANCED") {
      return "Live Projects after completion";
    } else if (price.nickname === "PREMIUM") {
      return "Live Projects after completion";
    }

  }

  const bgCol = () => {
    if(price.nickname === "BASIC"){
   return  "bg-info";

    } else if(price.nickname === "ADVANCED")
    {
      return "bg-warning";
    }
    else if(price.nickname === "PREMIUM")
    {
      return "bg-danger";
    }
    
  }

  

  

  const buttonText = () =>{

    return state && state.token ? 'Buy Plan' : 'Sign Up';

  }

  //const handleSubscription = (price) => {};

  return (
    <>
      <div className="col m-2 p-2 border shadow">
        <div className={`card  rounded-3 shadow-sm text-white  ${bgCol()}`}>
          <div className={`card-header py-3 bg-dark`}>
            <h4 className="my-0 fw-normal">{price.nickname}</h4>
          </div>

          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              {(price.unit_amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "GBP",
              })}{" "}
              <small className="text fw-light h2">
                {dynamicType(price)}
              </small>
            </h1>

            <ul className="plan-list list-unstyled mt-3 mb-4">
              <li>{dynamicText1(price)}</li>
              <li>{dynamicText2(price)}</li>
              <li>{dynamicText3(price)}</li>
              <li>{dynamicText4(price)}</li>
            </ul>

            {/* <Link to="/register"> */}
            <button className= "btn btn-lg btn-dark text-white btn-outline-light" onClick={(e) => handleSubscription(e,price)}>
              {userSubscriptions && userSubscriptions.includes(price.id) 
              ? 'Access Plan' 
              : buttonText()}
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
