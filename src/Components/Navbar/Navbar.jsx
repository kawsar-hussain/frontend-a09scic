import React, { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Successfully logged out."))
      .catch((error) => console.log(error));
    navigate("/");
  };

  // Updated navStyles for better spacing
  const navStyles = ({ isActive }) =>
    `relative px-4 py-2 transition-all duration-300 text-[11px] uppercase tracking-[0.2em] font-bold rounded-full ${
      isActive ? "bg-[#2D336B] text-white shadow-md" : "text-slate-500 hover:text-[#2D336B] hover:bg-slate-50"
    }`;

  // Specialized style for the "Add Watch" button to make it pop
  const addWatchStyle =
    "px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-black bg-[#E07A7A] text-white rounded-full hover:bg-[#c96565] transition-all shadow-lg shadow-red-100 flex items-center gap-2";

  const li = (
    <>
      <NavLink to="/" className={navStyles}>
        Home
      </NavLink>
      <NavLink to="/collections" className={navStyles}>
        Collections
      </NavLink>

      {/* Featured "Add Watch" Link */}
      <NavLink to="/add-watch" className={({ isActive }) => (isActive ? `${addWatchStyle} ring-2 ring-offset-2 ring-[#E07A7A]` : addWatchStyle)}>
        <span className="text-lg leading-none">+</span> Add Watch
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full px-4 py-4 lg:px-10">
      <nav className="mx-auto max-w-7xl bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] px-6 py-3 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 bg-[#2D336B] rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-lg shadow-indigo-200">
                <span className="text-white font-serif text-xl italic">A</span>
                <div className="absolute inset-0 border border-white/20 rounded-xl"></div>
              </div>
              <span className="text-xl font-black tracking-tighter text-[#2D336B] uppercase">
                Watch<span className="text-slate-400 font-light">Aura</span>
              </span>
            </Link>

            {/* Desktop Center Links - Integrated into the left flow */}
            <div className="hidden lg:flex items-center gap-2 border-l border-slate-100 pl-8 ml-2">{li}</div>
          </div>

          {/* Action Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <button onClick={() => setDropdown(!dropdown)} className="flex items-center gap-2 p-1 pr-4 bg-slate-50 border border-slate-200 rounded-full hover:border-[#2D336B] transition-all">
                  <img src={user?.photoURL || "https://ui-avatars.com/api/?name=User&background=2D336B&color=fff"} alt="user" className="w-8 h-8 rounded-full object-cover ring-2 ring-white" />
                  <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-tighter text-slate-600">Account</span>
                  {dropdown ? <IoIosArrowUp className="text-slate-400" size={14} /> : <IoIosArrowDown className="text-slate-400" size={14} />}
                </button>

                {/* Smart Dropdown Card */}
                {dropdown && (
                  <div className="absolute right-0 mt-4 w-64 bg-white border border-slate-100 shadow-2xl rounded-[1.5rem] overflow-hidden animate-in fade-in zoom-in duration-200">
                    <div className="p-6 text-center bg-gradient-to-b from-slate-50 to-white">
                      <img src={user?.photoURL} className="w-16 h-16 mx-auto rounded-2xl shadow-md border-2 border-white mb-3" alt="" />
                      <h3 className="font-bold text-[#2D336B]">{user.displayName}</h3>
                      <p className="text-[10px] text-slate-400 uppercase mt-1">{user.email}</p>
                    </div>
                    <div className="p-4 pt-0 flex flex-col gap-2">
                      <Link to="/profile" className="w-full py-2 text-center text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#2D336B] transition-colors">
                        Settings
                      </Link>
                      <button
                        onClick={handleLogOut}
                        className="w-full py-3 bg-[#2D336B] hover:bg-[#1a1f4d] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all shadow-md shadow-indigo-100"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/auth/login" className="hidden sm:block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#2D336B] transition-colors">
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#FFF2F2] text-[#E07A7A] hover:bg-[#E07A7A] hover:text-white transition-all duration-300 rounded-full border border-[#FFDADA]"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="lg:hidden dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle bg-slate-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-white rounded-2xl w-52 border border-slate-100">
                {li}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
