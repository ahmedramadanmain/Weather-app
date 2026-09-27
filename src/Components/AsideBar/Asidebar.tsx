import logo from "../../assets/images/logo.svg";

import { FaHome, FaCalendarAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdInformationCircleOutline, IoMdTime } from "react-icons/io";
import { FaGear } from "react-icons/fa6";

import "./aside.css";
import { Link } from "react-router-dom";

const AsideBar = () => {
  return (
    <aside className="sidebar bg-main-color">

      <div className="sidebar-inner">

        <h2>
          <span className="logo">
            <img src={logo} alt="logo" />
          </span>

          <span className="logo-text">
            WeatherPro
          </span>
        </h2>

        <ul className="list-unstyled">

          <li>
            <Link to="/Home">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/forecast">
              <FaCalendarAlt />
              <span>Forecast</span>
            </Link>
          </li>

          <li>
            <Link to="/search">
              <IoSearchSharp />
              <span>Search</span>
            </Link>
          </li>

          <li>
            <Link to="/details">
              <IoMdInformationCircleOutline />
              <span>Details</span>
            </Link>
          </li>

          <li>
            <Link to="/historical">
              <IoMdTime />
              <span>Historical</span>
            </Link>
          </li>

        </ul>

        <Link to="/Profile" className="setting-icon">
          <FaGear />
          <span>Settings</span>
        </Link>

      </div>

    </aside>
  );
};

export default AsideBar;