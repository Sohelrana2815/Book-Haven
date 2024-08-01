import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-worksans">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-worksans">
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 container mx-auto max-w-screen-3xl px-4 mt-12 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <p className="btn btn-ghost text-lg lg:text-xl font-playfair">Book Haven</p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end font-worksans flex items-center space-x-4">
          <div className="flex space-x-2">
            <button className="btn btn-sm btn-info lg:btn lg:btn-primary">
              Sign In
            </button>
            <button className="btn btn-sm btn-success  lg:btn lg:btn-secondary">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
