import  { lazy } from "react";

export const Landing = lazy(() => import("../pages/Landing/index.jsx"));
export const About = lazy(() => import("../components/about/index.jsx"));
export const Login = lazy(() => import("../pages/Login/Login.jsx"));
export const Register = lazy(() => import("../pages/Register/Register.jsx"));
export const EmailVerify = lazy(() => import("../components/emailVerify/index.jsx"))
export const ConfirmDetails = lazy(() => import("../components/ConfirmDetails/index.jsx"))
export const ConfirmOtp = lazy(() => import("../components/confirmOtp/index.jsx"))
