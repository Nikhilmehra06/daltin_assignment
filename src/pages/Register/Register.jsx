import React, { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import LoginRegisterBtn from "../../common/loginRegisterBtn/LoginRegisterBtn";
const Register = () => {
  const navigate = useNavigate();

  const initData = {
    full_name: "",
    email: "",
    confirm_password: "",
    password: "",
  };

  const initError = {
    full_name: "",
    email: "",
    confirm_password: "",
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
        case "full_name":
          if (!value) {
            copyerror.full_name = "Full name is required";
            isValidated = false;
          } else {
            copyerror.full_name = "";
          }

          break;

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

        case "confirm_password":
          if (!value) {
            copyerror.confirm_password = "Confirm password  is required";
            isValidated = false;
          } else if (value !== data.password) {
            copyerror.confirm_password =
              "Confirm password  must be same as password";
            isValidated = false;
          } else {
            copyerror.confirm_password = "";
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
      navigate("/confirmDetails");
    }
    e.preventDefault();
  };

  const { full_name, confirm_password, email, password } = data;

  return (
    <div className={"signup_form_container"}>
      <div className={"left"}>
        <h1>Your Journey Abroad Starts Here!</h1>

        <p>
          Join thousands of students who’ve found their dream universities with
          us.
        </p>
      </div>

      <div className={"right"}>
        <form className={"form_container"} onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={full_name}
              name="full_name"
              onChange={handleChange}
              className={"input"}
            />
            <p style={{ color: "red" }}>{error?.full_name}</p>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
              name="email"
              className={"input"}
            />
            <p style={{ color: "red" }}>{error?.email}</p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              className={"input"}
            />
            <p style={{ color: "red" }}>{error?.password}</p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Confirm Password"
              value={confirm_password}
              name="confirm_password"
              onChange={handleChange}
              className={"input"}
            />
            <p style={{ color: "red" }}>{error?.confirm_password}</p>
          </div>

          <LoginRegisterBtn name={"Register Now"} from={"Register"} />
        </form>
      </div>
    </div>
  );
};

export default Register;
