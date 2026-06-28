// import mongoose from "mongoose";

// const accidentSchema = new mongoose.Schema(
//   {
//     vehicleId: {
//       type: String,
//       required: true
//     },

//     latitude: {
//       type: Number,
//       required: true
//     },

//     longitude: {
//       type: Number,
//       required: true
//     },

//     severity: {
//       type: String,
//       default: "HIGH"
//     },

//     timestamp: {
//       type: Date,
//       default: Date.now
//     }
//   },
//   {
//     timestamps: true
//   }
// );

// export default mongoose.model("Accident", accidentSchema);
import mongoose from "mongoose";

const accidentSchema = new mongoose.Schema(
  {
    vehicleId: {
      type: String,
      required: true,
    },

    d1: Number,

    d2: Number,

    vibration: {
      type: Number,
      required: true,
    },

    accidentDetected: {
      type: Boolean,
      default: false,
    },

    latitude: Number,

    longitude: Number,

    severity: {
      type: String,
      default: "NORMAL",
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Accident",
  accidentSchema
);