"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../providers/AuthProvider.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";

export default function Register() {
  const { createUser, updateUser, user } = useContext(AuthContext);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Redirect if already authenticated
  if (user) {
    router.push("/");
    return null;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must contain one uppercase, one lowercase and be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            e.target.reset();

            sendEmailVerification(result.user)
              .then(() => {
                return signOut(getAuth());
              })
              .then(() => {
                toast.success("Registration successful! Please verify your email and then login.");
                router.push("/");
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setError("Email already in use.");
        console.log(error.code, error.message);
      });
  };

  return (
    <div className="min-h-[700px] flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1533460004989-cef01064af7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] bg-cover bg-center px-4 md:px-0">
      <div className="card w-full max-w-sm shrink-0 bg-[#78dd7900] backdrop-blur-xl shadow md:max-w-md">
        <h2 className="text-center mt-5 font-bold text-white text-lg md:text-xl">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body md:px-6">
          <fieldset className="fieldset *:w-full">
            <input type="text" name="name" className="input placeholder-gray-500 input-sm md:input-md" placeholder="Name" required />
            <input type="text" name="photoURL" className="input placeholder-gray-500 input-sm md:input-md" placeholder="Photo-URL" required />
            <input type="email" name="email" className="input placeholder-gray-500 input-sm md:input-md" placeholder="Email" required />
            {/* password */}
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input placeholder-gray-500 input-bordered input-sm md:input-md w-full pr-10"
                placeholder="Password"
                required
              />
              {/* toggle Icon */}
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-[16px] hover:text-gray-700">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <p className="text-red-500 text-xs md:text-sm">{error}</p>

            <button type="submit" className="btn btn-neutral mt-4 bg-[#00a700] text-white border-none shadow-none btn-sm md:btn-md">
              Register
            </button>
          </fieldset>

          <p className="text-center mt-2 text-sm text-gray-100 md:text-base">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#97ff97] underline font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
