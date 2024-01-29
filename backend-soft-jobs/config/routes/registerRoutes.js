import  express  from "express";
import { createRegisters,getAllRegisters } from "../../src/controllers/registersControllers.js";
import { validateParamsRegister } from "../../middlewares/validateParamsRegister.js";
import { isLogin } from "../../middlewares/verifyToken.js";

const router = express.Router()

router.get("/usuarios",isLogin,getAllRegisters)
router.post("/usuarios",validateParamsRegister,createRegisters)


export default router









/* //with express validator
import express from "express";
import { createRegisters, getAllRegisters } from "../../src/controllers/registersControllers.js";
import { validateParamsRegister } from "../../middlewares/validateParamsRegister.js";
import { isLogin } from "../../middlewares/verifyLogin.js";

const router = express.Router();

router.get("/usuarios", isLogin, getAllRegisters);
router.post("/usuarios", validateParamsRegister, createRegisters);

export default router; */



















