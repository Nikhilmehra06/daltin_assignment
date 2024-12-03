import React from "react";
import "./confirmOtp.scss"
import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";


const ConfirmOtp = () => {
    const navigate = useNavigate()
  return (
    <div className="details_container">
      <form className="form_container">
        <h1>Verify Your Code</h1>
        <p>
        Enter the code you just received on your mobile number ending with *******456.
        </p>
<OTPInput
                    // value={otp}
                    // onChange={(value) => handleChange(value, field.onChange)}
                    OTPLength={6}
                    otpType="number"
                    autoFocus={true}
                  />

<div className="btn_wrapper">
<button className="btn" onClick={() => navigate("/")}>Verify</button>
</div>
      </form>
    </div>
  );
};

export default ConfirmOtp;
