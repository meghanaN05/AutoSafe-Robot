// import React, {
//   useEffect,
//   useState,
// } from "react";

// import API from "../services/api";
// import Navbar from "../components/Navbar";
// import Map from "../components/Map";
// import HospitalTable from "../components/HospitalTable";

// const Dashboard = () => {
//   const [accident, setAccident] =
//     useState(null);

//   const [hospitals] = useState([
//     {
//       name: "JSS Hospital",
//       distance: "4 km",
//       eta: "8 min",
//     },
//     {
//       name: "Apollo BGS",
//       distance: "5 km",
//       eta: "10 min",
//     },
//     {
//       name: "Manipal Hospital",
//       distance: "6 km",
//       eta: "12 min",
//     },
//     {
//       name: "Narayana Hospital",
//       distance: "7 km",
//       eta: "14 min",
//     },
//     {
//       name: "Columbia Asia",
//       distance: "8 km",
//       eta: "16 min",
//     },
//   ]);

//   useEffect(() => {
//     fetchAccident();
//   }, []);

//   const fetchAccident = async () => {
//     try {
//       const res =
//         await API.get(
//           "/accidents/latest"
//         );

//       setAccident(
//         res.data.accident
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500;600&display=swap');

//         *{
//           box-sizing:border-box;
//         }

//         body{
//           margin:0;
//           font-family:'Inter',sans-serif;
//           background:#000;
//         }

//         .dashboard{
//           min-height:100vh;
//           padding:30px;
//           background:linear-gradient(
//             135deg,
//             #000000 0%,
//             #111111 50%,
//             #1a1a1a 100%
//           );
//         }

//         .container{
//           display:grid;
//           grid-template-columns:1fr;
//           gap:24px;
//           max-width:1400px;
//           margin:auto;
//         }

//         .card{
//           background:#1a1a1a;
//           border:1px solid #333;
//           border-radius:16px;
//           padding:24px;
//           color:white;
//           box-shadow:
//             0 20px 45px -20px rgba(0,0,0,.8),
//             0 4px 12px -4px rgba(0,0,0,.5);
//           position:relative;
//           overflow:hidden;
//         }

//         .card::before{
//           content:"";
//           position:absolute;
//           top:0;
//           left:0;
//           right:0;
//           height:4px;
//           background:linear-gradient(
//             90deg,
//             #6366f1,
//             #818cf8,
//             #38bdf8,
//             #6366f1
//           );
//           background-size:200% 100%;
//           animation:drift 6s linear infinite;
//         }

//         @keyframes drift{
//           from{
//             background-position:0% 0%;
//           }
//           to{
//             background-position:200% 0%;
//           }
//         }

//         .card h2{
//           margin-top:0;
//           margin-bottom:20px;
//           font-family:'Sora',sans-serif;
//           color:white;
//         }

//         .info{
//           display:grid;
//           gap:12px;
//         }

//         .info p{
//           margin:0;
//           padding:12px;
//           background:#262626;
//           border:1px solid #333;
//           border-radius:10px;
//           color:#d1d5db;
//         }

//         .info strong{
//           color:#fff;
//           margin-right:8px;
//         }

//         .empty-state{
//           color:#9ca3af;
//           text-align:center;
//           padding:30px;
//         }

//         @media(max-width:768px){
//           .dashboard{
//             padding:15px;
//           }

//           .card{
//             padding:18px;
//           }
//         }
//       `}</style>

//       <Navbar />

//       <div className="dashboard">
//         <div className="container">

//           <div className="card">
//             <h2>
//               Latest Accident Information
//             </h2>

//             {accident ? (
//               <div className="info">
//                 <p>
//                   <strong>Vehicle ID:</strong>
//                   {accident.vehicleId}
//                 </p>

//                 <p>
//                   <strong>Latitude:</strong>
//                   {accident.latitude}
//                 </p>

//                 <p>
//                   <strong>Longitude:</strong>
//                   {accident.longitude}
//                 </p>

//                 <p>
//                   <strong>Severity:</strong>
//                   {accident.severity}
//                 </p>
//               </div>
//             ) : (
//               <div className="empty-state">
//                 No accident data available
//               </div>
//             )}
//           </div>

//           <div className="card">
//             <h2>Accident Location</h2>
//             <Map accident={accident} />
//           </div>

//           <div className="card">
//             <h2>Nearby Hospitals</h2>
//             <HospitalTable
//               hospitals={hospitals}
//             />
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";
import Map from "../components/Map";
import HospitalTable from "../components/HospitalTable";
import VibrationGraph from "../components/VibrationGraph";
import AccidentAlert from "../components/AccidentAlert";

const Dashboard = () => {
  const [accident, setAccident] = useState(null);

  const [hospitals] = useState([
    {
      name: "JSS Hospital",
      distance: "4 km",
      eta: "8 min",
    },
    {
      name: "Apollo BGS",
      distance: "5 km",
      eta: "10 min",
    },
    {
      name: "Manipal Hospital",
      distance: "6 km",
      eta: "12 min",
    },
    {
      name: "Narayana Hospital",
      distance: "7 km",
      eta: "14 min",
    },
    {
      name: "Columbia Asia",
      distance: "8 km",
      eta: "16 min",
    },
  ]);

  useEffect(() => {
    fetchAccident();
  }, []);

  const fetchAccident = async () => {
    try {
      const res = await API.get("/accidents/latest");

      setAccident(res.data.accident);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <style>{`

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500;600&display=swap');

*{
box-sizing:border-box;
}

body{
margin:0;
font-family:'Inter',sans-serif;
background:#000;
}

.dashboard{
min-height:100vh;
padding:30px;
background:linear-gradient(
135deg,
#000,
#111,
#1a1a1a
);
}

.container{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(420px,1fr));
gap:24px;
max-width:1600px;
margin:auto;
}

.card{
background:#1a1a1a;
border:1px solid #333;
border-radius:16px;
padding:24px;
position:relative;
overflow:hidden;
color:white;

box-shadow:
0 20px 45px -20px rgba(0,0,0,.8),
0 4px 12px -4px rgba(0,0,0,.5);
}

.card::before{

content:"";

position:absolute;

top:0;

left:0;

right:0;

height:4px;

background:linear-gradient(
90deg,
#6366f1,
#818cf8,
#38bdf8,
#6366f1
);

background-size:200% 100%;

animation:drift 6s linear infinite;

}

@keyframes drift{

from{
background-position:0%;
}

to{
background-position:200%;
}

}

.card h2{

margin-top:0;

margin-bottom:20px;

font-family:'Sora',sans-serif;

}

.info{

display:grid;

gap:12px;

}

.info p{

margin:0;

padding:12px;

background:#262626;

border-radius:10px;

border:1px solid #333;

color:#d1d5db;

}

.info strong{

color:white;

}

.empty{

padding:30px;

text-align:center;

color:#9ca3af;

}

.full{

grid-column:1/-1;

}

@media(max-width:768px){

.dashboard{

padding:15px;

}

.container{

grid-template-columns:1fr;

}

}

      `}</style>

      <Navbar />

      <div className="dashboard">

        <div className="container">

          <div className="card">

            <h2>Latest Accident Information</h2>

            {accident ? (

              <div className="info">

                <p>

                  <strong>Vehicle ID :</strong>

                  {accident.vehicleId}

                </p>

                <p>

                  <strong>Latitude :</strong>

                  {accident.latitude}

                </p>

                <p>

                  <strong>Longitude :</strong>

                  {accident.longitude}

                </p>

                <p>

                  <strong>Severity :</strong>

                  {accident.severity}

                </p>

              </div>

            ) : (

              <div className="empty">

                No Accident Data Available

              </div>

            )}

          </div>

          <div className="card">

            <h2>Vehicle Status</h2>

            <AccidentAlert />

          </div>

          <div className="card full">

            <h2>Accident Location</h2>

            <Map accident={accident} />

                    </div>

          <div className="card">
            <h2>Nearby Hospitals</h2>

            <HospitalTable
              hospitals={hospitals}
            />
          </div>

          <div className="card">
            <h2>Vehicle Vibration Graph</h2>

            <VibrationGraph />
          </div>

        </div>

      </div>

    </>
  );
};

export default Dashboard;
          