const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("Hey its user root");
});
module.exports = router;
