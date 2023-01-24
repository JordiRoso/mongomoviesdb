import {Router} from "express";
const router = Router();


import UserController from"../controllers/UserController.js";
import isSuperAdmin from"../middelwares/isSuperAdmin.js";
import verifyToken from"../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/users", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/",UserController.getAll);
router.patch("/:userId/rent", UserController.rentUserMovies);
router.patch("/users/:userId/delete/:movieId", UserController.deleteUserMovies);
router.get("/:name",UserController.getByName);
router.delete("/:id/deleteMovie/:movieId", UserController.deleteMovie)
router.delete("/delete/:id", UserController.deleteById);


export default router;
