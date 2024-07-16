const express = require("express");
async function forgetPassword(req, res) {
  try {
    res.json({ message: "Hello from server!" });
    console.log({ request: req.body.email });
  } catch (error) {
    console.error(error);
  }
}
const router = express.Router();
router.route("/forget-password").post(forgetPassword);
module.exports = router;
