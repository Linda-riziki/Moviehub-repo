import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar bg-blue-500 text-white px-4">
      {/* Left Section: MovieHub Name */}
      <div className="flex-1">
        <a className="text-black font-bold text-2xl">MovieHub</a>
      </div>

      {/* Right Section: Navigation Links */}
      <div className="flex-row">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <a className="hover:text-gray-200">Latest Shows</a>
          </li>
          <li>
            <a className="hover:text-gray-200">Favourites</a>
          </li>
          <li>
            <a className="hover:text-gray-200">Top Rated</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
