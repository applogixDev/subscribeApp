import { UserOutlined } from "@ant-design/icons";
import { useEffect, useState, useContext } from "react";
import { useNavigate} from 'react-router-dom';
import "./styles.css";
import axios from "axios";
import { UserContext } from "../context";
import moment from 'moment';

const Account = () => {
  const [state, setState] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);
   
  const navigate = useNavigate();
  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get("/subscriptions");
      console.log("subs =>", data);
      setSubscriptions(data.data);
    };

    if (state && state.token) getSubscriptions();
  }, [state && state.token]);

  
  const manageSubscriptions = async () =>{
    const {data} = await axios.get('/customer-portal');
    window.open(data);
  }
  return (
    <>
      {/* <pre>{JSON.stringify(subscriptions,null,4)}</pre> */}
      
      <div className="container">
        <div className="row text-center">
          <UserOutlined className="display-4" />
          <h1 className="pt-3 fw-bold heading-text">Account</h1>
          <p className="lead pb-4 sub-headings">Subscription Status</p>
        </div>

        <div className="row text-center">
          {subscriptions &&
            subscriptions.map((sub) => (
              <div key={sub.id}>
                <section>
                  <hr />
                  <h4 className="fw-bold"><span className="h2 heading-text">{sub.plan.nickname}</span></h4>
                  <h5>
                    {(sub.plan.amount / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: sub.plan.currency,
                    })}
                  </h5>
                  <p><span className="h5 sub-headings">Status:</span> {sub.status}</p>
                  <p>
                  <span className="h5 sub-headings"> Card last 4 digits:</span> {sub.default_payment_method.card.last4}
                  </p>
                  <p><span className="h5 sub-headings"> Current period end:{" "} </span>
                      {moment(sub.current_period_end * 1000).format("dddd, MMMM Do YYYY h:mm:ss a")
                      .toString()}
                  </p>

                  <button onClick={()=> navigate(`/${sub.plan.nickname.toLowerCase()}`)} className="btn btn-info m-2 p-2 text-white">Access</button>
                  <button onClick={manageSubscriptions} className="btn btn-danger m-2 p-2 text-white">Manage Subscription</button>
                </section>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Account;
