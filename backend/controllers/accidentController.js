// import Accident from "../models/Accident.js";

// export const createAccident = async (req, res) => {
//   try {

//     const accident = await Accident.create(req.body);

//     res.status(201).json({
//       success: true,
//       accident
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// export const getAllAccidents = async (req, res) => {
//   try {

//     const accidents =
//       await Accident.find().sort({
//         createdAt: -1
//       });

//     res.status(200).json({
//       success: true,
//       accidents
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };

// export const getLatestAccident = async (req, res) => {
//   try {

//     const accident =
//       await Accident.findOne().sort({
//         createdAt: -1
//       });

//     res.status(200).json({
//       success: true,
//       accident
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };
import Accident from "../models/Accident.js";

// Create Accident
export const createAccident = async (req, res) => {
  try {
    const accident = await Accident.create(req.body);

    res.status(201).json({
      success: true,
      accident,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Accidents
export const getAllAccidents = async (req, res) => {
  try {

    const accidents = await Accident.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      accidents,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Latest Accident
export const getLatestAccident = async (req, res) => {
  try {

    const accident = await Accident.findOne().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      accident,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Vibration Data
export const getVibrationData = async (req, res) => {
  try {

    const data = await Accident.find()
      .sort({
        createdAt: 1,
      })
      .select("vibration createdAt");

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};