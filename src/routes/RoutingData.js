import { publicRouteObj } from "../staticObj/routing";
import { About, ConfirmDetails, ConfirmOtp, EmailVerify, Landing, Login, Register } from "./LazyRoute";

const { login, register, about,confirmOtp,emailVerify, confirmDetails } = publicRouteObj;

export const publicRoutesData = [
  {
    path: login,
    component: <Login />,
  },
  {
    path: register,
    component: <Register />,
  },
  {
    path: about,
    component: <About />,
  },

  {
    path: emailVerify,
    component: <EmailVerify />,
  },

  {
    path: confirmDetails,
    component: <ConfirmDetails />,
  },

  {
    path: confirmOtp,
    component: <ConfirmOtp />,
  },

];

