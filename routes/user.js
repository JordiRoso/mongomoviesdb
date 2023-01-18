import {Router} from "express";
const router = Router();


import UserController from"../controllers/UserController.js";
import isSuperAdmin from"../middelwares/isSuperAdmin.js";
import verifyToken from"../middelwares/verifyToken.js";

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/",UserController.getAll);
router.patch("users/update/:id", UserController.updateUserMovies);
router.get("users/name",UserController.getByName);
router.delete("users/:id/deleteMovie/:movieId", UserController.deleteMovie)
router.delete("users/delete/:id", UserController.deleteById);


export default router;
