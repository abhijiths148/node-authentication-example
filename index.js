const config = require("config");
const mongoose = require("mongoose");
const userRoute = require("../node-authentication/routes/users.route");
const express = require("express");
const app = express();

// end process if no config file is present
if (!config.get("myprivatekey")) {
  console.error("FATAL ERROR: myprivatekey is not defined");
  process.exit(1);
}

// mongodb connection
mongoose
  .connect("mongodb://localhost/nodeauth", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(error => console.error("Could not connect to MongoDB...", error));

app.use(express.json());
app.use("/api/users", userRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
