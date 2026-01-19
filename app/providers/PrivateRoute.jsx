"use client";

import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider.jsx";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "../components/Loader.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !user?.emailVerified)) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loader />;
  }

  // Require verified email before allowing access
  if (user && user?.emailVerified) {
    return children;
  }

  return null;
};

export default PrivateRoute;
