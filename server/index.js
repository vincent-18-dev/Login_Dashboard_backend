const express = require("express");
const cors = require("cors");
const signin = require("../Controller/loginuser");
const signup = require("../Controller/register");
const forgetPassword = require("../Controller/forgetpassword");
const app = express();
// Use CORS middleware
app.use(cors());

app.use(express.json());

app.post("/login", signin);
app.post("/register", signup);
app.post("/forget-password", forgetPassword);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
