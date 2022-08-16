import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../data/SidebarData";
import { IconContext } from "react-icons";

function Dashboard() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const closeSidebar = () => setSidebar(false);

  return (
    <div className="">
      <IconContext.Provider value={{ color: "#3E497F", size: "1.3em" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav
          className={sidebar ? "nav-menu active" : "nav-menu closed-nav-menu"}
        >
          <ul
            className="nav-menu-items d-grid justify-content-start"
            onClick={showSidebar}
          >
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span
                      className={`ps-2 sidebar-text ${
                        !sidebar && "closed-sidebar-text"
                      }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Dashboard;
