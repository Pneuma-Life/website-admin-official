import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Styles/SideNav.css";
import "./Styles/Responsiveness.css";
import realLogo from "../assets/pneuma.png";
import { FaUser, FaHome } from "react-icons/fa";
import { BsPencilSquare, BsGrid1X2Fill, BsCart3 } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";
import { BiGift } from "react-icons/bi";
import { GiSurroundedEye } from "react-icons/gi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function SideNav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const activeStyle = {
    color: "red",
  };
  const normalStyle = {
    color: "white",
  };

  return (
    <div>
      <div className="top-nav">
        <nav className="whole">
          <div>
            <div className="background">
              <ul className="first-ul">
                <div className="drop-command" onClick={handleClick}>
                  {click ? <HiOutlineMenuAlt1 /> : <HiOutlineMenuAlt1 />}
                  <h5>Menu</h5>
                </div>
                <NavLink to="/home"><img className="real-logo" src={realLogo} alt="" /></NavLink>

              </ul>
            </div>
            <div className="miss">
              <ul className={click ? "main-ul active" : "main-ul "}>
                <li>
                  <NavLink
                    to="/home"
                    style={({ isActive }) =>
                      isActive ? activeStyle : normalStyle
                    }
                  >
                    <FaHome />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/store"
                    style={({ isActive }) =>
                      isActive ? activeStyle : normalStyle
                    }
                  >
                    <BsPencilSquare />
                    Store
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    style={({ isActive }) =>
                      isActive ? activeStyle : normalStyle
                    }
                  >
                    <MdBarChart />
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/events"
                    style={({ isActive }) =>
                      isActive ? activeStyle : normalStyle
                    }
                  >
                    <BsGrid1X2Fill />
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/livestream"
                    style={({ isActive }) =>
                      isActive ? activeStyle : normalStyle
                    }
                  >
                    <FaUser />
                    Live stream
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/give"
                    style={({ isActive }) =>
                      isActive ? activeStyle : normalStyle
                    }
                  >
                    <GiSurroundedEye />
                    Give
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/newsletter"
                    style={({ isActive }) =>
                      isActive ? activeStyle : normalStyle
                    }
                  >
                    <BsCart3 />
                    Newsletter
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/birthday"
                    style={({ isActive }) =>
                      isActive ? activeStyle : normalStyle
                    }
                  >
                    <BiGift />
                    Birthdays
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="side-nav">
        <nav>
          <li className="logo">
            <img className="real-logo" src={realLogo} alt="" />
            <Link to="/home">Pneuma Life</Link>
          </li>
          <ul>
            <li>
              <NavLink
                to="/home"
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
              >
                <FaHome />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/store"
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
              >
                <BsPencilSquare />
                Store
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
              >
                <MdBarChart />
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/events"
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
              >
                <BsGrid1X2Fill />
                Events
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/livestream"
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
              >
                <FaUser />
                Live stream
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/give"
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
              >
                <GiSurroundedEye />
                Give
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/newsletter"
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
              >
                <BsCart3 />
                Newsletter
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/birthday"
                style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
              >
                <BiGift />
                Birthdays
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <div className="text-below">
          <p> [2Cor 2 vs 14 ]</p>
          <p>
            Now thanks be unto God, which always causeth us to triumph in
            Christ, and maketh manifest the savour of his knowledge by us in in
            every place.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default SideNav;
