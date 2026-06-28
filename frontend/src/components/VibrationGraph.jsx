import React, { useEffect, useState } from "react";
import API from "../services/api";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const VibrationGraph = () => {
  const [graphData, setGraphData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    fetchVibrationData();
  }, []);

  const fetchVibrationData = async () => {
    try {
      const res = await API.get("/accidents/vibration");

      const data = res.data.data;

      const labels = data.map((item, index) => `R${index + 1}`);

      const vibrationValues = data.map(
        (item) => item.vibration
      );

      setGraphData({
        labels,
        datasets: [
          {
            label: "Vibration Value",
            data: vibrationValues,
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59,130,246,0.25)",
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: "#3b82f6",
            borderWidth: 3,
          },
        ],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          font: {
            size: 14,
          },
        },
      },

      title: {
        display: true,
        text: "Vehicle Vibration Analysis",
        color: "#ffffff",
        font: {
          size: 18,
        },
      },

      tooltip: {
        backgroundColor: "#1f2937",
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },

        grid: {
          color: "#333333",
        },

        title: {
          display: true,
          text: "Readings",
          color: "#ffffff",
        },
      },

      y: {
        beginAtZero: true,

        ticks: {
          color: "#ffffff",
        },

        grid: {
          color: "#333333",
        },

        title: {
          display: true,
          text: "Vibration",
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <div
      style={{
        height: "420px",
        width: "100%",
        background: "#1a1a1a",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      {graphData.labels.length > 0 ? (
        <Line
          data={graphData}
          options={options}
        />
      ) : (
        <div
          style={{
            color: "#9ca3af",
            textAlign: "center",
            marginTop: "150px",
            fontSize: "18px",
          }}
        >
          No Vibration Data Found
        </div>
      )}
    </div>
  );
};

export default VibrationGraph;