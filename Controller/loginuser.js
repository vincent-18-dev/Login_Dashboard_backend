const express = require("express");

async function handleSignIn(req, res) {
  try {
    res.json({ message: "User Logged In" });
    console.log({ request: req.body });
  } catch (error) {
    console.error(error);
  }
}
const router = express.Router();
router.route("/login").post(handleSignIn);

module.exports = router;
