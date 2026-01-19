"use client";

import React, { useContext, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "../../providers/AuthProvider.jsx";
import { IoIosArrowDown, IoMdMenu, IoMdClose, IoMdSettings, IoMdLogOut, IoMdAddCircle, IoMdGrid, IoMdPerson } from "react-icons/io";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out.");
        setUserMenuOpen(false);
        setIsOpen(false);
      })
      .catch((error) => console.log(error));
    router.push("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#2D336B] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-100 transition-transform group-hover:scale-105">
              W
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Watch<span className="text-[#2D336B]">Aura</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className={`text-sm font-bold transition-colors duration-200 ${pathname === link.path ? "text-[#2D336B]" : "text-gray-500 hover:text-gray-900"}`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth & User Dropdown */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                >
                  <img
                    src={user?.photoURL || "https://ui-avatars.com/api/?name=User&background=2D336B&color=fff"}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
                    alt="user"
                  />
                  <IoIosArrowDown className={`text-gray-400 transition-transform duration-300 ${userMenuOpen ? "rotate-180" : ""}`} size={16} />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-gray-50 mb-1">
                      <p className="text-sm font-bold text-gray-900 truncate">{user.displayName}</p>
                      <p className="text-xs text-gray-400 truncate">{user.email}</p>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#2D336B] transition-colors"
                    >
                      <IoMdGrid size={18} /> Dashboard
                    </Link>

                    <Link
                      href="/add-watch"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#2D336B] transition-colors"
                    >
                      <IoMdAddCircle size={18} /> Add New Watch
                    </Link>

                    <Link
                      href="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#2D336B] transition-colors"
                    >
                      <IoMdPerson size={18} /> My Profile
                    </Link>

                    <Link
                      href="/settings"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#2D336B] transition-colors"
                    >
                      <IoMdSettings size={18} /> Settings
                    </Link>

                    <div className="h-px bg-gray-50 my-1"></div>

                    <button onClick={handleLogOut} className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 font-bold transition-colors">
                      <IoMdLogOut size={18} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/auth/login" className="text-sm font-bold text-gray-600 hover:text-[#2D336B] transition-all px-4 py-2">
                  Log In
                </Link>
                <Link href="/auth/register" className="bg-[#2D336B] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-indigo-100 transition-all active:scale-95">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors">
              {isOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}
      >
        <div className="px-6 py-8 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} className={`text-lg font-bold ${pathname === link.path ? "text-[#2D336B]" : "text-gray-700 hover:text-gray-900"}`}>
              {link.name}
            </Link>
          ))}

          <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
            {user ? (
              <>
                <Link href="/dashboard" onClick={() => setIsOpen(false)} className="text-gray-700 font-bold flex items-center gap-3 py-2">
                  <IoMdGrid className="text-[#2D336B]" /> Dashboard
                </Link>
                <Link href="/add-watch" onClick={() => setIsOpen(false)} className="text-gray-700 font-bold flex items-center gap-3 py-2">
                  <IoMdAddCircle className="text-[#2D336B]" /> Add Watch
                </Link>
                <button onClick={handleLogOut} className="w-full bg-red-50 text-red-600 py-4 rounded-xl font-bold flex items-center justify-center gap-2 mt-2">
                  <IoMdLogOut /> Sign Out
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/auth/login" onClick={() => setIsOpen(false)} className="block w-full border border-gray-200 text-gray-700 text-center py-4 rounded-xl font-bold hover:bg-gray-50">
                  Log In
                </Link>
                <Link href="/auth/register" onClick={() => setIsOpen(false)} className="block w-full bg-[#2D336B] text-white text-center py-4 rounded-xl font-bold">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
