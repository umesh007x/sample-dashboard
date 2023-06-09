import React, { useState } from "react";
import logo from "../assets/images/icons/logo.png";
import add from "../assets/images/icons/add.png";
import question from "../assets/images/icons/question.png";
import admin from "../assets/images/icons/admin.png";
import VisitorCount from "./analytics/VisitorCount";
import Traffic from "./analytics/Traffic";
const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([60000, 20000, 60000, 30000, 80000, 60000]);
  const days = ["30 days", "90 days", "6 months", "12 months"];

  const handleSetTabIndex = (i, day) => {
    setActiveIndex(i);
    if (day === "30 days") {
      setData([60000, 20000, 60000, 30000, 80000, 60000]);
    } else if (day === "90 days") {
      setData([20000, 50000, 68000, 10000, 90000, 40000]);
    } else if (day === "6 months") {
      setData([80000, 20000, 60000, 50000, 10000, 40000]);
    } else if (day === "12 months") {
      setData([10000, 30000, 80000, 70000, 60000, 20000]);
    }
  };

  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__firstRow">
          <div className="firstRow__contentOne">
            <div className="firstRow__contentOne--logo">
              <img alt="" src={logo} />
            </div>
            <div className="firstRow__contentOne--dropdown">
              <p>Boro team</p>
              <div>
                <i className="fa-solid fa-sort-down"></i>
              </div>
            </div>
            <img alt="" src={add} />
          </div>
          <div className="firstRow__contentTwo">
            <div className="firstRow__contentTwo--dropdown">
              <div className="firstRow__contentTwo--logo">
                <img alt="" src={admin} />
              </div>
              <p>Zahra hasth...</p>
              <div className="firstRow__contentTwo--arrow">
                <i className="fa-solid fa-sort-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="main__header__secondRow">
          <div className="secondRow__contentOne">
            <h1>Poroject statistic</h1>
            <img alt="" src={question} />
          </div>
          <div className="secondRow__contentTwo">
            {days.map((item, index) => (
              <div
                onClick={() => handleSetTabIndex(index, item)}
                key={index}
                className={`secondRow__contentTwo--days ${
                  index === activeIndex ? "active-day" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="main__analytics">
        <VisitorCount data={data} />
        <Traffic />
      </div>
    </div>
  );
};
export default Main;
