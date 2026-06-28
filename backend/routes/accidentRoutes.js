// import express from "express";

// import {
//   createAccident,
//   getAllAccidents,
//   getLatestAccident
// } from "../controllers/accidentController.js";

// const router = express.Router();

// router.post("/", createAccident);

// router.get("/", getAllAccidents);

// router.get("/latest", getLatestAccident);

// export default router;
import express from "express";

import {
  createAccident,
  getAllAccidents,
  getLatestAccident,
  getVibrationData,
} from "../controllers/accidentController.js";

const router = express.Router();

router.post("/", createAccident);

router.get("/", getAllAccidents);

router.get("/latest", getLatestAccident);

router.get("/vibration", getVibrationData);

export default router;