"use client";

import { AuthProvider } from "./providers/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar.jsx";

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <Navbar />
      {children}
      <ToastContainer position="top-center" autoClose={2000} />
    </AuthProvider>
  );
}
