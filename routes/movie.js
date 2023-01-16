import {Router} from "express";
const router = Router();


import MovieController from"../controllers/MovieController.js";
// import isSuperAdmin from"../middelwares/isSuperAdmin.js";
// import verifyToken from"../middelwares/verifyToken.js";




/* GET users listing. */
router.get("/", MovieController.getAll);
router.get("/:id", MovieController.getById );



export default router;
