const bcrypt = require("bcrypt");
const { set } = require("mongoose");
const { findById } = require("../models/User");
const User = require("../models/User");

const router = require("express").Router();
//UPDATE USER
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(8);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        return res.status(500).json(error);
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (error) {
      res.status(403).json("Something went wrong");
    }
  } else {
    res.status(403).json("You can update only your account");
  }
  const user = User.findByIdAndUpdate(req.params.id);
});

//DELET USER
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.user.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (error) {
      res.status(403).json("Something went wrong");
    }
  } else {
    res.status(403).json("You can update only your account");
  }
  const user = User.findByIdAndUpdate(req.params.id);
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    !user && res.status(404).json("Note Found");
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
});

//FOLLOW USER
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        //followings
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("You alredy follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You cant follow yourself");
  }
});

//UNFOLLOW USER
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        //followings
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("You alredy unfollow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You cant unfollow yourself");
  }
});
module.exports = router;
