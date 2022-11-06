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
    <div className="container mx-auto flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <div className="divider">OR</div>
          <button
            className="btn btn-ghost btn-active"
            onClick={() => signInWithGoogle()}
          >
            <img className="w-10" src={googleLogo} alt="" /> google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
