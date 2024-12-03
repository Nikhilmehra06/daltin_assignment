import React, { useState } from "react";
import styles from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";

import LoginRegisterBtn from "../../common/loginRegisterBtn/LoginRegisterBtn";

const Login = () => {
  const navigate = useNavigate();
  const initData = {
    email: "",
    password: "",
  };

  const initError = {
    email: "",
    password: "",
  };

  const [data, setData] = useState({ ...initData });
  const [error, setError] = useState({ ...initError });

  const handleValidation = (data) => {
    let isValidated = true;
    let copyerror = { ...error };
    for (let key in data) {
      let value = data[key].toString().trim();
      let emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      switch (key) {
        case "email":
          if (!value) {
            copyerror.email = "Email is required";
            isValidated = false;
          } else if (!emailRegex.test(value)) {
            copyerror.email = "Enter valid email";
            isValidated = false;
          } else {
            copyerror.email = "";
          }

          break;

        case "password":
          if (!value) {
            copyerror.password = "Password is requires";
            isValidated = false;
          } else {
            copyerror.password = "";
          }

          break;
        default:
      }
    }
    setError({ ...copyerror });
    return isValidated;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleValidation({ [name]: value });
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    const res = await handleValidation({ data });
    if (res) {
      navigate("/confirmOtp");
    }
    e.preventDefault();
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Daltin</h1>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={data.email}
                name="email"
                onChange={handleChange}
                className={styles.input}
              />
              <p style={{ color: "red" }}>{error?.email}</p>
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                className={styles.input}
              />
              <p style={{ color: "red" }}>{error?.password}</p>
            </div>

            <LoginRegisterBtn name="Login" from="login" />
          </form>
        </div>

        <div className={styles.right}>
          <h1>Welcome Back, Future Achiever!</h1>

          <p>We’re excited to continue where you left off.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
