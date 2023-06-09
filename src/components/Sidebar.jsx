import React from "react";
import home from "../assets/images/icons/home.png";
import brief from "../assets/images/icons/brief.png";
import info from "../assets/images/icons/info.png";
import logout from "../assets/images/icons/logout.png";
import opportunity from "../assets/images/icons/opportunity.png";
import saved from "../assets/images/icons/saved.png";
import settings from "../assets/images/icons/settings.png";
import user from "../assets/images/icons/user.png";

const Sidebar = () => {
  const upperNavs = [
    {
      icon: home,
      title: "Overview",
    },
    {
      icon: opportunity,
      title: "Opportunity",
    },
    {
      icon: user,
      title: "My Components",
    },
    {
      icon: brief,
      title: "Brief",
    },
    {
      icon: saved,
      title: "Saved",
    },
  ];
  const lowerNavs = [
    {
      icon: settings,
      title: "Settings",
    },
    {
      icon: info,
      title: "Help",
    },
    {
      icon: logout,
      title: "Log Out",
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__search">
          <div className="sidebar__search--gradient"></div>
          <i className="fa-solid fa-search"></i>
        </div>
        <p className="sidebar__brand--text">Concured</p>
      </div>
      <div className="sidebar__items">
        {upperNavs.map((item, index) => (
          <div
            key={index}
            className={`sidebar__items--item ${index === 0 ? "active" : ""}`}
          >
            <div className="sidebar__items--icon">
              <img alt="" src={item.icon} />
            </div>
            <p style={{ color: `${index === 0 ? "#2B2F42" : "#000"}` }}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="sidebar__items">
        {lowerNavs.map((item, index) => (
          <div key={index} className="sidebar__items--item">
            <div className="sidebar__items--icon">
              <img alt="" src={item.icon} />
            </div>
            <p
              style={{
                color: `${index === lowerNavs.length - 1 ? "#928484" : "#000"}`,
              }}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
