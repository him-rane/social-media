const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //HASHING PASSWORD
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //CREAT NEW USER
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //SAVE USER
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
  //res.status(200).json(newUser);
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });
    !findUser && res.status(404).json("User Not Found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      findUser.password
    );
    !validPassword && res.status(400).json("Wrong Password");

    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
