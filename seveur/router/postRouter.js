const router= require("express").Router()
const postController=require("../controllers/post")
router.post("/api/createposte",postController.addNewPost)
router.get("/api/getAllPost",postController.getAllPost)
router.put("/api/updatePost/:id",postController.updatePost)
router.delete("/api/deletePost/:id",postController.deletePost)
module.exports={postrouter:router}