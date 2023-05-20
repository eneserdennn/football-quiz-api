const express = require("express");
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middlewares/errorMiddleware.js");
const connectDB = require("./config/db.js");
const playerModel = require("./models/premierLeagueModel.js");

connectDB();
const app = express();

app.use(express.static("./public"));

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/', require('./routes/playerRoutes.js'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
