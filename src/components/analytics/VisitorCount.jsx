import React from "react";
import { Chart as ChartJs, registerables, defaults } from "chart.js";
import { Line } from "react-chartjs-2";
import chart from "../../assets/images/icons/chart.png";
import cal from "../../assets/images/icons/calendar.png";
import info from "../../assets/images/icons/question.png";
import visitor from "../../assets/images/icons/visitor.png";
import timer from "../../assets/images/icons/timer.png";
defaults.font.family = "Roboto";
ChartJs.register(...registerables);

const VisitorCount = ({ data }) => {
  const linData = {
    labels: ["Feb", "Mar", "Apr", "May", "jun", "Jul"],
    datasets: [
      {
        label: "",
        data: data,
        borderColor: "#8E7CFD",
        borderWidth: 3,
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="visitorcount">
      <div className="visitorcount__visits">
        <div className="visitorcount__visits--header">
          <p>Total visits</p>
          <h1>42,43M</h1>
        </div>
        <div className="visitorcount__linechart">
          <Line
            height={130}
            type="line"
            options={{
              plugins: { legend: { display: false } },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: { display: false, tickColor: "#F0F0F0" },
                  border: { color: "#F0F0F0" },
                },
                x: {
                  border: { display: false },
                  grid: { tickColor: "#F0F0F0", tickWidth: 0.1 },
                },
              },
            }}
            data={linData}
          />
        </div>
      </div>
      <div className="visitorcount__analytics">
        <div className="visitorcount__analytics--row1">
          <span className="gradientBG"></span>
          <div className="visitorcount__analytics--BR">
            <div className="BR__gradient1"></div>
            <div className="BR__gradient2"></div>
            <div className="BR__header">
              <div className="BR__header--icon">
                <img alt="" src={chart} />
              </div>
              <div className="BR__header--data">
                <i className="fa-solid fa-sort-up"></i>
                <p>12%</p>
              </div>
            </div>
            <div className="BR__data">
              <div className="BR__data--BR">
                <h1>42.34%</h1>
                <p>Bounce Rate</p>
              </div>
              <i className="fa-solid fa-circle-question"></i>
            </div>
          </div>
          <div className="visitorcount__analytics--PPV">
            <div className="PPV__img">
              <img src={cal} alt="" />
            </div>
            <div className="PPV__content">
              <div className="PPV__content--text">
                <h1 className="statsHeading">42.34%</h1>
                <p className="statsSubText">Pages per visit</p>
              </div>
              <div className="PPV__content--icon">
                <img src={info} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="visitorcount__analytics--row2">
          <div className="visitorcount__analytics--TMV">
            <div className="TMV__header">
              <div className="TMV__header--icon">
                <img alt="" src={visitor} />
              </div>
              <div className="TMV__header--data">
                <i className="fa-solid fa-sort-down"></i>
                <p>21%</p>
              </div>
            </div>
            <div className="TMV__content">
              <h1 className="statsHeading">326.60K</h1>
              <p className="statsSubText">Total Monthly Visit</p>
            </div>
          </div>
          <div className="visitorcount__analytics--TMV">
            <div className="TMV__header">
              <div className="TMV__header--icon">
                <img alt="" src={timer} />
              </div>
              <div className="TMV__header--data">
                <i className="fa-solid fa-sort-down"></i>
                <p>24%</p>
              </div>
            </div>
            <div className="TMV__content">
              <h1 className="statsHeading">00:03:27</h1>
              <p className="statsSubText">Avg.Visit Duration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorCount;
