import express  from "express";
import { loginUser } from "../../src/controllers/loginControllers.js";
import { validateRegister } from "../../middlewares/validateParamsLogin.js";

const router = express.Router()

router.post("/login",validateRegister,loginUser)

export default router


/* //con express validator
import express from "express";
import { loginUser } from "../../src/controllers/loginControllers.js";
import { validateLoginMiddleware } from "../../middlewares/validateParamsLogin.js";

const router = express.Router();

router.post("/login", validateLoginMiddleware, async (req, res) => {
  loginUser(req, res);
});

export default router; */













