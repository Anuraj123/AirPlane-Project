const {FlightService}=require('../services/index')

const flightService=new FlightService();

const create=async (req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
    
        return res.status(201).json({
          data: flight,
          status: true,
          message: "Succesfully created a flight",
          err: {},
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          data: {},
          status: false,
          message: "Not able to create a flight",
          err: error,
        });
      }
}
const get=async (req,res)=>{
    try {
        const flight = await flightService.getFlight(req.params.id);
    
        return res.status(201).json({
          data: flight,
          status: true,
          message: "Succesfully created a flight",
          err: {},
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          data: {},
          status: false,
          message: "Not able to create a flight",
          err: error,
        });
      }
}

const getAll=async (req,res)=>{
    try {
        const flight = await flightService.getAllFlights(req.query);
    
        return res.status(201).json({
          data: flight,
          status: true,
          message: "Succesfully created a flight",
          err: {},
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          data: {},
          status: false,
          message: "Not able to create a flight",
          err: error,
        });
      }
}



module.exports={
    create,
    getAll
}