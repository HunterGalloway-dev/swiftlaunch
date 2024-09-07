import {
  AlignLeft,
  Bell,
  LogOut,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";
import React from "react";

const DashboardNavbar = () => {
  return (
    <div className="navbar min-h-12 bg-base-300 p-0">
      <div className="navbar-start">
        <button className="btn btn-sm btn-square btn-ghost">
          <AlignLeft size={14} />
        </button>
      </div>
      <div className="navbar-center">
        <label className="input input-xs input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <Search />
        </label>
      </div>
      <div className="navbar-end">
        <button className="btn btn-sm btn-ghost btn-circle">
          <Sun size={16} />
        </button>
        <button className="btn btn-sm btn-ghost btn-circle">
          <div className="indicator">
            <Bell size={16} />
            <span className="badge badge-xs badge-primary indicator-item">
              3
            </span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-ghost btn-circle avatar"
          >
            <div className="w-6 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow"
          >
            <li>
              <a>
                <User />
                Profile
              </a>
            </li>
            <li>
              <a>
                <Settings />
                Settings
              </a>
            </li>
            <li>
              <a className="text-warning">
                <LogOut />
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
