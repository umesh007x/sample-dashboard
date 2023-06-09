import React from "react";
import { Chart as ChartJs, registerables, defaults } from "chart.js";
import { Doughnut } from "react-chartjs-2";
defaults.font.family = "Roboto";
ChartJs.register(...registerables);

const Traffic = () => {
  const getDoughnutData = (data) => {
    return {
      labels: ["Direct", "Search"],
      datasets: [
        {
          label: "",
          data: data,
          backgroundColor: ["#4CD7F6", "#E17CFD"],
          barThickness: 10,
          borderRadius: 5,
        },
      ],
    };
  };

  const getDoughnutOptions = (cut) => {
    return {
      cutout: cut,
      plugins: {
        legend: { display: false },
      },
    };
  };
  const plugins = [
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = ((height * 2.8) / 100).toFixed(2);
        ctx.font = fontSize + "em Roboto";
        ctx.textBaseline = "middle";
        var text = `${50}%`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillStyle = "#000";
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
    {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 100).toFixed(2);
        ctx.font = fontSize + "em Roboto";
        ctx.textBaseline = "middle";
        var text = `Direct`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 1.4;
        ctx.fillStyle = "#000";
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  const data = [1, 2];

  return (
    <div className="traffic">
      {data.map((item, index) => (
        <div key={index} className="traffic__tile">
          <div className="traffic__tile--header">
            <p>Traffic Sources</p>
          </div>
          <div className="traffic__tile__content">
            <div className="traffic__tile__content--left">
              <div className="traffic__tile__content__dataHeading">
                <p>source</p>
                <p>Traffic source.%</p>
              </div>

              <div className="traffic__tile__content__data">
                <div className="traffic__tile__content__data--source">
                  <div className="direct">
                    <div></div>
                    <p>Direct</p>
                  </div>
                  <p>50</p>
                </div>
                <div className="traffic__tile__content__data--source">
                  <div className="search">
                    <div></div>
                    <p>Search</p>
                  </div>
                  <p>50</p>
                </div>
              </div>
            </div>
            <div className="traffic__tile__content--right">
              <Doughnut
                plugins={plugins}
                data={getDoughnutData([50, 50])}
                options={getDoughnutOptions(50)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Traffic;
