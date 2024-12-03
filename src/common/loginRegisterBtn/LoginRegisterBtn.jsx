import React from "react";
import { Link } from "react-router-dom";
import "./loginregisterbtn.scss";
import google from "../../assets/Images/google1.png";
import apple from "../../assets/Images/apple1.png";

const LoginRegisterBtn = ({ name, from }) => {
  const isLogin = from == "login";
  return (
    <div>
      <div className="btn_wrapper">
        <button className="btn">{name}</button>
        <p className="already_account">
          {isLogin ? "Don’t have an account yet?" : "Already have an account ?"}
          <Link to={isLogin ? "/register" : "/login"} className="login_link">
            {" "}
            {isLogin ? "Register" : "Login Now"}
          </Link>
        </p>
      </div>
      <div className="container">
        <div className="line"></div>
        <div className="or">OR</div>
        <div className="buttons">
          <button className="google-button">
            <img
              src={google}
              alt="Google"
            />
          </button>
          <button className="apple-button">
            <img
              src={apple}
              alt="Apple"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterBtn;
