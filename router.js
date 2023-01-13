import {Router} from "express";
const router = Router();

import indexRouter from"./routes/index.js";
import usersRouter from"./routes/user.js";
import authRouter from"./routes/auth.js";
import moviesRouter from "./routes/movie.js";
// import idesRouter from "./routes/id.js"

// routes
router.use("/", indexRouter);
router.use("/users", usersRouter);
router.use("/movies", moviesRouter);
// router.use("/id",idesRouter );


// auth
router.use("/auth", authRouter);

export default router;
