import React from "react";
import "./emailVerify.scss"
import img1 from "../../assets/Images/get_started_img.png"
import img2 from "../../assets/Images/get_started_img2.png"
import img3 from "../../assets/Images/get_started_img3.png"
import { useNavigate } from "react-router-dom";


const EmailVerify = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="email_verify">
      <div className="inner_card">
        <div className="image_wrapper">
          <img src={img1} alt="img1"/>
        </div>

        <h4>Stay in the Loop, Always</h4>

        <p>
          Track your application progress in real-time and never miss a single
          update
        </p>
      </div>

      <div className="inner_card">
        <div className="image_wrapper">
        <img src={img2} alt="img2"/>
        </div>

        <h4>Find Your Perfect Match</h4>

        <p>Instantly check your eligibility for top universities and courses tailored to your goals</p>
      </div>

      <div className="inner_card">
        <div className="image_wrapper">
        <img src={img3} alt="img3"/>
        </div>

        <h4>Expert Support, Anytime</h4>

        <p>Connect directly with admission experts through chats and calls, all within the app</p>
      </div>
    
     
    </div>

      <div className="get_started_btn_wrapper">
        <button className="get_started_btn" onClick={() =>  navigate("/register")}>Let’s get started</button>
      </div>

      </>

    
  );
};

export default EmailVerify;
