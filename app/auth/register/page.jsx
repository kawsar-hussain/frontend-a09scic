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
      setError("Password must contain one uppercase, one lowercase, and be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            e.target.reset();
            toast.success("Registration successful! You can now login.");
            router.push("/auth/login"); // redirect to login or homepage
          })
          .catch((err) => console.error(err));
      })

      .catch(() => setError("Email already in use."));
  };

  return (
    <div className="py-20 flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Create Account</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">Fill in your details to register</p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition"
            required
          />

          {/* Photo URL */}
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#2D336B] transition"
              required
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}

          {/* Register Button */}
          <button type="submit" className="w-full bg-[#2D336B] hover:bg-black text-white font-bold py-3 rounded-xl transition">
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-600 text-sm md:text-base">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-[#2D336B] font-semibold hover:underline underline-offset-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
