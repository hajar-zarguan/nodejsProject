const router = require("express").Router();
const Comment = require("../repositories/comments");
const CommentR = require("../repositories/comments");

/* GET comment by id. */
router.get("/:id", async function (req, res, next) {
    let comment = await CommentR.getComment(req.params.id);
    if (comment.length > 0) {
      res.json(comment);
    }
    res.json({ message: "utilisateur non trouve" });
  });
  /* creer un commentaire  */
router.post("/", async function (req, res, next) {
    res.json(await CommentR.addComment(req.body));
  });


/* GET all article. */
router.get("/", async function (req, res, next) {
 if(req.query.offset || req.query.limit)
 {
     let offset = Number(req.query.offset);
     let limit = Number(req.query.limit);
     res.send(await CommentR.getAllComment(offset,limit));
 }
  else{
    res.send(await CommentR.getAllComment());
  } });

/*delete comment*/
router.delete("/:id",async function(req,res,next){
    if(await CommentR.deleteComment(req.params.id)){
      res.send("la suppression est bien faite, le commentaire est suprimer ");
    }else{
      res.send("erreur de suppression");
    }
  });
  
/*put update  */
router.put("/:id", async function (req, res, next) {
    res.send(await CommentR.updateComment(req.params.id,req.body));
  });


module.exports = router;