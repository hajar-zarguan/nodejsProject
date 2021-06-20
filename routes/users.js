const router = require("express").Router();
const usersRepo = require("../repositories/users");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  if (req.query.role === "admin") {
    res.send(await usersRepo.getAdmins());
  }
  if (req.query.role === "author") {
    res.send(await usersRepo.getAuthors());
  }
  if (req.query.role === "guest") {
    res.send(await usersRepo.getGuests());
  }
  res.send(await usersRepo.getAllUsers());
});


/* GET user by id. */
router.get("/:id", async function (req, res, next) {
  let user = await usersRepo.getUser(req.params.id);
  if (user.length > 0) {
    res.json(user);
  }
  res.json({ message: "utilisateur n'est pas trouver" });
});

/* Create  user */
router.post("/", async function (req, res, next) {
  res.json(await usersRepo.addUser(req.body));
});


/* GET user by email. */
router.get("/email/:email", async function (req, res, next) {
  res.json(await usersRepo.getUserByEmail(req.params.email));
});


 /*delete user*/
router.delete("/:id",async function(req,res,next){
  if(await usersRepo.deleteUser(req.params.id)){
    res.send("suppression est bien effectuer");
  }else{
    res.send("erreur de suppression d'utilisateur");
  }
});

/*put */
router.put("/:id", async function (req, res, next) {
  res.send(await usersRepo.updateUser(req.params.id,req.body));
});

module.exports = router;
