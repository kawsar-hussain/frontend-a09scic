import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../Provider/AuthProvider";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, sendPasswordResetEmail } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import app from "../../../Firebase/firebase.config";

const Login = () => {
  const { logIn, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();

  // login with email & password
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        // require verified email
        if (!user.emailVerified) {
          // sign out any auto-signed-in user
          signOut(getAuth())
            .then(() => {
              toast.error("Please verify your email before logging in.");
            })
            .catch((err) => console.error(err));
          return;
        }
        // set user in context if available
        if (setUser) setUser(user);
        toast.success("Successfully logged in.");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError("Email or password is incorrect");
      });
  };

  // login with google
  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // Google accounts are typically verified, but check just in case
        if (!user.emailVerified) {
          signOut(getAuth())
            .then(() => toast.error("Please verify your email before logging in."))
            .catch((err) => console.error(err));
          return;
        }
        if (setUser) setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        setError("Google login failed");
      });
  };

  const handleForgetPassword = () => {
    const auth = getAuth(app);
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        email ? toast.info("Password reset email sent! Check your inbox.") : "";
      })
      .catch((error) => {
        console.log(error);
        email === "" ? toast.info("Please enter your email.") : toast.info("Please enter a valid email.");
      });
  };

  return (
    <div className="min-h-[700px] flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] bg-cover bg-center px-4 md:px-0">
      <title>GreenNest - Login</title>
      <div className="card w-full max-w-sm shrink-0 bg-[#78ff7800] backdrop-blur-xl shadow md:max-w-md">
        <h2 className="text-center mt-5 font-bold text-white text-lg md:text-xl">Login Your Account </h2>
        <form onSubmit={handleLogin} className="card-body md:px-6">
          <fieldset className="fieldset *:w-full">
            {/* email */}
            <label className="label text-sm md:text-gray-100">Email</label>
            <input type="email" name="email" className="input placeholder-gray-500 input-sm md:input-md" placeholder="Email" ref={emailRef} required />
            {/* password */}
            <label className="label text-sm md:text-gray-100">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input placeholder-gray-500 input-bordered input-sm md:input-md w-full pr-10 "
                placeholder="Password"
                required
              />
              {/* Toggle Icon */}
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[14px] md:text-[16px] hover:text-gray-700">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div onClick={handleForgetPassword}>
              <a className="link link-hover text-sm md:text-gray-100">Forgot password?</a>
            </div>
            {error && <p className="text-red-500 text-xs md:text-sm">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4 bg-[#00a700] text-white border-none shadow-none btn-sm md:btn-md">
              Login
            </button>
          </fieldset>
          <p className="text-center text-gray-100 mt-2 text-sm md:text-base">
            Don't have an account? {""}
            <Link to="/auth/register" className="text-[#97ff97] underline  font-medium">
              Register
            </Link>
          </p>
        </form>
        <div className="card-body pt-0 md:px-6">
          <div className="flex items-center gap-2">
            <hr className="flex-1 border-gray-200" />
            <span className="text-gray-200 text-center text-xs md:text-sm">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <button className="btn bg-white text-black shadow-none border-[#e5e5e5] h-9" onClick={handleGoogleLogin}>
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
