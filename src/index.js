const express = require("express");
const { PORT } = require("./config/serverconfig");
const bodyParser = require("body-parser");

// const router = express.Router();
const ApiRoutes = require("./routes/index");
const db=require('./models/index')
const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    if(process.env.SYN_DB)
    {
        db.sequelize.sync({alter:true})
    }
  });
};
setupAndStartServer();
