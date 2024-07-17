const express = require("express");
const loginSchema = require("../Models/loginuserModel");
console.log({ loginSchema });
async function handleSignIn(req, res) {
  try {
    const newUser = new loginSchema({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(newUser);
    await newUser.save();
    res.json({ message: "User Logged In" });
    console.log({ request: req.body });
  } catch (error) {
    console.error(error);
  }
}
const router = express.Router();
router.route("/login").post(handleSignIn);

module.exports = router;
