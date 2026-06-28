import React, { useEffect, useState } from "react";
import API from "../services/api";

const AccidentAlert = () => {
  const [accident, setAccident] = useState(null);

  useEffect(() => {
    fetchLatestAccident();

    const interval = setInterval(() => {
      fetchLatestAccident();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchLatestAccident = async () => {
    try {
      const res = await API.get("/accidents/latest");
      setAccident(res.data.accident);
    } catch (err) {
      console.log(err);
    }
  };

  if (!accident) {
    return (
      <div style={cardStyle}>
        <h3 style={titleStyle}>Vehicle Status</h3>

        <div style={safeStyle}>
          Loading...
        </div>
      </div>
    );
  }

  const isAccident =
    accident.accidentDetected ||
    accident.vibration >= 3000;

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>
        Vehicle Status
      </h3>

      <div
        style={
          isAccident
            ? dangerStyle
            : safeStyle
        }
      >
        {isAccident
          ? "🚨 ACCIDENT DETECTED"
          : "🟢 SAFE"}
      </div>

      <div style={infoStyle}>
        <p>
          <strong>Vehicle :</strong>{" "}
          {accident.vehicleId}
        </p>

        <p>
          <strong>Severity :</strong>{" "}
          {accident.severity}
        </p>

        <p>
          <strong>Vibration :</strong>{" "}
          {accident.vibration}
        </p>

        <p>
          <strong>D1 :</strong>{" "}
          {accident.d1} cm
        </p>

        <p>
          <strong>D2 :</strong>{" "}
          {accident.d2} cm
        </p>
      </div>
    </div>
  );
};

const cardStyle = {
  background: "#1a1a1a",
  border: "1px solid #333",
  borderRadius: "12px",
  padding: "20px",
  color: "#fff",
};

const titleStyle = {
  marginTop: 0,
  marginBottom: "20px",
  textAlign: "center",
};

const safeStyle = {
  background: "#14532d",
  color: "#22c55e",
  padding: "18px",
  borderRadius: "10px",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "20px",
  marginBottom: "20px",
};

const dangerStyle = {
  background: "#7f1d1d",
  color: "#ef4444",
  padding: "18px",
  borderRadius: "10px",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "20px",
  marginBottom: "20px",
  animation: "blink 1s infinite",
};

const infoStyle = {
  display: "grid",
  gap: "12px",
};

export default AccidentAlert;