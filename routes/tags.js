const router = require("express").Router();
const Tag = require("../repositories/tags");
const TagsR = require("../repositories/tags");

/* GET tag by id. */
router.get("/:id", async function (req, res, next) {
    let tag = await TagsR.getTag(req.params.id);
    if (tag.length > 0) {
      res.json(tag);
    }
    res.json({ message: "tag non trouve" });
  });

/* GET all tag */
router.get("/", async function (req, res, next) {
 if(req.query.offset || req.query.limit)
 {
     let offset = Number(req.query.offset);
     let limit = Number(req.query.limit);
     res.send(await TagsR.getAllTag(offset,limit));
 }
  else{
    res.send(await TagsR.getAllTag());
  }
  
});
  

/*suppression de tags*/
router.delete("/:id",async function(req,res,next){
    if(await TagsR.deleteTag(req.params.id)){
      res.send("la suppression est bien effectuer");
    }else{
      res.send("suppression a echouee ");
    }
  });
  /* ajouter tag */
router.post("/", async function (req, res, next) {
    res.json(await TagsR.addTag(req.body));
  });
  
  
  /*put update  */
router.put("/:id", async function (req, res, next) {
    res.send(await TagsR.updateTag(req.params.id,req.body));
  });


module.exports = router;