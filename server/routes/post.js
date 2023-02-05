const Post = require("../models/Post");

const router = require("express").Router();

//CREATE POST
router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    const newPost = await post.save();
    res.status(200).json("New Post created");
  } catch (error) {
    res.status(500).json(error);
  }
  res.status(200).json("Post route is working");
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updatad");
    } else {
      res.status(403).json("you can updaye only you post");
    }
  } catch (error) {
    console.log(error);
  }
});
//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    !post && res.status(404).json("Note found");
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      // const post = await Post.findByIdAndDelete(req.params.id);
      res.status(200).json(" Post Deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (error) {
    console.log(error);
  }
});

//LIKE POST
//GET A POST
//GET ALL POSTS

module.exports = router;
