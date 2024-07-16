const express = require("express");
async function handleSignUp(req, res) {
  try {
    res.json({ message: "Hello from server!" });
    console.log({ request: req.body });
  } catch (error) {
    console.error(error);
  }
}
const router = express.Router();
router.route("/register").post(handleSignUp);
module.exports = router;
