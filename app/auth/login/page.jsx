"use client";

import React, { useContext, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../providers/AuthProvider.jsx";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, sendPasswordResetEmail } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import app from "../../firebase/firebase.config.jsx";

export default function Login() {
  const { logIn, user } = useContext(AuthContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef();

  if (user) {
    router.push("/");
    return null;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          signOut(getAuth()).then(() => toast.error("Please verify your email."));
          return;
        }
        toast.success("Logged in successfully!");
        router.push("/");
      })
      .catch(() => setError("Invalid email or password."));
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then(() => router.push("/"))
      .catch(() => setError("Google login failed."));
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(getAuth(app), email)
      .then(() => email && toast.info("Reset email sent!"))
      .catch(() => toast.error("Enter a valid email."));
  };

  return (
    <div className="py-20 flex items-center justify-center bg-gradient-to-b bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-3xl p-10 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2 text-sm">Sign in to continue to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition"
              required
            />
            {/* Eye toggle */}
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-700 transition">
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-1">
            <button type="button" onClick={handleForgetPassword} className="text-xs text-blue-600 hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Error */}
          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-semibold">{error}</div>}

          {/* Submit */}
          <button className="w-full bg-[#2D336B] hover:bg-black text-white font-bold py-3 rounded-xl transition">Sign In</button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-400 text-sm uppercase font-semibold">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full border border-gray-300 rounded-xl py-3 text-sm font-medium hover:bg-gray-50 transition">
          <FaEyeSlash className="hidden" />
          <svg aria-label="Google logo" className="mr-1" width="22" height="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="mt-8 text-center text-gray-600 text-sm">
          New here?{" "}
          <Link href="/auth/register" className="text-[#2D336B] font-semibold hover:underline underline-offset-2">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
