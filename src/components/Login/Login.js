import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/logo/Google_logo.png";
import { auth } from "../../firebase.init";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={() => signInWithGoogle()}>
        <img className="w-10" src={googleLogo} alt="" /> google
      </button>
    </div>
  );
};

export default Login;
