const { CityService } = require("../services/city-service");

const cityService = new CityService();
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);

    return res.status(201).json({
      data: city,
      status: true,
      message: "Succesfully created city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      status: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

const get = async(req, res) => {
    try {
        const response = await cityService.getCity(req.param.id);
    
        return res.status(200).json({
          data: response,
          status: true,
          message: "Succesfully fetched a city",
          err: {},
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          data: {},
          status: false,
          message: "Not able to get city",
          err: error,
        });
      }
};

const destroy = async(req, res) => {
    try {
        const response = await cityService.deleteCity(req.param.id);
    
        return res.status(200).json({
          data: response,
          status: true,
          message: "Succesfully deleted a city",
          err: {},
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          data: {},
          status: false,
          message: "Not able to delete the city",
          err: error,
        });
      }
};
const update =async (req, res) => {
    try {
        const response = await cityService.updateCity(req.param.id,req.body);
    
        return res.status(200).json({
          data: response,
          status: true,
          message: "Succesfully updated city",
          err: {},
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          data: {},
          status: false,
          message: "Not able to update the city",
          err: error,
        });
      }
};