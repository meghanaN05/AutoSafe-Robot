import React from "react";

const HospitalTable = ({ hospitals }) => {
  if (!hospitals || hospitals.length === 0) {
    return (
      <div
        style={{
          color: "#9ca3af",
          textAlign: "center",
          padding: "20px",
        }}
      >
        No nearby hospitals found.
      </div>
    );
  }

  return (
    <div
      style={{
        overflowX: "auto",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#1a1a1a",
          border: "1px solid #333",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#2563eb",
            }}
          >
            <th style={tableHeaderStyle}>
              Hospital
            </th>

            <th style={tableHeaderStyle}>
              Distance
            </th>

            <th style={tableHeaderStyle}>
              ETA
            </th>
          </tr>
        </thead>

        <tbody>
          {hospitals.map(
            (hospital, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor:
                    "#1a1a1a",
                }}
              >
                <td style={tableCellStyle}>
                  {hospital.name}
                </td>

                <td style={tableCellStyle}>
                  {hospital.distance}
                </td>

                <td style={tableCellStyle}>
                  {hospital.eta}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  padding: "14px",
  textAlign: "left",
  color: "#ffffff",
  border: "1px solid #333",
  fontWeight: "600",
};

const tableCellStyle = {
  padding: "14px",
  color: "#ffffff",
  backgroundColor: "#1a1a1a",
  border: "1px solid #333",
};

export default HospitalTable;