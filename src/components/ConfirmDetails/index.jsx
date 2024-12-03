import React, { useState } from "react";
import "./confirmDetails.scss";
import { useNavigate } from "react-router-dom";

const ConfirmDetails = () => {
  const navigate = useNavigate();
  const initData = {
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    number: "",
  };

  const initError = {
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    number: "",
  };

  const [data, setData] = useState({ ...initData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const { first_name, middle_name, last_name, email, number } = data;

  return (
    <div className="details_container">
      <form className="form_container" onSubmit={() => hanldeSubmit()}>
        <h1>Hey, Somya</h1>
        <p>
          Let’s get to know you better so we can map out your perfect study
          journey
        </p>
        <input
          type="text"
          placeholder="First name"
          value={first_name}
          onChange={handleChange}
          name="first_name"
          className={"input"}
        />

        <input
          type="text"
          placeholder="Middle Name (Optional)"
          value={middle_name}
          onChange={handleChange}
          name="middle_name"
          className={"input"}
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={last_name}
          onChange={handleChange}
          className={"input"}
        />

        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
          value={email}
          className={"input"}
        />

        <input
          type="text"
          name="password"
          value={number}
          onChange={handleChange}
          placeholder="Primary Contact Details"
          className={"input"}
        />

        <div className="btn_wrapper">
          <button className="btn" onClick={() => hanldeSubmit()}>
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmDetails;
