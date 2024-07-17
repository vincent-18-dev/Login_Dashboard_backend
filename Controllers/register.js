const express = require("express");
async function handleSignUp(req, res) {
  try {
    res.json({ message: "User Profile created successfully." });
    console.log({ request: req.body });
  } catch (error) {
    console.error(error);
  }
}
const router = express.Router();
router.route("/register").post(handleSignUp);
module.exports = router;
