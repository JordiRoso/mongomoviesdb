import {Router} from "express";
const router = Router();


import UserController from"../controllers/UserController.js";
import isSuperAdmin from"../middelwares/isSuperAdmin.js";
import verifyToken from"../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/users", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/",UserController.getAll);
router.patch("/:id/rent", UserController.rentUserMovies);
router.delete("/:id/deleteMovie/:movieId", UserController.deleteMovie);
router.get("/:name",UserController.getByName);
// router.delete("/:id/deleteMovie/:movieId", UserController.deleteMovie)
router.delete("/delete/:id", UserController.deleteById);


export default router;
