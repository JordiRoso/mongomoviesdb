import {Router} from "express";
const router = Router();


import MovieController from"../controllers/MovieController.js";
// import isSuperAdmin from"../middelwares/isSuperAdmin.js";
// import verifyToken from"../middelwares/verifyToken.js";
import MovieSearchController from "../controllers/MovieSearchController.js";






/* GET users listing. */
router.get("/", MovieController.getAll);
router.get("/:id", MovieController.getById );
router.get("/:id/title/:name", MovieSearchController.getAll );
router.get("/title/:name",MovieController.getByName);




export default router;
