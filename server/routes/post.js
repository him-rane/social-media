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

//LIKE  and Dislike POST
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    !post && res.status(404).json("Note found");
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json(" Post Liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json(" Post Disliked");
    }
  } catch (error) {
    console.log(error);
  }
});
//GET A POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET TIMELINE POSTS
router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    res.json(userPosts.concat(friendPosts));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
