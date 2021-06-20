const router = require("express").Router();
const articles = require("../repositories/articles");
const articlesRepo = require("../repositories/articles");

  /*put */
router.put("/:id", async function (req, res, next) {
    res.send(await articlesRepo.updateArticle(req.params.id,req.body));
  });

/* GET article by id. */
router.get("/:id", async function (req, res, next) {
    let article = await articlesRepo.getArticle(req.params.id);
    if (article.length > 0) {
      res.json(article);
    }
    res.json({ message: "utilisateur n'est pas trouver" });
  });

/* GET all article. */
router.get("/", async function (req, res, next) {
 if(req.query.offset || req.query.limit)
 {
     let offset = Number(req.query.offset);
     let limit = Number(req.query.limit);
     res.send(await articlesRepo.getAllArticle(offset,limit));
 }
  else{
    res.send(await articlesRepo.getAllArticle());
  }});

  /* Create article */
router.post("/", async function (req, res, next) {
    res.json(await articlesRepo.addArticle(req.body));
  });
  
/*delete Article*/
router.delete("/:id",async function(req,res,next){
    if(await articlesRepo.deleteArticle(req.params.id)){
      res.send("la suppression est faite");
    }else{
      res.send("erreur de suppression");
    }
  });
  


module.exports = router;