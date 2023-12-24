const {AirportService}=require('../services/index')

const airportService=new AirportService;
const create = async (req, res) => {
    try {
      const airport = await airportService.create(req.body);
  
      return res.status(201).json({
        data: airport,
        status: true,
        message: "Succesfully created a aiport",
        err: {},
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        data: {},
        status: false,
        message: "Not able to create a airport",
        err: error,
      });
    }
  };

  module.exports={
    create
  }